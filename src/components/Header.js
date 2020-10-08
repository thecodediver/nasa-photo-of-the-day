import React from 'react'
import Earth from '../assets/images/earth.jpg'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${pr => pr.theme.secondaryBackgroundColor};
  box-shadow: 1px 1px 3px black;
  .app-name {
    color: white;
    font-size: 3rem;
  }
  img {
    width: 100px;
    border-radius: 50%;
  }
`

function Header() {
  return (
    <StyledHeader>
      <img src={Earth} alt="The Earth seen from space." className="logo"/>
      <p className="app-name">Daily NASA</p>
    </StyledHeader>
  )
}

export default Header