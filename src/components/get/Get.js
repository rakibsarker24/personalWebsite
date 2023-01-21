import React from 'react'
import { Container,Row,Col, } from 'react-bootstrap'

const Get = () => {
  return (
    <section id='get'>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="one">
                    <h3>step:1</h3>
                    <img src="images/g1.png" alt="" />
                    </div>
                    <div className="one">
                    <h3>step:2</h3>
                    <img src="images/g2.png" alt="" />
                    </div>
                    <div className="one">
                    <h3>step:2</h3>
                    <img src="images/g3.png" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Get