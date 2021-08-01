import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../../artefacts/nuvem.png";
import React from "react";
import StyledButton from "../Buttons/StyledButton";
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color:white;
`;

function NavBar() {
  return (
    <Wrapper>
      <Container style={{ position: "fixed", background: "transparent", marginTop:"20px", marginLeft:"70px" }}>
        <Row>
          <Col style={{ display: "flex" }}>
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h2 style={{ marginLeft: "10px", marginTop: "5px" }}>nuvem</h2>
          </Col>
          <Col>
          </Col>
          <Col>
          <StyledButton>Etherum</StyledButton>
          </Col>
          <Col>
         
           <Button variant="light"size="lg">Conectar Carteira</Button>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default NavBar;
