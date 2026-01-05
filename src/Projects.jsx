import React from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A responsive React + Vite portfolio with sections and accessible components.',
    link: '#',
    color: '#667eea',
    image: '/pictures/website (1).png'
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'A productivity app with filtering, local persistence and smooth animations. Add, complete, and filter tasks with real-time storage.',
    link: '/projects/task-manager.html',
    color: '#764ba2',
    image: '/pictures/task manager.png'
  },
  {
    id: 3,
    title: 'Design System',
    description: 'A comprehensive component library and style guide built with vanilla CSS. Buttons, cards, forms, badges, alerts, and more.',
    link: '/projects/design-system.html',
    color: '#10b981',
    image: '/pictures/style.png'
  },
  {
    id: 4,
    title: 'Deni P Stitches',
    description: 'A professional tailoring and fashion website built with modern web technologies. Showcases services, portfolio, and contact information.',
    link: 'https://deni-p-stiches.vercel.app/',
    color: '#f59e0b',
    external: true,
    image: '/pictures/Screenshot 2025-11-19 163053.png'
  }
  ,
  {
    id: 5,
    title: 'BlueWave Shipping',
    description: 'Demo shipping company site with live-tracking, quotes and contact form (portfolio demo).',
    link: '/projects/shipping-company.html',
    color: '#0369a1',
    image: 'pictures/Bluewave shipping company.png'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Selected Projects</h2>
      <div className="projects-grid">
        {sampleProjects.map(p => (
          <article key={p.id} className="project-card">
            <a
              href={p.link}
              target={p.external ? '_blank' : '_self'}
              rel={p.external ? 'noopener noreferrer' : undefined}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div className="project-preview" style={{ ['--preview-color']: p.color }}>
                {p.image ? (
                  <div className="screenshot-preview">
                    <div className="browser-bar">
                      <div className="browser-dots">
                        <span></span><span></span><span></span><span></span>
                      </div>
                      <div className="browser-url">
                        {/* {p.external ? (() => { try { return new URL(p.link).hostname } catch { return p.link } })() : p.link.replace(/^\/+/, '')} */}
                      </div>
                    </div>
                    <div className="screenshot-content">
                      <div className="stitches-header">{p.title.toUpperCase()}</div>
                      <div className="stitches-content">
                        <img src={p.image} alt={`${p.title} Screenshot`} className="stitches-screenshot" />
                      </div>
                    </div>
                  </div>
                ) : (
                  'Click to View'
                )}
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <span className="project-link">{p.external ? 'View Live Site →' : 'View Project →'}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects