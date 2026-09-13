import Button from '../ui/Button'
import { resume } from '../../data/resume'

export default function HeroSection() {
  return (
    <header className="hero-shell">
      <nav className="topbar" aria-label="Main navigation">
        <div className="brand-wrap">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-text">{resume.profile.name}</span>
        </div>
        <div className="nav-links">
          {resume.nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <span className="section-tag section-tag--accent">Available for freelance work</span>
          <h1>
            I build <span className="highlight">web experiences</span>
            <br />
            that help brands grow.
          </h1>
          <p className="lede">
            I’m {resume.profile.name}, a BCA student and web developer turning ideas into
            responsive, conversion-focused websites for businesses and creators.
          </p>

          <div className="cta-row">
            <Button href="#contact">Let’s work together</Button>
            <Button href="#projects" variant="secondary">
              View my work
            </Button>
          </div>

          <ul className="quick-stats" aria-label="Key information">
            <li>
              <strong>2+</strong>
              <span>Years learning & building</span>
            </li>
            <li>
              <strong>3+</strong>
              <span>Client websites delivered</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>Focused on growth-minded products</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Profile illustration area">
          <div className="portrait-card">
            <div className="portrait-badge">Web Developer</div>
            <div className="portrait-silhouette" aria-hidden="true">
              <span className="dot dot-a" />
              <span className="dot dot-b" />
            </div>
            <div className="mini-card mini-card--top">
              <span className="mini-card__label">Focus</span>
              <strong>Frontend + Product Growth</strong>
            </div>
            <div className="mini-card mini-card--bottom">
              <span className="mini-card__label">Skills</span>
              <strong>React • Django • MySQL</strong>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
