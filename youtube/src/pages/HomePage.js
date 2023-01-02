
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from 'axios'

const ContainerHome = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
        
`
const HomePage = ({type}) => {
    const [videos, setVideo] = useState([])

    useEffect(()=>{
        const fetchVideo = async()=> {
            const res = await axios.get(`http://localhost:3000/api/videos/${type}`,{
                withCredentials: true

            })
            setVideo(res.data)
        }
        fetchVideo()

    },[type])


    return (  
        <ContainerHome>
            {videos.map((video,index)=>(
                <Card key={index} video={video}/>
            ))}
          
        </ContainerHome>
    );
}
 
export default HomePage;    