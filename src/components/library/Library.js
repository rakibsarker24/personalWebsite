import React from 'react'
import { Container,Row,Col,Nav,Tab, } from 'react-bootstrap'
import '../library/library.css'
import Footer from '../footer/Footer'
import Get from '../get/Get'
import Post from '../post/Post'
import BackendSetup from '../backendSetup/BackendSetup'

const Library = () => {
  return (
    <section id='library'>
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">BackendSetup</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Get</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Post</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="four">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="five">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="six">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="seven">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <BackendSetup />
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                            <Get />
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="third">
                            <Post />
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="four">
                            <Footer />
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="five">
                            <Footer />
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="six">
                            <Footer />
                            </Tab.Pane>

                            <Tab.Pane eventKey="seven">
                            <Footer />
                            </Tab.Pane>
                            
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>

    </section>
  )
}

export default Library