import { resume } from '../../data/resume'
import SectionTag from '../ui/SectionTag'

export default function ProjectsSection() {
  return (
    <section id="projects" className="content-section">
      <div className="section-heading">
        <SectionTag>Projects</SectionTag>
        <h2>Work that blends creativity, research, and digital growth.</h2>
      </div>

      <div className="projects-grid">
        {resume.projects.map((project, index) => (
          <article key={project.title} className={`project-card card-surface ${index % 2 === 0 ? 'project-card--accent' : ''}`}>
            <div className="project-index">0{index + 1}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="chip-list chip-list--compact">
              {project.highlights.map((highlight) => (
                <span key={highlight} className="chip chip--soft">
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
