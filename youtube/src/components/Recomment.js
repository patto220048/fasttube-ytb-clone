
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./Card";

const ContainerRec = styled.div`
    flex : 2;
`

function Recomment({tags}) {

    const [videos, setVideos] = useState([])

    useEffect(()=>{
        const fetchVideos = async() => {
            const res = await axios.get(`http://localhost:3000/api/videos/tags?tags=${tags}`) 
            setVideos(res.data)
        }
        fetchVideos()

    },[tags])



    return (
        <ContainerRec>
            {videos.map((video, index)=>(
                <Card type='sm' key={index} video={video}/>
            ))}
        </ContainerRec>
    );
}

export default Recomment;