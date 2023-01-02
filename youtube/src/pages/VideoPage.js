import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Comments from "../components/Comments";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios, { Axios } from "axios";
import { fetchSuccess, like, dislike, fetchFail } from "../redux/videoSlice";
import { format } from "timeago.js";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { subscription } from "../redux/userSlice";
import Recomment from "../components/Recomment";


const ContainerVideo = styled.div`
  display: flex;
  gap: 24px;
`;
const ContentVideo = styled.div`
  flex: 5;
`;
const VideoWapper = styled.div`
  position: relative;

`;
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
const VideoFrame = styled.video`
  max-height: 720px;
  width:100%;
  object-fit: cover;
  

  

`

const VideoPage = () => {
  
  
  const {curentUser} = useSelector((state) => state.user)
  const {curentVideo} = useSelector((state) => state.video)


  const path = useLocation().pathname.split('/')[2]

  
  const videoRef = useRef()




 
  const dispatch = useDispatch()
  const [channel, setChannel] = useState({})


  useEffect(()=>{

    
    const fetchVideo = async () =>{
      try {
        const videoRes  = await axios.get(`http://localhost:3000/api/videos/find/${path}`)
        
        const channelRes = await axios.get(`http://localhost:3000/api/users/find/${videoRes.data.userId}`)

        setChannel(channelRes.data)
       
        dispatch(fetchSuccess(videoRes.data))
       
      } catch (err) {
        dispatch(fetchFail())
      }  
    }
    fetchVideo()  
  },[path,dispatch])


  const handleLike = async () => {

    await fetch(`http://localhost:3000/api/users/like/${curentVideo._id}`,{
      method: 'PUT',
      credentials: 'include',

    })
    dispatch(like(curentUser._id))

  }
  const handleDislike = async() => {
    await fetch(`http://localhost:3000/api/users/dislike/${curentVideo._id}`,{
      method: 'PUT',
      credentials: 'include',

    })
    dispatch(dislike(curentUser._id))
  }
  const handleSub = async() => {

    curentUser.subscribersUsers.includes(channel._id)
    ? await fetch(`http://localhost:3000/api/users/unsub/${channel._id}`,{
      method: 'PUT',
      credentials: 'include',
    })
    : await fetch(`http://localhost:3000/api/users/sub/${channel._id}`,{
      method: 'PUT',
      credentials: 'include',
    })
    dispatch(subscription(channel._id))
  } 

 

 

  return (
    
    <>
      <ContainerVideo>
        <ContentVideo>
          <VideoWapper>
          <VideoFrame ref={videoRef} src={curentVideo.videoURL}  autoPlay controls />
          </VideoWapper>
          <TitleVideo>{curentVideo.videoTitle}</TitleVideo>

          <Channel>
            <ChannelInfo>
              <ChannelImg src={channel.img} />
              <ChannelDetails>
                  <ChannelName>{channel.name}</ChannelName>
                  <ChannelCounter>{channel.subscribers} subscriber</ChannelCounter>
              </ChannelDetails>
              {curentUser ? <SubBtn onClick={handleSub}>
                {curentVideo.subscribersUsers?.includes(channel._id) ? "UNSUBSCRIBE" : "SUBSCRIBE" }
              </SubBtn>
              : <SubBtn>SUBSCRIBE</SubBtn>}
            </ChannelInfo>


            <ButtonVideos >
                
                 {curentUser 
                 ? <ButtonVideo onClick={handleLike}>
                      {curentVideo.likes?.includes(curentUser._id) ? (<ThumbUpIcon />) : (<ThumbUpOffAltIcon/>) }{" "}{curentVideo.likes?.length}
                  </ButtonVideo>
                :
                <ButtonVideo><ThumbUpIcon /></ButtonVideo>
                  }

                
                 {curentUser 
                 ?<ButtonVideo onClick={handleDislike}>
                  { curentVideo.dislikes?.includes(curentUser._id) ? (<ThumbDownAltIcon />):(<ThumbDownAltOutlinedIcon/>)}
                  </ButtonVideo>
                  : <ButtonVideo><ThumbDownAltIcon  /></ButtonVideo>
                  }
                
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
              {curentVideo.views} views {format(curentVideo.createdAt)}
            </InfoVideo>

            <ChannelDsecp>
              {curentVideo.videoDecs}
            </ChannelDsecp>
          </ChannelDsec>
          <Comments videoId = {curentVideo._id}/>
        </ContentVideo>
        <Recomment tags={curentVideo.tags} curentVideo={curentVideo}/>
      </ContainerVideo>
    </>
  );
};

export default VideoPage;
