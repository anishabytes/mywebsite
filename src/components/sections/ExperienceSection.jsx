import { resume } from '../../data/resume'
import SectionTag from '../ui/SectionTag'

export default function ExperienceSection() {
  return (
    <section id="experience" className="content-section">
      <div className="section-heading">
        <SectionTag>Experience</SectionTag>
        <h2>Freelance work shaped by real client needs.</h2>
      </div>

      <div className="experience-card card-surface">
        {resume.experience.map((job) => (
          <div key={job.role} className="experience-item">
            <div className="experience-heading">
              <div>
                <h3>{job.role}</h3>
                <p className="muted-line">
                  {job.company} | {job.location}
                </p>
              </div>
              <span className="period-pill">{job.period}</span>
            </div>

            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
