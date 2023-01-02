import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";


const ContainerSearch = styled.div`

    display: flex;
    flex: wrap;
    gap: 10px;
`


function Search() {

    const [videos, setVideos] = useState([]);
    
    const query = useLocation().search
 
    useEffect(()=>{
        const fetchVideos = async () => {
            const res = await axios.get(`http://localhost:3000/api/videos/search${query}`);

            setVideos(res.data)
        }
        fetchVideos()

    },[query])


    return ( 
        <ContainerSearch>
            {videos.map((video, index)=>(
                <Card key={index} video={video}/>
            ))}
        </ContainerSearch>
     );
}

export default Search;