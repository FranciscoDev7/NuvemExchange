import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCaretDown } from "react-icons/fa";
import TradingCardToken from "./TradingCardToken";
import Error from "../Error/Error";
import SwapCriteria from "../Swap/SwapCriteria"
;

const Card = styled.section`
  background:rgba(20, 38, 65);
  width: 500px;
  height: 500px;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.74);
  box-shadow: 20px 20px 20px rgba(45, 55, 68, 0.3);
`;
const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

const Container = styled.div`
  padding: 20px 0px 0px 10px;
  display: flex;
  margin: 5px 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.507);
  border-radius: 1rem;
  height: 100px;
`;

const Text = styled.p`
  font-size: 0.7rem;
  width: 20px;
  text-align: center;
`;
const InputContainer = styled.div`
  display:flex;
  flex-direction: column; 
`

const CriptoInput = styled.input`
  width: 180px;
  color: rgba(255, 255, 255, 0.74);
  padding: 0 10px;
  background-color: transparent;
  border-color: transparent;
  text-align: end;
  font-size: 1.1rem;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;



const InvertArrow = styled.div`
  transform: translateX(0px);
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.507);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CeteredContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  height: 40px;
  width: 65%;
`;

function TradingCard(props) {
  let errorCode = 0;
  let toAmount = parseFloat(props.toAmount).toFixed(5);
  let fromAmountBRL = props.fromBRL*props.fromAmount
  fromAmountBRL = parseFloat(fromAmountBRL).toFixed(2);
  let toAmountBRL = props.toBRL*props.toAmount
  toAmountBRL = parseFloat(toAmountBRL).toFixed(2);

  if (props.fromToken.id === "" || props.toToken.id === "") {
    if (props.fromAmount !== "") errorCode = 1;
  }
  if (props.loading) toAmount=""
  //let fromAmount = parseFloat(props.fromAmount).toFixed(5);
  //let fee = parseFloat(props.fee).toFixed(4);
  return (
    <Card>
      <Title>NEGOCIAR TOKENS </Title>
      <Container>
        <Text>DE </Text>
        <TradingCardToken
          tokenClicked={props.fromToken}
          openTokenSearch={props.openTokenSearch}
          clicked="youPay"
        />
        <InputContainer>
        <CriptoInput
          value={props.fromAmount}
          onChange={(e) => props.userInput(e.target.value)}
          placeholder="0"
          type="number"
          min="0"
        ></CriptoInput>
          <CriptoInput
          style={{fontSize:"0.9rem", color:"rgba(255, 255, 255, 0.5)"}}
          value={`~ R$ ${fromAmountBRL}`}
          disabled
        ></CriptoInput>
        </InputContainer>
                
      </Container>
      <CeteredContainer>
        <InvertArrow onClick={props.switchTokens}>
          <FaCaretDown />
        </InvertArrow>
        <Error code={errorCode} />
      </CeteredContainer>

      <Container>
        <Text>PARA</Text>

        <TradingCardToken
          tokenClicked={props.toToken}
          openTokenSearch={props.openTokenSearch}
          clicked="youReceive"
        />
            <InputContainer>
        <CriptoInput
          value={toAmount}
          placeholder="0"
          type="number"
          disabled
        ></CriptoInput>
          <CriptoInput
          style={{fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.5)"}}
          value={`~ R$ ${toAmountBRL}`}
          disabled
        ></CriptoInput>
        </InputContainer>
      </Container>
     <SwapCriteria
      loading={props.loading}
      userLog = {props.userLog}
      user = {props.user}
      toToken={props.toToken}
      fromToken={props.fromToken}
      binance ={props.binance}
      userAddress = {props.userAddress}
      toAmount = {props.toAmount}
      fromAmount ={props.fromAmount}
      web3 = {props.web3}
      successModal = {props.successModal}
      />
    </Card>
  );
}

export default TradingCard;
