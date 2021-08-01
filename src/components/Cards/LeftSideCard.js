import styled from "styled-components";
import React from 'react'

const Card = styled.section`
  background: rgba(0, 0, 0, 0.815);
  width: 250px;
  height: 800px;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border:solid 2px rgba(255, 255, 255, 0.74);
  color: rgba(255, 255, 255, 0.74);
`


const LeftSideCard = ({children}) => {
    return (
      <Card>{children}</Card>
    )
}

export default LeftSideCard
