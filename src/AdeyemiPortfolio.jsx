import React from 'react'

const AdeyemiPortfolio = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div>
          <h1 className="hero-title">Adeyemi — Frontend Developer</h1>
          <p className="hero-subtitle">I build fast, accessible and beautiful web apps using React, Vite and modern CSS. I enjoy crafting interfaces that feel great to use and are easy to maintain.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/pictures/IMG_2549.jpeg" alt="Adeyemi - Frontend Developer" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}

export default AdeyemiPortfolio


