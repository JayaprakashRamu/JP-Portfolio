import React, { useState } from 'react';
import { Row, Col, Progress, Card, Timeline } from 'antd';
import '../Skills/Skills.css';
import magic_bus  from '../../assets/magic-bus.jpg'
import Suryodaylogo from '../../assets/Suryodaylogo.webp'
import altruist from '../../assets/altruist.jpg'

function Skills() {
    const [mode] = useState('left');

    return (
        <div className='skill' id='skills'>
            <h1 className="skill-title">Skills</h1>
            <Row gutter={[16, 24]}>
                {/* Skills Section */}
                <Col xs={24} md={14}>
                    <Card hoverable className="skills-card">
                        <Row gutter={24}>
                            {[ // Skills List
                                { title: 'HTML', percent: 95, color: '#de4b25' },
                                { title: 'CSS', percent: 85, color: '#39acdd' },
                                { title: 'JavaScript', percent: 85, color: '#f7e025' },
                                { title: 'React JS', percent: 80, color: '#08d9ff' },
                                { title: 'Python', percent: 85, color: '#3c76a5' },
                                { title: 'SQL', percent: 76, color: '#e33b79' },
                                { title: 'Bootstrap', percent: 90, color: '#7d57b5' },
                                { title: 'Ant Design', percent: 95, color: '#f85b68' },
                                { title: 'ChatGPT', percent: 100, color: '#000000' },
                                { title: 'Machine Learning', percent: 60, color: '#4b4b4b' }
                            ].map(({ title, percent, color }) => (
                                <Col xs={24} sm={12} lg={8} key={title}>
                                    <Card title={title} bordered={false} className="skill-card">
                                        <Progress percent={percent} status="active" strokeColor={color} />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </Col>

                {/* Timeline Section */}
                <Col xs={24} md={9} className='timeline-col'>
                    {/* Experience Timeline */}
                    <Card hoverable className="timeline-card">
                        <h2>Experience</h2>
                        <Timeline mode={mode}>
                            {[
                                {
                                    color: 'green',
                                    label: 'November 2020 - May 2022',
                                    children: (
                                        <>
                                            <img src={Suryodaylogo} alt=""  className='exp-img'/>
                                            <br />
                                            <b>Suryoday Small Finance Bank, Chennai</b>
                                            <p>Relationship Officer</p>
                                        </>
                                    ),
                                    
                                },
                                {
                                    color: 'green',
                                    label: 'November 2020 - May 2022',
                                    children: (
                                        <>  
                                        <img src={altruist} alt=""  className='exp-img'/>
                                        <br />
                                            <b>Altruist Technologies Pvt Ltd</b>
                                            <p>Associate Trainee</p>
                                        </>
                                    ),
                                    
                                },
                                {
                                    color: 'green',
                                    label: 'November 2024 - January 2024',
                                    children: (
                                        <>
                                            <img src={magic_bus} alt=""  className='exp-img'/>
                                            <br />
                                            <b>Magic Bus India Foundation</b>
                                            <p>Intern</p>
                                        </>
                                    ),
                                    
                                }
                            ].map((item, index) => (
                                <Timeline.Item key={index} color={item.color} label={item.label} icon={<img src={item.image} alt="icon" style={{ width: 40, height: 40, borderRadius: '50%' }} />}>
                                    {item.children}
                                </Timeline.Item>
                            ))}
                        </Timeline>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Skills;
