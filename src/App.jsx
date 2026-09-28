import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import WorkExperience from './sections/Experience'

const Projects = lazy(() => import('./sections/Projects'))

function DeferredSection({ children, minHeight = '24rem' }) {
  const containerRef = useRef(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin: '500px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} style={{ minHeight }}>
      {shouldRender ? children : null}
    </div>
  )
}

const App = () => {
  return (
    <div className="bg-[url('/assets/Background.svg')] lg:bg-contain bg-inherit bg-no-repeat">
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <DeferredSection>
          <Suspense fallback={<div className="min-h-96" aria-label="Loading projects" />}>
            <Projects />
          </Suspense>
        </DeferredSection>
        <Clients />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
