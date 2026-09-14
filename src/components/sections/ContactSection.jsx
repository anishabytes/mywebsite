import { resume } from '../../data/resume'
import SectionTag from '../ui/SectionTag'

function SocialIcon({ platform }) {
  const paths = {
    GitHub: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 7.85c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z',
    LinkedIn: 'M5.5 3.5A2.5 2.5 0 1 1 5.5 8a2.5 2.5 0 0 1 0-4.5ZM3.25 9.75h4.5v10h-4.5v-10ZM10.5 9.75h4.31v1.37h.06c.6-1.04 2.07-2.14 4.26-2.14 4.56 0 5.4 3 5.4 6.9v3.87h-4.5v-3.43c0-.82-.02-1.88-1.15-1.88-1.15 0-1.33.9-1.33 1.82v3.49h-4.5v-10Z',
    Instagram: 'M7 2.75h10A4.25 4.25 0 0 1 21.25 7v10A4.25 4.25 0 0 1 17 21.25H7A4.25 4.25 0 0 1 2.75 17V7A4.25 4.25 0 0 1 7 2.75Zm0 2A2.25 2.25 0 0 0 4.75 7v10A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17V7A2.25 2.25 0 0 0 17 4.75H7Zm5 2.25A5 5 0 1 1 12 17a5 5 0 0 1 0-10Zm0 2A3 3 0 1 0 12 15a3 3 0 0 0 0-6Zm5.25-2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z',
    Twitter: 'M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.53 8.53 0 0 1-2.71 1.04 4.26 4.26 0 0 0-7.26 3.88A12.1 12.1 0 0 1 3.1 4.8a4.26 4.26 0 0 0 1.32 5.68 4.22 4.22 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.55 8.55 0 0 1 2.68 19a12.06 12.06 0 0 0 6.54 1.92c7.85 0 12.14-6.5 12.14-12.14l-.01-.55A8.7 8.7 0 0 0 22.46 6Z',
  }

  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[platform]} />
    </svg>
  )
}

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
        <div className="socials-block">
          <p className="contact-label">Socials</p>
          <div className="social-links">
            {Object.entries(resume.profile.socials).map(([platform, url]) => (
              <a className="social-link" key={platform} href={url} target="_blank" rel="noreferrer">
                <SocialIcon platform={platform} />
                <span>{platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
