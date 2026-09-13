import { resume } from '../../data/resume'
import SectionTag from '../ui/SectionTag'

export default function AboutSection() {
  return (
    <section id="about" className="content-section">
      <div className="section-heading">
        <SectionTag>About</SectionTag>
        <h2>Creative problem-solver with a business mindset.</h2>
      </div>

      <div className="about-grid">
        <div className="about-card card-surface">
          <p>{resume.summary}</p>
        </div>

        <div className="about-stack">
          <div className="info-card card-surface card-surface--yellow">
            <h3>Location</h3>
            <p>{resume.profile.location}</p>
          </div>
          <div className="info-card card-surface">
            <h3>Email</h3>
            <a href={`mailto:${resume.profile.email}`}>{resume.profile.email}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
