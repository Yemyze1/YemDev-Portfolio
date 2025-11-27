import React from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A responsive React + Vite portfolio with sections and accessible components.',
    link: '#',
    color: '#667eea'
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'A productivity app with filtering, local persistence and smooth animations. Add, complete, and filter tasks with real-time storage.',
    link: '/projects/task-manager.html',
    color: '#764ba2'
  },
  {
    id: 3,
    title: 'Design System',
    description: 'A comprehensive component library and style guide built with vanilla CSS. Buttons, cards, forms, badges, alerts, and more.',
    link: '/projects/design-system.html',
    color: '#10b981'
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
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div 
                className="project-preview" 
                style={{ '--preview-color': p.color }}
              >
                Click to View
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.description}</p>
              <span className="project-link">View Project →</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects