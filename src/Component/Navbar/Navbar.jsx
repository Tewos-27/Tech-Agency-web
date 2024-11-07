import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h2>TewosTech</h2>
      </div>
      <div className={`links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Project</li>
        </ul>
      </div>
      <div className="nav_btn">
        <button>Contact Us</button>
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
