// src/components/AboutUs.js

import React from 'react';
import './AboutUs.css'; // Importing the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero-section">
        <h1 className="about-hero-text">About Tewotech</h1>
        <p className="about-hero-subtext">
          Innovative Solutions, Exceptional Service.
        </p>
      </div>

      <div className="about-content-section">
        <h2 className="about-section-title">Who We Are</h2>
        <p className="about-text">
          Tewotech is a forward-thinking technology company specializing in
          cutting-edge software solutions, AI-driven applications, and digital
          transformation strategies. Since our founding, we have been committed
          to helping businesses and individuals unlock new potential through
          technology.
        </p>

        <h2 className="about-section-title">Our Mission</h2>
        <p className="about-text">
          Our mission is to empower businesses with the technology and tools
          they need to succeed in the digital age. We focus on creating
          solutions that are user-centric, scalable, and efficient, helping
          organizations adapt and thrive in a rapidly evolving landscape.
        </p>

        <h2 className="about-section-title">Our Core Values</h2>
        <ul className="about-list">
          <li className="about-list-item">Innovation</li>
          <li className="about-list-item">Integrity</li>
          <li className="about-list-item">Customer Satisfaction</li>
          <li className="about-list-item">Collaboration</li>
          <li className="about-list-item">Quality Excellence</li>
        </ul>

        <h2 className="about-section-title">What We Do</h2>
        <p className="about-text">
          Tewotech specializes in a wide range of services, including software
          development, cloud computing, AI solutions, and cybersecurity. Our
          team of experts brings deep industry knowledge and technical
          expertise, making us a trusted partner for businesses worldwide.
        </p>

        <h2 className="about-section-title">Meet Our Team</h2>
        <p className="about-text">
          Our team comprises passionate developers, experienced project
          managers, and strategic thinkers. Together, we are dedicated to
          delivering solutions that make a meaningful difference for our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
