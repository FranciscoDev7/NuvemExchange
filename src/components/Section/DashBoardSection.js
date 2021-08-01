import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
padding:100px;
width:100%;
min-height: 100vh;
display:flex;
flex-wrap: wrap;
align-items: center;
justify-content:center;
` 
const DashBoardSection = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default DashBoardSection