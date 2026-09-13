import { resume } from '../../data/resume'
import SectionTag from '../ui/SectionTag'

const skillGroups = [
  ['Frontend', resume.skills.frontend],
  ['Backend & Databases', resume.skills.backend],
  ['Programming Languages', resume.skills.languages],
  ['AI & Productivity Tools', resume.skills.ai],
  ['Design & Office', resume.skills.design],
  ['Soft Skills', resume.skills.soft],
]

export default function SkillsSection() {
  return (
    <section id="skills" className="content-section">
      <div className="section-heading">
        <SectionTag>Skills</SectionTag>
        <h2>Tools, systems, and communication I use to make ideas real.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map(([heading, items]) => (
          <div key={heading} className="skill-card card-surface">
            <h3>{heading}</h3>
            <div className="chip-list">
              {items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
