import React from 'react'
import {Container,NavDropdown,Navbar,Form,Nav,Button} from 'react-bootstrap';
import '../navber/navber.css'


const Navber = () => {
  return (
    <section id="navber">
        <Navbar expand="lg">
            <Container className='container' fluid>
                <Navbar.Brand href="#slider" className='logo'>
                    <img src="images/logo1.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                <Nav className="ms-auto menu" style={{ maxHeight: '100%' }} navbarScroll>
                    <ul>
                        <li><a href="#slider">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#qualification">Qualification</a></li>
                        <li><a href="#sercice">Services</a></li>
                        <li><a href="#portfolio">Fortfolio</a></li>
                        <li><a href="">My Library</a></li>
                        <li><a href="#rcontact">Contact</a></li>
                    </ul>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </section>
  )
}

export default Navber