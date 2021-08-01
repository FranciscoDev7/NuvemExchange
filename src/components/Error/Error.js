import React from 'react'
import styled from "styled-components";

const Card = styled.div`
 padding-left:15px;
 margin-top:-10px;
 font-size:0.8rem;
 width:42%;
 color:red; 
`

const Error = ({code}) => {
    let errorMessage = ""
    switch (code){
    case 1:
        errorMessage = "Selecione um token"
        break;
    case 2:
        errorMessage = "Saldo insuficiente"
        break;
    default:
        errorMessage =""
    }


    
    return (
        <Card>
            <p>{errorMessage}</p>
        </Card>
    )
}

export default Error
