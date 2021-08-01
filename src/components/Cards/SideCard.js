import styled from "styled-components";
import React from 'react'

const Card = styled.section`
  background: rgba(0, 0, 0, 0.815);
  width: 250px;
  height: 500px;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 20px 20px 20px rgba(45, 55, 68, 0.3);
  color: rgba(255, 255, 255, 0.74);
`


const SideCard = ({children}) => {
    return (
      <Card>{children}</Card>
    )
}

export default SideCard
