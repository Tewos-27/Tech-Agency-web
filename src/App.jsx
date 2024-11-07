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
      <Hero />
      <Services />
      <Project />
      <About />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App