import styled from "styled-components";
import React from 'react'

const PrimaryButon = styled.button`
padding:10px 20px;
color:white;
border-radius:30px;
margin:10px;
border:none;
background-color: rgba(0, 0, 0, 0.507);
&:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const StyledButton = ({children}) => {
    return (
        <PrimaryButon>
            {children}
        </PrimaryButon>
    )
}

export default StyledButton
