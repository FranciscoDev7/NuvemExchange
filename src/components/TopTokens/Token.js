import React from 'react'
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Card = styled.div`
  background: white;
  padding:10px 50px;
  width:70%;
  margin-top:5px;
 
`
const Symbol = styled.div`
   font-weight: 600;
   
`
 
const Name = styled.div`
font-weight: 600;
  font-size: 0.8rem;
` 
 
const Logo = styled.img`

 `

const Token = ({value, chosenToken})=> {

    return (
      <Card>
        <Container>
        <Row>
        <Col><Symbol>{value.rank}</Symbol></Col>
        <Col><Logo
          src={value.logo}
          height="40"
          alt="token-logo"
        /></Col>
        <Col><Symbol>{value.name}</Symbol></Col>
        <Col><Name>{value.symbol}</Name></Col>
        <Col><Name>R${value.price}</Name></Col>     
        <Col><Name>R${value.marketCap}</Name></Col>
     
        <Col><Button onClick={()=>chosenToken(value)} variant="dark">Comprar</Button></Col>
      
        </Row>
       
        </Container>
      </Card>
    );
  }
  
  export default Token;
  
