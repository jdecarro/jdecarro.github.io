import './Projects.css'

import { projects } from '../../data/projects'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div className="projects-title">
          <span>02</span>
          <h2>Projets</h2>
        </div>

        <p>
          Une sélection de projets réalisés durant mon parcours à 42 Lausanne.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article
            className={`project-card ${project.featured ? 'featured' : ''}`}
            key={project.id}
          >
            <div className="project-number">
              {String(project.id).padStart(2, '0')}
            </div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <ul className="project-technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>

            <div className="project-arrow" aria-hidden="true">
              ↗
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects