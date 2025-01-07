import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import '../Services/Services.css';

function Services() {
  return (
    <div id="services" className='services-page'>
      <h1 className="services-title">Services</h1>
      <Row gutter={[16, 24]}>
        {/* Service 1: Web Design */}
        <Col xs={24} sm={12} md={8}>
          <Card hoverable className="service-card">
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/laptop-coding.png" alt="laptop-coding"/>
            <h3 className="service-heading">Web Design</h3>
            <p className="service-description">
              We design responsive and visually appealing websites that provide an engaging user experience. Our designs are tailored to meet the specific needs of your brand and audience.
            </p>
            <Button type="primary" size="large" className="service-button" href="#contact">
              Learn More
            </Button>
          </Card>
        </Col>

        {/* Service 2: Data Analysis */}
        <Col xs={24} sm={12} md={8}>
          <Card hoverable className="service-card">
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/graph.png" alt="data-analysis"/>
            <h3 className="service-heading">Data Analysis</h3>
            <p className="service-description">
              Our data analysis services help you extract meaningful insights from complex data. We use advanced tools to analyze trends, patterns, and metrics to support business decision-making.
            </p>
            <Button type="primary" size="large" className="service-button" href="#contact">
              Learn More
            </Button>
          </Card>
        </Col>

        {/* Service 3: Reconciliation */}
        <Col xs={24} sm={12} md={8}>
          <Card hoverable className="service-card">
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/checkmark.png" alt="reconciliation"/>
            <h3 className="service-heading">Reconciliation</h3>
            <p className="service-description">
              Our reconciliation services ensure the accuracy and consistency of financial records. We handle bank, credit card, and account reconciliation to help you maintain reliable financial data.
            </p>
            <Button type="primary" size="large" className="service-button" href="#contact">
              Learn More
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Services;
