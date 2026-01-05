import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="max-w-3xl">
        <h2 className="about-title">About me</h2>
        <p className="about-text">I'm Adeyemi, a frontend developer specialising in
           React and modern build tools.
           I focus on performance, accessibility and delightful UX.
            I enjoy mentoring, writing clean code, building things and breaking things.
            I enjoy programming, and thinking of how 
            to build the next big that would work, for all.</p>

        <h3 className="about-section-title">Skills</h3>
        <div className="skills-list">
          <span className="skill-badge">React</span>
          <span className="skill-badge">Vite</span>
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">Vanilla CSS</span>
          <span className="skill-badge">Accessibility</span>
          <span className="skill-badge">Tailwind CSS</span>
            <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">Rust Programming Language</span>
            <span className="skill-badge">Move</span>
        </div>
      </div>
    </section>
  )
}

export default About