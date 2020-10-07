import React from 'react'
import Earth from '../assets/images/earth.jpg'

function Header() {
  return (
    <header>
      <img src={Earth} alt="The Earth seen from space." className="logo"/>
      <p className="app-name">Daily NASA</p>
    </header>
  )
}

export default Header