import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Spinner } from "react-bootstrap";
import React from "react";
import Swap from "./Swap";

const StyledButton = styled.div`
  margin-top: 30px;
`;

const SwapCriteria = (props) => {
  
  let canSwap = false;
  let isLoading = null;
  let disabled = false;
  let buttonLabel = "Conectar Carteira";
  let button = "";

  if (props.user) {
    canSwap = true;
  }

  if (props.fromToken.id === "" || props.toToken.id === "") {
    buttonLabel = "Selecionar Token";
    disabled = true;
    canSwap = false;
  }

  if (props.loading) {
    isLoading = (
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
    buttonLabel = "  Carregando...";
    disabled = true;
    canSwap = false;
  }

  button = (
    <Button
      disabled={disabled}
      variant="outline-light"
      size="lg"
      onClick={props.userLog}
    >
      {isLoading}
      {buttonLabel}
    </Button>
  );

  if (canSwap)
    button = (
    <Swap 
    binance={props.binance} 
    userAddress={props.userAddress}
    toToken={props.toToken}
    fromToken={props.fromToken}
    toAmount = {props.toAmount}
    fromAmount ={props.fromAmount}
    web3 = {props.web3}
    successModal = {props.successModal}
    />    
    )

  return <StyledButton>{button}</StyledButton>;
};

export default SwapCriteria;
