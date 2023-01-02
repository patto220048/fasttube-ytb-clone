

import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Contents from "./components/Contents";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme } from "./untils/Theme";
import { lightTheme } from "./untils/Theme";

import VideoPage from "./pages/VideoPage";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import Search from "./pages/Search";

const Container = styled.div`
  display: flex;
  

  
`;

const Main = styled.div`
  background-color: ${({theme}) => theme.bg};
  
  flex: 7;
`

const Wapper = styled.div`
  padding: 22px ;
`

function App() {
  const [darkMode, setDarkMode] = useState(false);
  

  return (
    <ThemeProvider theme= {darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Main> 
            <Navbar/>
            <Wapper>
              <Routes>
                <Route path="/">
                  <Route index element={<HomePage type='random'/>}/>
                  <Route path="random" element={<HomePage type='random'/>}/>
                  <Route path="trends" element={<HomePage type='trend'/>}/>
                  <Route path="subscriptions" element={<HomePage type='sub'/>}/>
                  <Route path="search" element={<Search type='search'/>}/>
                    <Route path="signin" element={<SigninPage/>}></Route>
                    <Route path="video">
                      <Route path=":id" element={<VideoPage/>}/>
                    </Route>
                </Route>  
              </Routes>
              
            </Wapper>

          </Main>
        </BrowserRouter>

      </Container>
    </ThemeProvider>
    
  );  
}

export default App;   
