import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/BookMyHotel.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt="BookMyHotel Logo" style={{ height: '40px', width: 'auto' }} />
        
      

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Places</a></li>
        </ul>
      </div>
      </div>

      <div className='auth-button'>
      Sign in
      </div>

      <div className='hamburger' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;