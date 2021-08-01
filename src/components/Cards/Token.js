import React from 'react'
import styled from "styled-components"

const Card = styled.div`
    margin-top:10px; 
    width: 95%;
    height: 70px;
    background: rgba(218, 217, 217, 0.671);
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-between;
    cursor: pointer;
    &:hover{
      background:rgba(218, 217, 217, 0.3);
    }
`
const Symbol = styled.div`
   margin-left: -40px;
    font-weight: 600;
    width: 60px;
`
 

const Name = styled.div`
font-weight: 600;
    width: 200px;
    font-size: 0.8rem;
` 
 
const Logo = styled.img`
 margin-left:5%;
`
   
const Token = (props)=> {

    return (
      <Card onClick={()=>props.chosenToken(props.value)}>
        <Logo
          src={props.value.logoURI}
          height="30"
          alt="token-logo"
        />
        <Symbol>{props.value.symbol}</Symbol>
        <Name>{props.value.name}</Name>
        
      </Card>
    );
  }
  
  export default Token;
  
