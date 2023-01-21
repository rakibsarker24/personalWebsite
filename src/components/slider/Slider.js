import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import '../slider/slider.css'
import { HiDownload } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { BsBehance } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';

const Slider = () => {
  return (
    <section id='slider'>
        <Container className='container'>
            <Row>
                <Col md='7' lg='7'>
                    <div className="scontent">
                        <h3>Hi, I am</h3>
                        <h1><span>Rakib</span> Sarker</h1>
                        <label htmlFor="">Fontend Developer</label>
                        <p>Hey, I am CSE Graduate from GUB. I am also a Professional Motion Graphic Designer. I have 2 years Experience in this field. I am completed Graphic design, Motion Graphic, Web Design and MERN stack courses from Creative IT Institute.</p>
                        <a href='https://drive.google.com/file/d/1X6EEfZd0yHVvahHOct8r70JgOnPbYFec/view?usp=share_link' target='_blank' className='rbtn'>Download CV <HiDownload/></a>
                       
                    </div>
                </Col>
                <Col  md='5' lg='5' >
                    <div className="image">
                        <img className='imgright' src="images/rakib.png" alt="rakib.png" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg='6' className='justify-content-center'>
                    <div className="icon text-center">
                                <a href='https://github.com/rakibsarker24' target='_blank'><AiFillGithub className='ricon'/></a>
                                <a href='https://codepen.io/mdrakibsarker13' target='_blank'><AiOutlineCodepen className='ricon'/></a>
                                <a href="https://www.linkedin.com/in/md-rakib-sarker-346103193/" target='_blank'><FaLinkedinIn className='ricon'/></a>
                                <a href="https://www.facebook.com/md.rakibsarker.98/" target='_blank'><GrFacebookOption className='ricon'/></a>
                                <a href="https://www.instagram.com/rakibsarker24/" target='_blank'><AiFillInstagram className='ricon'/></a>
                                <a href="https://www.behance.net/mdrakibsarker" target='_blank'><BsBehance className='ricon'/></a>
                                <a href="https://www.youtube.com/@rakibsarker4977/videos" target='_blank'><AiFillYoutube className='ricon'/></a>

                               
                           
                        </div>
                </Col>
            </Row>

        </Container>
    </section>
  )
}

export default Slider