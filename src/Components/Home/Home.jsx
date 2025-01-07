import React, { useState, useEffect } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Button } from 'antd';
import logo from '../../assets/my-img.jpeg';
import resume from '../../assets/file/R.Jayaprakash_Resume.pdf'
import '../Home/Home.css';

function Home() {
  // State to hold the current role text
  const [role, setRole] = useState("Web Designer");

  useEffect(() => {
    // Function to randomly switch between "Web Designer" and "Data Analysis"
    const interval = setInterval(() => {
      setRole((prevRole) => (prevRole === "Web Designer" ? "Data Analysis" : "Web Designer"));
    }, Math.random() * 3000 + 3000); // Random interval between 2 and 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="homepage">
      <Row gutter={[16, 24]} align="middle" justify="center">
        {/* Left Column: Content */}
        <Col xs={24} sm={12} lg={12}>
          <h1 className="home-title">Hello, It's Me</h1>
          <h1 className="home-name ">Jayaprakash.R</h1>
          <h2 className="home-subtitle ">
            And I'm a <span>{role}</span>
          </h2>
          <p className="home-description">
          As a passionate web designer and data analyst, I specialize in creating engaging, user-friendly websites and leveraging data to uncover insights that drive decisions. With expertise in modern design trends, user interface (UI) design, front-end development, and data analysis, I am committed to delivering seamless experiences and actionable insights.
          </p>

          <p className="home-description">
          Whether you're looking for a visually appealing website redesign or need help transforming data into meaningful reports, I am here to bring your ideas to life. I ensure that every website I create is optimized for speed, user experience, and mobile responsiveness, while also harnessing data to improve business outcomes and support data-driven strategies.
          </p>

          {/* Social icons and Resume button */}
          <div className="social-button-container">
            <div className="social-icons">
              <a href="https://github.com/JayaprakashRamu">
                <img width="48" height="48" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/jaya-prakash-173753220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
              </a>
              <a href="https://wa.me/919087081432">
                <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" />
              </a>
              <a href="tel:+91 9087081432">
                <img width="48" height="48" src="https://img.icons8.com/color/48/phone.png" alt="phone" />
              </a>
            </div>
            {/* Resume Button */}
            <Button 
              type="primary" 
              href={resume}
              download="Jayaprakash.R_Resume.pdf"
              shape="round" 
              icon={<DownloadOutlined />} 
              size="large" 
              className="resume-btn">
              Resume
            </Button>
          </div>
        </Col>

        {/* Right Column: Image */}
        <Col xs={24} sm={12} lg={12} className="home-image-col">
          <img src={logo} alt="Logo" className="my-img" />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
