import React from 'react'
import '../contact/contact.css'
import { Container,Row,Col,Form,Button,FloatingLabel } from 'react-bootstrap'
import { RiPhoneFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id='rcontact'>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="title text-center">
                        <h2>Contact</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg='6' sm='6'>
                    <div className="rcontact-item">
                        <div className="citem">
                            <RiPhoneFill className='call'/>
                            <div className="phone">
                                <p>Phone</p>
                                <span>01303045483</span>
                            </div>
                        </div>
                    </div>
                    <div className="rcontact-item">
                        <div className="citem">
                            <HiOutlineMail className='call'/>
                            <div className="phone">
                                <p>Gmail</p>
                                <span>rakibsarker1998@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="rcontact-item">
                        <div className="citem">
                            <HiOutlineLocationMarker className='call'/>
                            <div className="phone">
                                <p>Location</p>
                                <span>Taltola, West kafrul, Dhaka-1207</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg='6' sm='6'>
                    <Form className='rform'>
                        <Form.Group className="mb-3 rfrom" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        
                        <Form.Label>Your Message</Form.Label>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments" className='comment'>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button className='mt-4 cbtn' variant="primary" type="submit" >
                            Submit
                        </Button>
                        </Form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact