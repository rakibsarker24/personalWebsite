import React from 'react'
import '../qualification/qualification.css'
import { Container,Row,Col, } from 'react-bootstrap';
import { BsBriefcaseFill } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';

const Qualification = () => {
  return (
    <section id='qualification'>
        <Container>
            <Row className='justify-content-center text-center'>
                <Col lg='12'>
                        <div className="title">
                            <h2>My Qualification</h2>
                        </div>
                </Col>
                <Col lg='12'>
                        <div className="category">
                            <div className="item">
                                <h4><span><HiAcademicCap/></span>Education </h4>
                            </div>
                            <div className="item">
                                <h4><span><BsBriefcaseFill className='work'/></span>Work </h4>
                            </div>
                        </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg='6'>
                    <div className="qua-item" >
                        <div className="edu-item">
                            <div className="edu">
                                <h4>Bsc in CSE</h4>
                                <p>Green University of Bangladesh</p>
                                <span>2020 - 2023</span>
                            </div>
                            <div className="edu">
                                <h4>Diploma in CSE</h4>
                                <p>Dinajpur Polytechnic Institute</p>
                                <span>2015 - 2019</span>
                            </div>
                            <div className="edu">
                                <h4>SSC</h4>
                                <p>Sadullapur Model High School</p>
                                <span>2015 - 2019</span>
                            </div>
                        </div>
                        <div className="work-item">
                            <div className="work">
                                <h4>Onix Computer System</h4>
                                <p>Motion Graphic Designer</p>
                                <span>2 jan 2020 - 31 Dec 2021</span>
                            </div>
                            <div className="work">
                                <h4>Amazing Soft</h4>
                                <p>Motion Graphic Designer</p>
                                <span>1 Aug 2020 - 31 Dec 2020</span>
                            </div>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Qualification