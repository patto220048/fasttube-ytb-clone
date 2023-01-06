import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";


const VideoFrame = styled.video`
    max-height: 720px;
    width:100%;
    object-fit: cover;

`



function SetVideoFrame({videoURL,path}) {
  
    const videoRef = useRef(null)


    

    useEffect(() => {

      console.log(videoRef.current.playbackRate)

      
      videoRef.current.addEventListener('timeupdate', function handleView(){
        
          if(videoRef.current.currentTime >=(videoRef.current.duration/2)-2 && videoRef.current.currentTime <= (videoRef.current.duration/2 )-1.7)
          {
           console.log(videoRef.current.currentTime)
           const fectchView = async() => {
            await axios.put(`http://localhost:3000/api/videos/view/${path}`)
          }
          fectchView()
        
            
          }
          else if (videoRef.current.currentTime/videoRef.current.duration ===1 ){
            const fectchView = async() => {
              await axios.put(`http://localhost:3000/api/videos/view/${path}`)
            }
            fectchView()
          
          }
            
        })
      return () => {
         
          }
      
    },[videoRef])
   


    return ( 
        <VideoFrame ref={videoRef}  src={videoURL} controls  />
     );
}

export default SetVideoFrame;