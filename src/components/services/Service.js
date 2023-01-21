import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import '../services/service.css'
import { FaLaptopCode } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import { GrGraphQl } from 'react-icons/gr';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';

const Service = () => {
  return (
    <section id='sercice'>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="title text-center">
                        <h2>Services</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg='3' sm='6' md='6'>
                    <a href="https://github.com/rakibsarker24" target='_blank'>
                        <Card className='cart mb-3'>
                        <div className="cicon">
                            <span className='text-center'><MdDevices/></span>
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <h3 className='text-center'>Web Design </h3>
                            </Card.Title>
                            <Card.Text>
                            <p className='text-center'>I will Design your e-commerce, business, corporate office, tourism, newspaper, hotel, personal or portfolio website.</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col lg='3' sm='6' md='6'>
                    <a href="https://github.com/rakibsarker24" target='_blank'>
                        <Card className='cart mb-3'>
                        <div className="cicon">
                            <span className='text-center'><FaLaptopCode/></span>
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <h3 className='text-center'>Web Development </h3>
                            </Card.Title>
                            <Card.Text>
                            <p className='text-center'>I will Design your e-commerce, business, corporate office, tourism, newspaper, hotel, personal or portfolio website.</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col lg='3' sm='6' md='6'>
                    <a href="https://www.behance.net/mdrakibsarker" target='_blank'>
                        <Card className='cart mb-3'>
                        <div className="cicon">
                            <span className='text-center'><GrGraphQl/></span>
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <h3 className='text-center'>Graphic Design</h3>
                            </Card.Title>
                            <Card.Text>
                            <p className='text-center'>I will Design social media post, flyer, brochure, logo, banner, illustration and any printing design.</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col lg='3' sm='6' md='6' >
                    <a href="https://www.facebook.com/CALL01303045483" target='_blank'>
                        <Card className='cart mb-3'>
                        <div className="cicon">
                            <span className='text-center'><MdOutlineSlowMotionVideo/></span>
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <h3 className='text-center'>Motion Graphic</h3>
                            </Card.Title>
                            <Card.Text>
                            <p className='text-center'>I will create explainer video, product promotional, business promotional, short video, ads, 2D promotional video.</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Service