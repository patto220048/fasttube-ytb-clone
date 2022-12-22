import styled from "styled-components";

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
    return ( 
        <ContainerSignin>
            <WapperSignin>
                <TitleSignin>Sign in</TitleSignin>
                <SubSignin>to continue in FastTube</SubSignin>
                <InputSignin placeholder="username"/>
                <InputSignin type="password" placeholder="password"/>
                <BtnSignin>Sign in</BtnSignin>
                <TitleSignin>or</TitleSignin>
                <InputSignin placeholder="username"/>
                <InputSignin type="password" placeholder="password"/>
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