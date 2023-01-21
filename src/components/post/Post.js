import React from 'react'
import { Container,Row,Col, } from 'react-bootstrap'


const Post = () => {
  return (
    <section id='post'>
    <Container>
        <Row>
            <Col lg='12'>
                <div className="one">
                <h3>step:1</h3>
                <img src="images/p1.png" alt="" />
                </div>
                <div className="one">
                <h3>step:2</h3>
                <img src="images/p3.png" alt="" />
                </div>
                <div className="one">
                <h3>step:3</h3>
                <img src="images/p2.png" alt="" />
                </div>
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default Post