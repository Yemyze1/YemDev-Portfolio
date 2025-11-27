import React from 'react'
import Navbar from './Navbar'
import AdeyemiPortfolio from './AdeyemiPortfolio'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import BackToTop from './BackToTop'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-main">
        <AdeyemiPortfolio />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App