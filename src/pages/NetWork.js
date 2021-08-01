import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Section from "../components/Section/Section";
import Header from "../components/Header/Header";
import eth from "../artefacts/eth.png";
import bnc from "../artefacts/BNC.png";
import polygon from "../artefacts/polygon.png";

const Card = styled.section`
  background: rgba(0, 0, 0, 0.7);
  width: 500px;
  height: 500px;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, 0.74);
  align-items: center;
  flex-direction: column;
  box-shadow: 20px 20px 20px rgba(45, 55, 68, 0.3);
  z-index: 100;
`;

const Container = styled.a`
  display: flex;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.74);
  background-color: rgba(0, 0, 0, 0.507);
  border-radius: 1rem;
  height: 80px;
  width: 55%;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  width: 50%;
  height: 50%;
  margin-top: 8%;
  margin-left: 5px;
`;
const Logo = styled.div`
  width: 50px;
  padding: 10px 10px;
  margin-right: 20px;
`;

const Link = styled.a`
  margin-left: 5px;
  text-decoration: none;
  font-size: 1rem;
  color: rgba(256, 256, 256, 0.5);
`;
const MiniContianer = styled.div`
  height: 10px;
  color: rgba(256, 256, 256, 0.5);
  display: flex;
  margin-top: 30px;
`;

const NetWork = () => {
  return (
    <Section>
      <Header />
      <Card>
        <Title>Escolha uma Blockchain</Title>
        <Container href="/rede_eth">
          <Logo>
            <img src={eth} height="35" alt="Escolher" />
          </Logo>
          <Text>Rede Ethereum</Text>
        </Container>
        <Container href="/rede_bnc">
          <Logo>
            <img src={bnc} height="35" alt="Escolher" />
          </Logo>
          <Text>Binance Chain</Text>
        </Container>
        <Container href="/rede_polygon">
          <Logo>
            <img src={polygon} height="35" alt="Escolher" />
          </Logo>
          <Text>Polygon</Text>
        </Container>
        <MiniContianer>
          <p>Ficou com dúvida? </p>
          <Link href="">Entenda</Link>
        </MiniContianer>
      </Card>
    </Section>
  );
};

export default NetWork;
