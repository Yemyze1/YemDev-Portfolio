import React from 'react'

function Navbar(){
  return (
    <header className="navbar">
      <div className="navbar-content">
        <a href="#home" className="navbar-logo">YemDev</a>
        <nav className="navbar-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button aria-label="Open menu" className="navbar-mobile-menu">Menu</button>
      </div>
    </header>
  )
}

export default Navbar