import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Comments from "../components/Comments";
import Card from "../components/Card";
const ContainerVideo = styled.div`
  display: flex;
  gap: 24px;
`;
const ContentVideo = styled.div`
  flex: 5;
`;
const VideoWapper = styled.div``;
const TitleVideo = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 20px;
  color: ${({ theme }) => theme.text};
`;
const InfoVideo = styled.div`
  color: ${({ theme }) => theme.textBtn};
  font-size: 14px;
  font-weight: 600;
  padding: 12px 12px;

`;

const ButtonVideos = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};

`;
const ButtonVideo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #f2f2f2;
    border-radius:25px;
    padding: 0 10px;
    gap: 5  px;
    color: ${({ theme }) => theme.textBtn};
    
    
   
  
`;

const RecommentVideo = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

`;
const ChannelImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  margin-right: 24px;
`;
const ChannelName = styled.span`
  font-weight: 600;
`;

const ChannelCounter = styled.span`
  font-size: 12px;
  margin-top: 5px;
  color: ${({ theme }) => theme.textSoft};
`;


const SubBtn = styled.button`
  background-color: ${({ theme }) => theme.subColorbg};
  font-weight: 600;
  color: white;
  border: none;
  height: 100%;
  padding: 10px;
  border-radius: 25px;
  cursor: pointer;
  margin-right: 60px;
  color: ${({ theme }) => theme.subColor};

  
`;
const ChannelDsec = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  background-color: #f2f2f2;
  height: 100px;
  margin-top:12px;
  border-radius:15px;


`;
const ChannelDsecp = styled.p`
  margin-top:0px;
  padding-left:12px;

`

const VideoPage = () => {
  return (
    <ContainerVideo>
      <ContentVideo>
        <VideoWapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/watch?v=TqlEnvIKrns&ab_channel=SpeedyBoykins"
            title="Recomment Video"
            frameBorder="0"
            allow="accelerometer; autoplay;clipboard-write;encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWapper>
        <TitleVideo>Test videeo</TitleVideo>

        <Channel>
          <ChannelInfo>
            <ChannelImg src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F382/production/_123883326_852a3a31-69d7-4849-81c7-8087bf630251.jpg" />
            <ChannelDetails>
                <ChannelName>FastTV</ChannelName>
                <ChannelCounter>200N subscriber</ChannelCounter>
            </ChannelDetails>
            <SubBtn>SUBSCRIBE</SubBtn>

          </ChannelInfo>


          <ButtonVideos>
                <ButtonVideo >
                    <ThumbUpIcon />123

                
                    <ThumbDownAltIcon />
                </ButtonVideo>
                <ButtonVideo>
                    <ShareIcon /> Share
                </ButtonVideo>
                <ButtonVideo>
                    <SaveAltIcon /> Save
                </ButtonVideo>
          </ButtonVideos>
        </Channel>
        <ChannelDsec>
          <InfoVideo>
            606.606 views 1 days
          </InfoVideo>

          <ChannelDsecp>
            Lorem 1231
          </ChannelDsecp>
        </ChannelDsec>
        <Comments/>
      </ContentVideo>
      <RecommentVideo>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </RecommentVideo>
    </ContainerVideo>
  );
};

export default VideoPage;
