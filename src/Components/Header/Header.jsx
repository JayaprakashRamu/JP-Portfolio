import React, { useState } from 'react';
import '../Header/Header.css';
import resume from '../../assets/file/R.Jayaprakash_Resume.pdf'
// import logo from '../../assets/logo/mylogo.png'

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <>
      <header className="header">
  <div className="logo"><a href="#home" onClick={handleLinkClick} className="logo">Portfolio</a></div>
  <nav className={`nav ${isMobile ? 'nav-mobile' : ''}`}>
    <ul className="nav-list">
      <li className="nav-item">
        <a href="#home" className="nav-link" onClick={handleLinkClick}>Home</a>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link" onClick={handleLinkClick}>About Me</a>
      </li>
      <li className="nav-item">
        <a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a>
      </li>
      <li className="nav-item">
        <a href="#services" className="nav-link" onClick={handleLinkClick}>Services</a>
      </li>
      <li className="nav-item">
        <a href="#project" className="nav-link" onClick={handleLinkClick}>Project</a>
      </li>
      <li className="nav-item">
        <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
      </li>
      {/* New Resume Download Button */}
      <li className="nav-item">
        <a href={resume} className="nav-link download-btn" download="Jayaprakash.R_Resume.pdf" onClick={handleLinkClick}>Resume</a>
      </li>
    </ul>
  </nav>
  
  {/* New toggle button */}
  <button className="toggle-btn" onClick={() => setIsMobile(!isMobile)} aria-label="Toggle Navigation">
    <span className={`bar ${isMobile ? 'active' : ''}`}></span>
    <span className={`bar ${isMobile ? 'active' : ''}`}></span>
    <span className={`bar ${isMobile ? 'active' : ''}`}></span>
  </button>
</header>



    </>
  );
}

export default Header;
