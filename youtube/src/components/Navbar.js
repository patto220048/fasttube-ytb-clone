import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tippy from '@tippyjs/react';
import LogoutIcon from '@mui/icons-material/Logout';

import axios from "axios";

import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import Upload from "./Upload";
import { useState } from "react";


const ContainerNav = styled.div`
    position: sticky;
    top: 0;
    background-color:${({theme}) => theme.bgLighter};
    height:56px;
    position: sticky;
    top: 0;
`

const WapperNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height:100%;
    padding: 0 20px;
    position: relative; 
    background-color: ${({theme}) => theme.bg};
`

const SearchNav = styled.div`
    width: 40%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:5px;
    border: 1px solid ;
    border-radius:25px;



   
`



const SearchInput= styled.input`
    justify-content: center;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 20px;
    
    
    
`


const Button = styled.button`
    padding:5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius:3px;
    font-weight:500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
   
`
const User = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;


 

`
const AvatarUser = styled.img`
    width:30px;
    height: 30px;
    object-fit: cover;
    border-radius:50%;
    background-color:#999;
    cursor: pointer;



`
const HoverIcon = styled.span`

    padding: 5px;
    cursor: pointer;
    border-radius:50%;
    

    &:hover{
        background-color: #ccc;
        
    }

`





function Navbar() {

    const dispatch = useDispatch()
    const {curentUser} = useSelector(state => state.user)

    const navigate = useNavigate()


    const handleLogout =async () => {
        const res = await axios.get('http://localhost:3000/api/auth/signout',{ withCredentials: true})
        dispatch(logout())
    }
    
    const [open, setOpen] = useState(false)

    const [q, setQ] = useState('')


    return (  
        <>
            <ContainerNav>
                <WapperNav>

                  
                        <SearchNav>
                            <SearchInput placeholder="Search" onChange={e=> setQ(e.target.value)}/>
                            <Tippy content = 'Search'>
                                <SearchIcon  style={{cursor: 'pointer'}} onClick={()=>navigate(`/search?q=${q}`)}/>
                            </Tippy>
                        </SearchNav>
               
                    {curentUser ? 
                    <User>
                        
                        <HoverIcon>
                            <VideoCallIcon onClick={()=> setOpen(true)} />
                        </HoverIcon>

                        <HoverIcon>
                            <NotificationsIcon/>
                        </HoverIcon>
                        <HoverIcon>
                            <LogoutIcon onClick={handleLogout}/>
                        </HoverIcon>
                    
                        <Tippy content={curentUser.name}>
                            <AvatarUser src={curentUser.img}/>
                        </Tippy>
                    
                    </User>
                    : 
                    <Link to='signin' style={{textDecoration: 'none',color:'inherit' }}>
                    <Button><AccountCircleIcon />SIGN IN</Button>
                    </Link>}
                </WapperNav>
            </ContainerNav>
            {open && <Upload setOpen={setOpen}/>}
        </>
    );
}

export default Navbar;