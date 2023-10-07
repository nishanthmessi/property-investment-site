import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import InvestmentSection from './components/InvestmentSection'
import CalculatorSection from './components/CalculatorSection'
import TestimonialSection from './components/TestimonialSection'
import QuestionSection from './components/QuestionSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <InvestmentSection />
      <CalculatorSection />
      <TestimonialSection />
      <QuestionSection />
      <div className='bg-[#0A142F]'>
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
