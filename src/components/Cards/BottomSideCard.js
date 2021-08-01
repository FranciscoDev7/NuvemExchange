import styled from "styled-components";
import React from 'react'

const Card = styled.section`
  margin-top:5px;
  background: rgba(20, 38, 65);
  width: 500px;
  height: 300px;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.74);
  box-shadow: 20px 20px 20px rgba(45, 55, 68, 0.3);
`


const BottomSideCard = ({children}) => {
    return (
      <Card>{children}</Card>
    )
}

export default BottomSideCard
