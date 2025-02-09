// src/Component/HomePage/HomePage.jsx

import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Project from '../Projects/Project';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="feedback">
        <Feedback />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
