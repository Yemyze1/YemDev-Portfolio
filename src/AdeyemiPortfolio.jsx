import React, { useEffect } from 'react'
import { useTheme } from './ThemeContext'

const AdeyemiPortfolio = () => {
  const { theme } = useTheme()

  useEffect(() => {
    const heroPhoto = document.querySelector('.hero-photo')
    if (heroPhoto) {
      // Remove any existing theme-specific classes
      heroPhoto.classList.remove('hero-photo--light', 'hero-photo--dark')

      // Add theme-specific class
      heroPhoto.classList.add(`hero-photo--${theme}`)

      console.log(`Applied ${theme} theme styles to hero photo`)
    }
  }, [theme])

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div>

          <h1 className="hero-title">Adeyemi | Frontend Engineer</h1>
          <p className="hero-subtitle">I build fast, accessible and beautiful web apps using React, Vite and modern CSS. I enjoy crafting interfaces that feel great to use and are easy to maintain.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download Resume</a>
          </div>
        </div>
        <div className="hero-image">

          {/* if (data-theme) {
             light
          } */}


          <img src="/pictures/PASSPORT.jpg" alt="Adeyemi - Frontend Developer" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}

export default AdeyemiPortfolio


