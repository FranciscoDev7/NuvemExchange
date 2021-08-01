import React from "react";
import styled from "styled-components";

const BackGround = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.90);
  z-index: 50;
`;



const BackDrop = ({closeTokenSearch, children }) => {


  return (
     
     <BackGround onClick={closeTokenSearch} />
      
      
  );
};

export default BackDrop;
