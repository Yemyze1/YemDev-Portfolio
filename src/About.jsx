import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="max-w-3xl">
        <h2 className="about-title">About me</h2>
        <p className="about-text">I'm Adeyemi, a frontend developer specialising in React and modern build tools. I focus on performance, accessibility and delightful UX. I enjoy mentoring, writing clean code and shipping features end-to-end.</p>

        <h3 className="about-section-title">Skills</h3>
        <div className="skills-list">
          <span className="skill-badge">React</span>
          <span className="skill-badge">Vite</span>
          <span className="skill-badge">Vanilla CSS</span>
          <span className="skill-badge">TypeScript</span>
          <span className="skill-badge">Accessibility</span>
          <span className="skill-badge">Tailwind CSS</span>
            <span className="skill-badge">JavaScript</span>
        </div>
      </div>
    </section>
  )
}

export default About