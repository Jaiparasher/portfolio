import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import WorkExperience from './sections/Experience'

const App = () => {
  return (
    <div className="bg-[url('/assets/Background.svg')] bg-contain bg-no-repeat">
    <main className="max-w-7xl mx-auto" > 
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer/>
    </main>
    </div>
  )
}

export default App