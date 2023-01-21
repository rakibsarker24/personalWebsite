import React from 'react'
import { Container,Row,Col, } from 'react-bootstrap'

const BackendSetup = () => {
  return (
    <section id='backendsetup'>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className="one">
                        <h3>step:1</h3>
                        <img src="images/pro1.png" alt="" />
                    </div>
                    <div className="one">
                        <h3>step:2</h3>
                        <img src="images/pro2.png" alt="" />
                    </div>
                    <div className="one">
                        <h3>step:2</h3>
                        <img src="images/pro3.png" alt="" />
                    </div>
                    <div className="one">
                        <h3>step:4</h3>
                        <img src="images/pro4.png" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default BackendSetup