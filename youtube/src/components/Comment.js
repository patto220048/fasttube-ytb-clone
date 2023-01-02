import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { format } from "timeago.js";

const ContainerCmt = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;

`
const AvatarContainerCmt = styled.img`
    width: 40px;
    height: 40px;
    background-color: #333;
    border-radius:50%;
    position: static;
    object-fit: cover;
    
`
const DetailsCmt = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: ${({ theme }) => theme.text};

`
const NamelCmt = styled.span`
    font-size: 13px;
    font-weight: 600;
    

  
`
const DateCmt = styled.span`
    font-size: 12px;
    color: #909090;
    font-weight: 300;


`

const DescCmt = styled.span`
    font-size: 10px;

`

function Comment({comment}) {
    


    const [channel, setChannel] = useState({})


    useEffect(()=> {    
        const fetchChannel = async() =>{    
            const res = await axios.get(`http://localhost:3000/api/users/find/${comment.userId}`)
            setChannel(res.data)
        }
        fetchChannel()
    },[comment.userId])


    return ( 
       <ContainerCmt>
        {channel.img ? <AvatarContainerCmt src={channel.img} /> : <AvatarContainerCmt/>}
            <DetailsCmt>
                <NamelCmt>{channel.name}
                    <DateCmt> {format(comment.createdAt)}</DateCmt>
                </NamelCmt>
                <DescCmt/> {comment.desc} <DescCmt/>  
            </DetailsCmt>
       </ContainerCmt>
     );
}

export default Comment;