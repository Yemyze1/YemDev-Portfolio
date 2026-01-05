import React from 'react'
import { ThemeProvider } from './ThemeContext'
import Navbar from './Navbar'
import AdeyemiPortfolio from './AdeyemiPortfolio'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import BackToTop from './BackToTop'
import Testimonials from './Testimonials'

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Navbar />
        <main className="app-main">
          <AdeyemiPortfolio />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App