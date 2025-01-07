import React from 'react';
import { Row, Col } from 'antd';
import '../About/About.css';
import aboutlogo from '../../assets/img2.jpeg';

function About() {
  return (
    <div className="about" id="about">
      <h1 className="about-title">About Me</h1>
      <Row gutter={[16, 24]} align="middle">
        {/* Left Column: Image */}
        <Col xs={24} sm={12} lg={8} className="about-image-col">
          <img src={aboutlogo} alt="About" className="about-img" />
        </Col>

        {/* Right Column: Content */}
        <Col xs={24} sm={12} lg={16}>
          <h2 className="about-heading">Hi! I'm Jayaprakash</h2>
          <p className="about-description">
          I’m a passionate <strong>Web Designer</strong>  and <strong>Data Analyst</strong> , blending creativity and data-driven insights to deliver engaging, user-friendly, and functional websites. I specialize in crafting visually appealing web designs while using data to inform decisions and optimize user experience.
                     </p>
          <h3 className="about-subheading">What I Do</h3>
          <p className="about-description">
          As a Web Designer, I create responsive, accessible, and aesthetically pleasing websites that engage users across devices. As a Data Analyst, I transform complex data into actionable insights that drive business strategy and performance. Here's what I do:
          </p>
          <ul className="about-skills">
            <li>Responsive Web Design (Mobile-first approach)</li>
            <li>HTML & CSS (for styling and layouts)</li>
            <li>Branding and Visual Identity</li>
            <li>Data Analysis (Data visualization, trend analysis, reporting)</li>
          </ul>

          <h3 className="about-subheading">Why Choose Me?</h3>
          <p className="about-description">
          I believe in designing with purpose, and I take a data-driven approach to both design and analysis. My web designs are not only visually appealing but are also tailored to provide seamless user experiences. In addition, I use data to uncover insights that drive decisions, enhance website performance, and improve business outcomes.
          </p>
          <p className="about-description">
          Whether you're looking to redesign your website or need data insights to inform your business strategies, I’ll help you achieve your goals with a strong focus on both aesthetics and data-driven performance. Let's collaborate to create a beautiful, functional, and insightful web presence.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
