import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${pr => pr.theme.secondaryBackgroundColor};
  padding: 2%;
  color: white;
  font-size: 1.5rem;
`


function Footer() {
  return (
    <StyledFooter>
      <h2>Daily NASA</h2>
    </StyledFooter>
  )
}

export default Footer