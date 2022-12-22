
import styled from "styled-components";
import Card from "../components/Card";


const ContainerHome = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
        
`
const HomePage = () => {
    return (  
        <ContainerHome>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </ContainerHome>
    );
}
 
export default HomePage;    