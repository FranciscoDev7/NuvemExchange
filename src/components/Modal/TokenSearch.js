import React from "react";
import styled from "styled-components";
//import TokenList from "../TokenList/tokenList";
import { FaTimes, FaSearch } from "react-icons/fa";
import TokenList from "../Cards/TokenList"

const Container = styled.div`
  display: flex;
  flex-direction:column;
  background:rgba(0, 38, 65);
  min-width: 450px;
  height: 701px;
  border-radius: 10px;
  z-index: 100;
  border: 2px solid white;
  overflow:hidden;
`;

const NavBar = styled.div`
 
  height: 120px;
  padding: 50px;
  width: 420px;
  display: flex;
  justify-content: flex-start;
  background:rgba(0, 38, 65);
  border-bottom: solid 0.2px white;
  margin-left: 5px;
 
`;
const CloseIcon = styled.div`
  position: absolute;
  top: 2px;
  margin-left: 350px;
  color: rgba(255, 255, 255, 0.801);
  font-size: 1.7rem;
  cursor: pointer;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 55px;
  margin-left: 5%;
  color: white;
  font-size: 1.5rem;
`;

const TokenInput = styled.input`
  transform: translateX(-15px);
  padding: 20px 84px;
  background-color: rgba(0, 0, 0, 0.507);
  border-radius: 5px;
  border: 1px solid white;
  color: rgba(255, 255, 255, 0.801);
`;

const TokenArea = styled.div`
height:100%;
width:98%;
overflow-y: scroll;
transform: translateY(2%);

`
// 

function TokenSearch(props) {
  return (
    <Container>
      <NavBar>
        <CloseIcon>
          <FaTimes onClick={props.closeTokenSearch} />
        </CloseIcon>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <TokenInput
          onChange={(e) => props.filterTokenList(e.target.value)}
          type="text"
          placeholder="Procurar por token..."
        />
      </NavBar>
      <TokenArea>
      <TokenList tokenList={props.tokenList} chosenToken={props.chosenToken} />
      </TokenArea>
      

    </Container>
  );
}

export default TokenSearch;

