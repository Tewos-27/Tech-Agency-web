import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 // Function to toggle the mobile menu
  // This function toggles the state of the menu between open and closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   
  // Function to scroll to the section
  // This function scrolls to a specific section of the page
  // It takes the section ID as an argument and uses `scrollIntoView` to scroll smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // If the menu is open, close it after scrolling
      setIsMenuOpn(false); // Close menu after clicking on mobile
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h2>TewosTech</h2>
      </div>
      <div className={`links ${isMenuOpen ? 'active' : ''}`}>
        
        <ul>
          <li onClick={() => scrollToSection('hero')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('services')}>Service</li>
          <li onClick={() => scrollToSection('project')}>Project</li>
          <li onClick={() => scrollToSection('feedback')}>Feedback</li>
        </ul>
      </div>
      <div className="nav_btn">
        <button onClick={() => scrollToSection('footer')}>Contact Us</button>
      </div>
      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
