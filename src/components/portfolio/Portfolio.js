import React from 'react'
import { Container,Card,Row,Col } from 'react-bootstrap'
import '../portfolio/portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
        <Container>
        <Row>
                <Col lg='12'>
                    <div className="title text-center">
                        <h2>Portfolio</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg='3' sm='6' md='6'>
                    <div className="protf-item mb-3">
                            <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/3.PNG" />
                            <Card.Body>
                                <Card.Title>
                                    <h2>E-commerce Website</h2>
                                </Card.Title>
                                <Card.Text>
                                    <p>This is a ecommerce website. It is my best project one. It developed with reactjs, react-boostrap, react-routing, nodejs, expressjs, mongodb. </p>
                                </Card.Text>
                                <a href="" target='_blank'>Visite Now</a>
                            </Card.Body>
                            </Card>
                    </div>
                </Col>
                <Col lg='3' sm='6' md='6'>
                    <div className="protf-item mb-3">
                            <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/3.PNG" />
                            <Card.Body>
                                <Card.Title>
                                    <h2>Madical Website</h2>
                                </Card.Title>
                                <Card.Text>
                                    <p>This is a madical website. It is my best project one. It developed with reactjs, react-boostrap, react-routing, nodejs, expressjs, mongodb.</p>
                                </Card.Text>
                                <a href="" target='_blank'>Visite Now</a>
                            </Card.Body>
                            </Card>
                    </div>
                </Col>
                <Col lg='3' sm='6' md='6'>
                    <div className="protf-item mb-3">
                            <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/3.PNG" />
                            <Card.Body>
                                <Card.Title>
                                    <h2>Travel Website</h2>
                                </Card.Title>
                                <Card.Text>
                                    <p>This is a travel website. It is my best project one. It developed with reactjs, react-boostrap, react-routing, nodejs, expressjs, mongodb.</p>
                                </Card.Text>
                                <a href="" target='_blank'>Visite Now</a>
                            </Card.Body>
                            </Card>
                    </div>
                </Col>
                <Col lg='3' sm='6' md='6'>
                    <div className="protf-item">
                            <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/gem.PNG" />
                            <Card.Body>
                                <Card.Title>
                                    <h2>Gimacian Website</h2>
                                </Card.Title>
                                <Card.Text>
                                    <p>This is a gimacian website. It is my boostrap and jQuary project one. It is design with HTML, Css, boostrap, slick slider, veno-box, waypoints.</p>
                                </Card.Text>
                                <a href="https://rakibsarker24.github.io/Gimacian/" target='_blank'>Visite Now</a>
                            </Card.Body>
                            </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio