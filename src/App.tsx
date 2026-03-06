import { useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const sections = [
    { label: 'Top', ref: heroRef },
    { label: 'Projects', ref: projectsRef },
    { label: 'Education', ref: educationRef },
    { label: 'Contact', ref: contactRef },
  ]

  return (
    <>
      <Nav sections={sections} />
      <main>
        <div ref={heroRef}><Hero /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={educationRef}><Education /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer />
    </>
  )
}
