import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section `
padding-top:7.5vh;
box-sizing: border-box;
width: 100%;
min-height: 100vh; 
background: linear-gradient(to left top, rgb(0, 174, 255), rgb(150, 94, 255));
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
z-index:-10;
`

const Section = ({children}) => {
    return (
        <Wrapper>
          {children}
        </Wrapper>
    )
}

export default Section


