import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import logo from "../../artefacts/logo.png";
import React from "react";

const margin = "15%";

function Header({ tradingPage, user, userLog,toggleTopTokens}) {
  let topTokens = null
   let button = (
    <Button variant="outline-light" href="/redes">
      Negociar
    </Button>
  );
  let dropDown = (
    <NavDropdown title="Sobre" id="basic-nav-dropdown">
      <NavDropdown.Item href="/como_funciona">Quem somos</NavDropdown.Item>
      <NavDropdown.Item href="/como_funciona">Como funciona</NavDropdown.Item>
      <NavDropdown.Item href="/como_utilizar">Como começar</NavDropdown.Item>
      <NavDropdown.Item href="/como_utilizar">Quais vantagens</NavDropdown.Item>
    </NavDropdown>
  );

  if (tradingPage) {
    topTokens = (
    <Button style={{marginRight:"10px"}}variant="dark" onClick={toggleTopTokens}>
   Top tokens
  </Button>)
    button = (
      <Button variant="outline-light" onClick={userLog}>
        Conectar Carteira
      </Button>
    );
    dropDown = "";

  }

  if (tradingPage && user) {
    button = (
      <Button variant="outline-light" onClick={userLog}>
        Sair da Conta
      </Button>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand
          style={{ marginLeft: margin, display: "flex", height: "60px" }}
          href="/"
        >
          <img
            src={logo}
            height="35"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      
        <Navbar.Toggle
          style={{ marginRight: margin }}
          aria-controls="basic-navbar-nav"
        />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
          style={{ marginLeft: margin, marginRight: margin }}
        >
        

          <Nav style={{ width: "300px" }}>
          {topTokens}
            {dropDown}
            {button}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
