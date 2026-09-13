import { resume } from '../../data/resume'
import SectionTag from '../ui/SectionTag'

export default function EducationSection() {
  return (
    <section id="education" className="content-section">
      <div className="section-heading">
        <SectionTag>Education</SectionTag>
        <h2>Building a strong foundation in technology and product thinking.</h2>
      </div>

      <div className="education-card card-surface">
        {resume.education.map((edu) => (
          <div key={edu.title} className="education-item">
            <div>
              <h3>{edu.title}</h3>
              <p className="muted-line">{edu.detail}</p>
            </div>
            <span className="period-pill">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
