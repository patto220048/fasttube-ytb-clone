import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {format} from "timeago.js"


const ContainerCard = styled.div`
    width:${(props)=> props.type !== "sm" && "345px"};
    margin-bottom:${(props)=> props.type === "sm" ? "10px":"40px"};
    cursor:pointer;
    display: ${(props)=> props.type === "sm" && "flex"};

`
const ImgCard = styled.img`
    width:100%;
    height:${(props)=> props.type === "sm" ? "120px": "202px"};
    border-radius:12px;
    flex:1;


`
const DetailsCard = styled.div`
    display: flex;
    flex: 1;
    margin-top: ${(props)=> props.type !== "sm" && '16px'};
    gap: 4px;
 

`
const ChannelImg = styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
    background-color:#999;
    object-fit: cover;
    display: ${(props)=> props.type === "sm" && "none"};


`
const Texts = styled.div`
    margin: 0 10px;
    
`
const Title = styled.h1`
    font-size:16px;
    font-weight:500;
    color: ${({theme}) => theme.text};
    margin-top: 0;


`
const ChannelName = styled.h2`
    color: ${({theme}) => theme.textSoft};
    font-size:12px;
    margin:10px 0;
    &:hover {
        color: ${({theme}) => theme.text}
    }
`
const Info = styled.div`
    font-size:14px;
    color: ${({theme}) => theme.textSoft};

`

const Card = ({type,video}) => {
    const [channel, setChannel] = useState({})

    useEffect(()=>{
        let mount = true;
        const fetchChannel = async()=> {
            const res = await axios.get(`http://localhost:3000/api/users/find/${video.userId}`)
            if(mount){
                setChannel(res.data)
            }
            return () =>{
                mount = false
            }
        }
        fetchChannel()

    },[video.userId])
    return ( 
        <Link to={`/video/${video._id}`} style={{textDecoration: 'none' }}>
            <ContainerCard type = {type}>
                <ImgCard type = {type} src={video.imgURL}/>
                <DetailsCard  type = {type}>
                    <ChannelImg type = {type} src={channel.img}/>
                    <Texts>
                        <Title>{video.videoTitle}  </Title>
                        <ChannelName>{channel.name}</ChannelName>
                        <Info>{video.views}views • {format(video.createdAt)}</Info>
                    </Texts>

                </DetailsCard>
            </ContainerCard>
        </Link>
     );
}
 
export default Card;