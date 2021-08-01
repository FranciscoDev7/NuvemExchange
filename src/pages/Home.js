import React from "react";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import desenho from "../artefacts/desenho.png";

const Slide = styled.section`
  padding-left: 5%;
  padding-top: 50px;
  background: transparent;
  width: 600px;
  height: 400px;
  text-align: flex-start;
  font-family: "Dosis", sans-serif;
`;

const TextSlide = styled.h2`
  font-size: 4rem;
  color: rgba(255, 255, 255);
`;
const ColorText = styled.h2`
  margin-top: -5px;
  margin-bottom: -5px;
  font-size: 4rem;
  color: #343773;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`;

const Img = styled.img`
  margin-left: -20px;
  margin-top: 5%;
  padding-left: 10%;
`;

const SectionB = styled.div`
  padding-top:100px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background: #1f2326;
  z-index: -10;
`;

const Card = styled.div`
  margin-top:50px;
  border: 2px solid white;
  background: transparent;
  margin-left: 50px;
  width: 300px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 20px 20px 20px rgba(45, 55, 68, 0.9);
  margin-bottom:100px;
`;

function Home() {
  return (
    <>
      <Section>
        <Header />
        <Slide>
          <Carousel controls={false}>
            <Carousel.Item interval={2000}>
              <TextSlide>
                A EXCHANGE <ColorText>DESCENTRALIZADA</ColorText> EM PORTUGUÊS
                COMO VOCÊ QUERIA!
              </TextSlide>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <TextSlide>
                ACESSO A LIQUIDEZ <ColorText>MUNDIAL!</ColorText>
              </TextSlide>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <TextSlide>USE SUA CARTEIRA PARA NEGOCIAR</TextSlide>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <TextSlide>
                SUA CRIPTO JAMAIS FICA
                <ColorText>CUSTODIADA!</ColorText>
              </TextSlide>
            </Carousel.Item>
          </Carousel>
        </Slide>
        <Img src={desenho} height="400" alt="React Bootstrap logo" />
      </Section>
      <SectionB>
        <TextSlide style={{fontSize:"2.5rem", textAlign:"center"}}>CONECTAMOS VOCE AS PRINCIPAIS REDES</TextSlide>
        <Wrapper>
          <Card />
          <Card />
          <Card />
        </Wrapper>
      </SectionB>
      <Section>

      </Section>
    </>
  );
}

export default Home;
