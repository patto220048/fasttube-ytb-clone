import styled from "styled-components";

const ContainerCmt = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;

`
const AvatarContainerCmt = styled.div`
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

function Comment() {
    return ( 
       <ContainerCmt>
            <AvatarContainerCmt src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg" />
            <DetailsCmt>
                <NamelCmt>Name 
                    <DateCmt> 1h ago</DateCmt>
                </NamelCmt>
                <DescCmt/> orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been adcada orem Ipsum is simply dummy text of the printi
            </DetailsCmt>
       </ContainerCmt>
     );
}

export default Comment;