import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";



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




function Navbar() {
    return (  
        <ContainerNav>
            <WapperNav>
                <SearchNav>
                    <SearchInput placeholder="Search"/>
                    <SearchIcon style={{cursor: 'pointer'}}/>
                </SearchNav>
                <Link to='signin' style={{textDecoration: 'none',color:'inherit' }}>
                <Button><AccountCircleIcon  />SIGN IN</Button>
                </Link>
            </WapperNav>
        </ContainerNav>
    );
}

export default Navbar;