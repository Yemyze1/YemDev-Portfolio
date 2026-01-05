import React, { useState } from 'react'
import { useTheme } from './ThemeContext'

function Navbar(){
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="navbar">
      <div className="navbar-content">
        <a href="#home" className="navbar-logo">YemDev</a>
        <nav className={`navbar-nav ${isMenuOpen ? 'navbar-nav--open' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="theme-toggle"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            aria-label="Toggle menu"
            className={`navbar-mobile-menu ${isMenuOpen ? 'navbar-mobile-menu--open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar