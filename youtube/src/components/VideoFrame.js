import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";


const VideoFrame = styled.video`
    max-height: 720px;
    width:100%;
    object-fit: cover;

`



function SetVideoFrame({property,path}) {
    const videoRef = useRef(null)
    

    useEffect(() => {
      videoRef.current.addEventListener('timeupdate', function handleView(){
        if(videoRef.current.currentTime/videoRef.current.duration===1)
          {
              const fectchView = async() => {
                await axios.put(`http://localhost:3000/api/videos/view/${path}`)
              }
              fectchView()
          }
        })
     
  
  
    },[path])
   


    return ( 
        <VideoFrame ref={videoRef}  src={property} controls  />
     );
}

export default SetVideoFrame;