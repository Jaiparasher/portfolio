'use client'

import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/sections/Navbar'), { ssr: false })
const Hero = dynamic(() => import('@/sections/Hero'), { ssr: false })
const About = dynamic(() => import('@/sections/About'), { ssr: false })
const Projects = dynamic(() => import('@/sections/Projects'), { ssr: false })
const Clients = dynamic(() => import('@/sections/Clients'), { ssr: false })
const Contact = dynamic(() => import('@/sections/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/sections/Footer'), { ssr: false })
const WorkExperience = dynamic(() => import('@/sections/Experience'), { ssr: false })

export default function Home() {
  return (
    <div className="bg-[url('/assets/Background.svg')] lg:bg-contain bg-inherit bg-no-repeat">
      <main className="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
