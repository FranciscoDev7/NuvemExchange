import React from "react";
import styled from "styled-components";
import Token from "./Token";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Card = styled.div`
  margin-top:10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const Header = styled.div`
  margin-top:60px;
  background: white;
  padding:5px 50px 20px;
  width:70%;
  font-size:1.2rem;
  font-weight:600;
`;

const TokenList = ({ tokens, chosenToken }) => {
  let tokenRender = tokens.map((value, index) => {
    const key = value.symbol + index;
    return <Token key={key} value={value} chosenToken={chosenToken} />;
  });

  return (
    <>
 
     <Header>
      <Card>
       <Container>
             <Row>
              <Col>Ranking</Col>
              <Col>Ícone</Col>
              <Col>Token</Col>
              <Col>Símbolo</Col>
              <Col>Preço</Col>
              <Col>Capitalização</Col>
              <Col></Col>
            </Row>
          
          </Container>
      </Card>
      </Header>
     <Card> {tokenRender}
       </Card>
    </>
  );
};

export default TokenList;
