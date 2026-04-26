import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/about/About'
import Skills from '../../components/Skill/Skills'
import Projects from '../../components/project/Projects'
import Experience from '../../components/experience/Experience'
import ContactForm from '../../components/Contact/ContactForm'





function Home() {
  return (
    <div>
        <Navbar /> 
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
       <ContactForm /> 
     
    </div>
  )
}

export default Home


