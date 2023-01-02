import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFail, loginStart, loginSuccess } from "../redux/userSlice";

import app,{auth,providerGG} from "../firebase"

import {signInWithPopup} from "firebase/auth"
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

const ContainerSignin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({theme})=> theme.text};

`;
const WapperSignin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme})=> theme.bgLighter};
    padding: 20px 50px;
    gap: 10px;
    border: 1px solid ${({theme})=> theme.soft};

`;

const TitleSignin = styled.h1`
    font-size:24px;

`;

const SubSignin = styled.h2`
    font-size:20px;


`;

const InputSignin = styled.input`

    border: 1px solid transparent;
    width: 100%;
    outline: none;
    padding: 10px; 
    border-radius:15px;
    &:hover{
        border: 1px solid ${({theme}) => theme.soft}

    }
`;

const BtnSignin = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    cursor:pointer;
    font-weight:600;
    background-color: ${({theme})=> theme.text};
    color: ${({theme})=> theme.btnsignupcolor};
    &:hover{
        opacity: 0.8
    }
    
`;

const More = styled.div`
    display: flex;
    font-size: 10px;
    margin-top: 10px;   
    color: ${({theme})=> theme.textSoft};


`;
const Links = styled.div`
    margin-left: 50px;
`;


const Link = styled.span`
    margin-left: 30px
`




function SigninPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogin = async (e) =>{
        e.preventDefault();
        dispatch(loginStart())

        try {
            const res = await axios.post('http://localhost:3000/api/auth/signin',{name,password},{
                withCredentials: true,
            }); //for POST

            dispatch(loginSuccess(res.data))

            navigate(`/`)

            

        } catch (err) { 
            dispatch(loginFail())
        }
    };
    const signInWithGG = async () =>{
        dispatch(loginStart())
        signInWithPopup(auth, providerGG)
            .then ((result) =>{
                axios.post('http://localhost:3000/api/auth/google',{
                    name: result.user.displayName,
                    email: result.user.email,
                    img: result.user.photoURL
                },
               { withCredentials: true}
                )
                .then((res)=>{
                    dispatch(loginSuccess(res.data))
                })

            })
            .catch (err => {
                dispatch(loginFail())
            })
    }
    return ( 
        <ContainerSignin>
            <WapperSignin>
                <TitleSignin>Sign in</TitleSignin>
                <SubSignin>to continue in FastTube</SubSignin>
                <InputSignin placeholder="username" onChange={e=>setName(e.target.value)}/>
                <InputSignin type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                <BtnSignin onClick={handleLogin}>Sign in</BtnSignin>
                <TitleSignin>or</TitleSignin>
                <BtnSignin onClick={signInWithGG}>Sign in with Google</BtnSignin>
                <TitleSignin>or</TitleSignin>
                <InputSignin placeholder="username" onChange={e=>setName(e.target.value)}/>
                <InputSignin placeholder="email" onChange={e=>setEmail(e.target.value)}/>
                <InputSignin type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                <BtnSignin>Sign up</BtnSignin>
            </WapperSignin>
            <More>
                English (USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </ContainerSignin>
     );
}

export default SigninPage;