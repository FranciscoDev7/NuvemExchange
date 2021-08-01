import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCaretDown } from "react-icons/fa";

const Card = styled.div`
  max-width: 140px;
  min-height: 60px;
  margin-left: 15px;
  display: flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transform: translateY(-10px);
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Logo = styled.div`
  width: 50px;
  padding: 10px 10px;
  margin-right: 5px;
`;

const Label = styled.h3`
  width: 100px;
  font-size: 1rem;
  font-weight: bold;
  transform: translateY(4px);
`;

const ArrowDown = styled.div`
  font-size: 1.5rem;
  transform: translateY(-4px);
`;

const EmptyToken = styled.h3`
  margin-top:7px;
  width: 120px;
  font-size: 1rem;
  font-weight: bold;
  transform: translatex(5px);
  text-align:center;
 
`

const TradingCardToken = (props) => {
  const token = props.tokenClicked;
  let renderedToken = (
    <>
      <Logo>
        <img src={token.logoURI} height="35" alt="Escolher" />
      </Logo>
      <Label>{token.symbol}</Label>
    </>
  );
  if (token.id === "") {
    renderedToken = <EmptyToken>SELECIONAR</EmptyToken>
  }

  return (
    <Card onClick={() => props.openTokenSearch(props.clicked)}>
      {renderedToken}
      <ArrowDown>
        <FaCaretDown />
      </ArrowDown>
    </Card>
  );
};

export default TradingCardToken;
