import { Link } from "react-router-dom";
import styled from "styled-components";


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
    font-size:14px;
    margin:10px 0;
`
const Info = styled.div`
    font-size:14px;
    color: ${({theme}) => theme.textSoft};

`

const Card = ({type}) => {
    return ( 
        <Link to='/video/test' style={{textDecoration: 'none' }}>
            <ContainerCard type = {type}>
                <ImgCard type = {type} src="https://havecamerawilltravel.com/wp-content/uploads/2020/01/youtube-thumbnails-size-header-1.png"/>
                <DetailsCard  type = {type}>
                    <ChannelImg type = {type} src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg"/>
                    <Texts>
                        <Title>TEST Video13  </Title>
                        <ChannelName>FASTChannel</ChannelName>
                        <Info>606.606 views - 1 days</Info>
                    </Texts>

                </DetailsCard>
            </ContainerCard>
        </Link>
     );
}
 
export default Card;