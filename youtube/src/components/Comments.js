import styled from "styled-components";
import Comment from "./Comment";



const ContainerCmts = styled.div`
    padding: 12px;
`
const NewContainerCmts = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

`
const AvatarContainerCmts = styled.div`
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






function Comments() {
    return ( 
    <ContainerCmts>
        <NewContainerCmts>
            <AvatarContainerCmts src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg"/>
            <InputContainerCmts placeholder="Add a comment..."/>
        </NewContainerCmts>

        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        
    </ContainerCmts>
     );
}

export default Comments;