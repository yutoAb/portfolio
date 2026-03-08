import { useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profiles from './components/Profiles'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const profilesRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const researchRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const sections = [
    { label: 'Top', ref: heroRef },
    { label: 'Skills', ref: skillsRef },
    { label: 'Profiles', ref: profilesRef },
    { label: 'Experience', ref: experienceRef },
    { label: 'Research', ref: researchRef },
    { label: 'Projects', ref: projectsRef },
    { label: 'Education', ref: educationRef },
    { label: 'Contact', ref: contactRef },
  ]

  return (
    <>
      <Nav sections={sections} />
      <main>
        <div ref={heroRef}><Hero /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={profilesRef}><Profiles /></div>
        <div ref={experienceRef}><Experience /></div>
        <div ref={researchRef}><Research /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={educationRef}><Education /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer />
    </>
  )
}
