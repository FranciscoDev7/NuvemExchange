import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import styled from 'styled-components'
import bnc from "../../artefacts/BNC.png";
import {BsThreeDotsVertical} from "react-icons/bs"

const Card = styled.div`
margin-top:60px;
padding:40px 0px;
left:0px;
height:100vh;
width:350px;
position:fixed;
display:flex;
justify-content:flex-start;
flex-direction:column;
background: rgba(20, 38, 65);
color: rgba(255, 255, 255, 0.74);
z-index:200;
transition:800ms;
overflow-y:scroll;
&.active {
  left:0px;
    transition:350ms;
  }
&.not-active{
  left:-330px;
   transition:350ms;
}
`
const Container = styled.div`
  margin: 10px 50px;
  background-color: rgba(0, 0, 0, 0.3);
  height: 200px;
  width: 70%;
  border-radius: 1rem;
  word-wrap:break-word;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

`
const NetworkContainer = styled.a`
  display: flex;
  margin: 10px 50px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.74);
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  height: 80px;
  width: 70%;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Logo = styled.div`
  width: 50px;
  margin-right: 5px;
`;

const Text = styled.p`
  font-size: 1.1rem;
  width: 50%;
  margin-top: 5%;
  margin-left: 5px;
  text-align:center;
`;
const Button = styled.div`
margin-left:330px;
height:100vh;
width:20px;
position:fixed;
background: rgba(50, 50, 50);
cursor: pointer;
display:flex;
flex-direction:column;
justify-content:center;
z-index:250;
&:hover{background: rgba(20, 20, 20);}
&.active {
  left:0px;
    transition:350ms;
  }
&.not-active{
  left:-330px;
   transition:350ms;
}
`

const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.4rem;
`;

const SideNav = (props) => {
  const account = props.userAddress
  let balance = props.accountBalance
  balance = (balance/10**18).toFixed(8)
  const ethBRL=props.ethBRL
  const balanceBRL = (balance*ethBRL).toFixed(2)
  const sideNav = props.sideNav   
  let accountTokens = props.balances
  let tokenBalances = null
  if(account){
    tokenBalances = accountTokens.map(value=>{
      let balance = (value.balance/10**value.decimals).toFixed(8)
      return <NetworkContainer key={value.tokenAddress}><Text>{value.symbol}</Text><Text style={{marginLeft:"-30px"}}>{balance}</Text></NetworkContainer>
    })

  }
 
    return (<>
        <Card className={sideNav?"active":"not-active"} >
        <Title>Dashboard</Title>
         <NetworkContainer href="/redes">
          <Logo>
          <img src={bnc} height="35" alt="Escolher" />
          </Logo>
          <Text>Binance Chain</Text>
          </NetworkContainer>
        <Container>
        <Text style={{fontSize:"1.7rem"}}>R${balanceBRL}</Text>
        <Text>{balance}</Text>
          </Container>
         
          <Container>
          <Text>Endereço</Text>
          <Text style={{marginTop:"-5%"}}>{account}</Text>
          </Container>
          {tokenBalances}
      </Card>
      <Button className={sideNav?"active":"not-active"} onClick={props.toggleSideNav}>
      <BsThreeDotsVertical style={{zIndex:"300", fontSize:"1.5rem", color:"white"}}/>
  
      </Button>

      </>
    )
}

export default SideNav



