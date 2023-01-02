import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Comment from "./Comment";




const ContainerCmts = styled.div`
    padding: 12px;
`
const NewContainerCmts = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

`
const AvatarContainerCmts = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    
`
const InputContainerCmts = styled.input`
    width: 100%;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #909090;
    outline-style: none;



`
const ButtonSumitCmt = styled.button`
   
`






function Comments({videoId}) {

    const {curentUser} = useSelector((state) => state.user)
    const {curentVideo} = useSelector((state) => state.video)

    const dispatch = useDispatch()

    const [comments, setCommnents] = useState([])
    const [desc, setDesc] = useState('')



    useEffect(()=>{
        const fetchCommment = async()=> {
            const res = await axios.get(`http://localhost:3000/api/comment/find/${videoId}`)
            setCommnents(res.data)
        }
        fetchCommment()

    },[videoId])
   
    const handleSummit = async () => {
        try {
        const res = await axios.post('http://localhost:3000/api/comment',{desc,videoId},{
            withCredentials: true,
        });

        }
        catch(err){}


    }



    return ( 
    <ContainerCmts>
       {curentUser 
       ? <NewContainerCmts>
         <AvatarContainerCmts src={curentUser.img} />
            <InputContainerCmts onChange={e=>setDesc(e.target.value)} placeholder="Add a comment..."/>
            <ButtonSumitCmt onClick={handleSummit}>Summit</ButtonSumitCmt>
        </NewContainerCmts>
        :
        ""

        }
        {comments.map((comment,index) => (

            <Comment key={index} comment={comment} />
        ))}
        
    </ContainerCmts>
     );
}

export default Comments;