import { resume } from '../../data/resume'
import SectionTag from '../ui/SectionTag'

export default function ContactSection() {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-heading">
        <SectionTag>Contact</SectionTag>
        <h2>Let’s build something useful and memorable.</h2>
      </div>

      <div className="contact-card card-surface">
        <div>
          <p className="contact-label">Email</p>
          <a href={`mailto:${resume.profile.email}`}>{resume.profile.email}</a>
        </div>
        <div>
          <p className="contact-label">Location</p>
          <p>{resume.profile.location}</p>
        </div>
        <div>
          <p className="contact-label">Languages</p>
          <p>{resume.languages.join(' • ')}</p>
        </div>
      </div>
    </section>
  )
}
