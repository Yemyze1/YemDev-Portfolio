import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'React', level: 85, color: '#61dafb' },
    // { name: 'Node.js', level: 80, color: '#339933' },
    // { name: 'Next.js', level: 10, color: '#339933' },
    { name: 'Python', level: 85, color: '#3776ab' },
    { name: 'HTML/CSS', level: 95, color: '#e34f26' },
    // { name: 'TypeScript', level: 70, color: '#3178c6' },
    // { name: 'MongoDB', level: 75, color: '#47a248' },
    { name: 'Git', level: 85, color: '#f05032' }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="section-wrapper">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}40`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-categories">
          <div className="category">
            <h3>Frontend</h3>
            <div className="category-tags">
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
              <span className="tag">TypeScript</span>
            </div>
          </div>

          {/* <div className="category">
            <h3>Backend</h3>
            <div className="category-tags">
              <span className="tag">Node.js</span>
              <span className="tag">Express</span>
              <span className="tag">Python</span>
              <span className="tag">MongoDB</span>
            </div>
          </div> */}

          <div className="category">
            <h3>Tools & Others</h3>
            <div className="category-tags">
              <span className="tag">Git</span>
              <span className="tag">VS Code</span>
              {/* <span className="tag">Figma</span> */}
              <span className="tag">Vercel</span>
              <span className="tag">Nexlify</span>
              {/* <span className="tag">Docker</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills