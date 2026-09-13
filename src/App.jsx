import { useEffect } from 'react'
import './App.css'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ProjectsSection from './components/sections/ProjectsSection'
import EducationSection from './components/sections/EducationSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  useEffect(() => {
    const interactiveCards = document.querySelectorAll(
      '.hero-shell, .card-surface, .portrait-card, .quick-stats li, .button',
    )

    const resetCard = (card) => {
      card.style.setProperty('--rotate-x', '0deg')
      card.style.setProperty('--rotate-y', '0deg')
      card.style.setProperty('--lift', '0px')
      card.style.setProperty('--glow', '0')
    }

    const handlePointerMove = (event) => {
      const card = event.currentTarget
      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const rotateY = ((x / rect.width) - 0.5) * 12
      const rotateX = (0.5 - y / rect.height) * 12
      const glow = 0.18 + (x / rect.width) * 0.2

      card.style.setProperty('--rotate-x', `${rotateX.toFixed(2)}deg`)
      card.style.setProperty('--rotate-y', `${rotateY.toFixed(2)}deg`)
      card.style.setProperty('--lift', '-6px')
      card.style.setProperty('--glow', glow.toFixed(2))
    }

    interactiveCards.forEach((card) => {
      card.addEventListener('pointermove', handlePointerMove)
      card.addEventListener('pointerleave', () => resetCard(card))
      card.addEventListener('pointercancel', () => resetCard(card))
      card.addEventListener('touchstart', () => {
        card.style.setProperty('--lift', '-3px')
      })
      card.addEventListener('touchend', () => resetCard(card))
    })

    return () => {
      interactiveCards.forEach((card) => {
        card.removeEventListener('pointermove', handlePointerMove)
        card.removeEventListener('pointerleave', () => resetCard(card))
        card.removeEventListener('pointercancel', () => resetCard(card))
      })
    }
  }, [])

  return (
    <div className="page-shell">
      <HeroSection />
      <main>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
