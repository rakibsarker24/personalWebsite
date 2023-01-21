import React from 'react'
import { Container,Row,Col, } from 'react-bootstrap'
import '../about/about.css'
import { MdKeyboardArrowRight } from 'react-icons/md';

const About = () => {
  return (
    <section id='about'>
        <Container>
            <Row>
                <Col lg='5' md='4'>
                    <div className="about-img">
                        <img src="images/About Image.jpg" alt="about image"/>
                    </div>
                </Col>
                <Col lg='7' md='8'>
                        <div className="title text-center">
                            <h2 className=''>About Me</h2>
                        </div>

                         <div className="about">
                            <div className="abouttext">
                                <h3>Hi, I am Rakib,</h3>
                                <p>I am CSE Graduate from GUB. I am also a Professional Motion Graphic Designer. I have 2 years Experience in this field. I am completed Graphic design, Motion Graphic Web Design, and MERN stack courses from Creative IT Institute.</p>
                            </div>
                        </div>

                        <div className="subtitle">
                            <h4>My Skills:</h4>
                        </div>

                        <div className="skill">  
                                <ul className='block'>
                                        <li><MdKeyboardArrowRight className='sicon'/>Reactjs</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>React-Boostrap</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Tailwind Css</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Material Ui</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>React Routing</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Rest APIs</li>
                                    </ul>
                                    <ul className='block'>
                                        <li><MdKeyboardArrowRight className='sicon'/>JavaScript</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Nodejs</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Expressjs</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>MongoDb</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Firebase</li>
                                    </ul>
                                    <ul className='block hide'>
                                        <li><MdKeyboardArrowRight className='sicon'/>Figma</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Adobe Photoshop</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Adobe Illustrator</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Adobe After Effect</li>
                                        <li><MdKeyboardArrowRight className='sicon'/>Premiere Pro</li>
                                    </ul>
                        </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About