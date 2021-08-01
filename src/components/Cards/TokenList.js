import React from "react";
import styled from "styled-components";
import Token from "./Token";

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
const TokenContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const TokenList = (props) => {
  let tokenList = props.tokenList;
  let tokenRender = tokenList.map((value, index) => {
    const key = value.symbol + index;
    return <Token key={key} value={value} chosenToken={props.chosenToken} />;
  });

  return (
    <Card>
      <TokenContainer>{tokenRender}</TokenContainer>
    </Card>
  );
};

export default TokenList;
