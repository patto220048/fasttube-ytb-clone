import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import { Link } from "react-router-dom";


const ContainerMenu = styled.div`
    flex: 1;
    height:100vh;
    background-color:${({theme}) => theme.bg};
    color:${({theme}) => theme.text};;
    font-size:14px;
    position:sticky;
    top: 0;
`
const WapperMenu = styled.div`
    padding: 18px 26px;
    height:100%;
    
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap:3px;
    font-weight: bold;
    margin-bottom:25px;s

    
`
const Img = styled.img`
    height: 40px;
 
`

const ItemsMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding:7.5px 0;
    &:hover{
        background-color: ${({theme}) => theme.soft};
        border-radius: 10px;
        padding-left: 10px;

    }

`
const Hr = styled.hr`
    margin: 15px;
    border: 0.5px solid ${({theme}) => theme.soft};

`
const Login = styled.div`


`
const Button = styled.button`
    padding:5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius:3px;
    font-weight:500;
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;



`
const TitleMenu = styled.div`
    font-size:14px;
    font-weight:500;
    color: #aaaaaa;
    margin-bottom: 20px;
`




const Menu=({darkMode,setDarkMode})=>{

    return ( 
        <ContainerMenu>
            <WapperMenu>
                <Link to='/' style={{textDecoration: 'none',color:'inherit' }}>
                <Logo>
                    <Img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"/>
                    FastTube
                </Logo>
                </Link>
                <ItemsMenu>
                    <HomeIcon/>Home
                </ItemsMenu>
                <ItemsMenu>
                    <ExploreIcon/>Explore
                </ItemsMenu> 
                <ItemsMenu>
                    <SubscriptionsIcon/>Subscriptions
                </ItemsMenu>
                <Hr/>
                <ItemsMenu>
                    <VideoLibraryIcon/>Library
                </ItemsMenu> 
                <ItemsMenu>
                    <HistoryIcon/>History
                </ItemsMenu>
                <Hr/> 
                <Login>
                    Lorem ipsum dolor sit amet, consectetur adip
                    <Link to='signin' style={{textDecoration: 'none',color:'inherit' }}>
                    <Button><AccountCircleIcon/>SIGN IN</Button>
                    </Link>
                </Login>
                <Hr/> 
                <TitleMenu>
                    BEST OF FASTTUBE
                </TitleMenu>
                
                <ItemsMenu>
                    <LibraryMusicIcon/>Music
                </ItemsMenu> 
                <ItemsMenu>
                    <SportsBaseballIcon/>Sports
                </ItemsMenu>
                <ItemsMenu>
                    <SportsEsportsIcon/>Gaming
                </ItemsMenu>
                <ItemsMenu>
                    <MovieIcon/>Movie
                </ItemsMenu>
                <ItemsMenu>
                    <FeedIcon/>News
                </ItemsMenu>
                <ItemsMenu>
                    <LiveTvIcon/>Live
                </ItemsMenu>
                <Hr/>
                <ItemsMenu onClick={()=> setDarkMode(!darkMode)}>
                    <SettingsBrightnessIcon/>{darkMode ? "Dark":"Light"} Mode
                </ItemsMenu>
                <ItemsMenu>
                    <SettingsApplicationsIcon/>Setting
                </ItemsMenu>
                <ItemsMenu>
                    <FlagIcon/>Report
                </ItemsMenu>
                <ItemsMenu>
                    <HelpOutlineIcon/>Help
                </ItemsMenu>
                
                
                
                
                
              
                
            </WapperMenu>
        </ContainerMenu>
     );
}

export default Menu;