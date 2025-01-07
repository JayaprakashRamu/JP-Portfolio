// src/components/Project.js
import React from 'react';
import './Project.css'; 
import chosen from '../../assets/chosenlogo.png';  // Path to your image

const Project = () => {
  return (
    <div className="project-wrapper">
      <h1 className="project-title" id='project'>Project</h1>

      <div className="project-container">
        {/* Left Column: Image */}
        <a href="https://chosenacademy.co.in/" target="_blank" rel="noopener noreferrer" className="project-left">
          <img src={chosen} alt="Chosen IT Academy" />
        </a>

        {/* Right Column: Content */}
        <div className="project-right">
          <h2>What is This Project?</h2>
          <p>Chosen IT Academy is an institute dedicated to providing cutting-edge training in various technology fields. Our programs include hands-on learning and real-world projects in technologies like Full Stack Development, Data Science, Python, and C++. The academy helps students and professionals enhance their skills to stay competitive in the tech industry.</p>
          <a href="https://chosenacademy.co.in/" target="_blank" rel="noopener noreferrer">
            <button>Visit My Project</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
