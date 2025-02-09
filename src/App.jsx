import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Services from './Component/Services/Services'
import Project from './Component/Projects/Project'
import About from './Component/About/About'
import Feedback from './Component/Feedback/Feedback'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="feedback">
        <Feedback />
      </div>
      <div id="footer">
        <Footer />
      </div>
      
    </div>
  )
}

export default App
