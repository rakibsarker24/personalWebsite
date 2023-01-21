import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../footer/footer.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { BsBehance } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <section id='footer'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg='6' className="social-item">
                        <div className="social">
                            <a href='https://github.com/rakibsarker24' target='_blank'><AiFillGithub/></a>
                            <a href='https://codepen.io/mdrakibsarker13' target='_blank'><AiOutlineCodepen className='ficon'/></a>
                            <a href='https://www.linkedin.com/in/md-rakib-sarker-346103193/' target='_blank'><FaLinkedinIn className='ficon'/></a>
                            <a href='https://www.facebook.com/md.rakibsarker.98/' target='_blank'><GrFacebookOption className='ficon'/></a>
                            <a href='https://www.instagram.com/rakibsarker24/' target='_blank'><AiFillInstagram className='ficon'/></a>
                            <a href='https://www.behance.net/mdrakibsarker' target='_blank'><BsBehance className='ficon'/></a>
                            <a href='https://www.youtube.com/@rakibsarker4977/videos' target='_blank'><AiFillYoutube className='ficon'/></a>
                            <a href='https://twitter.com/MdRakibsarker13' target='_blank'><AiOutlineTwitter className='ficon'/></a>
                        </div>
                </Col>
            </Row>
            <Row>
                <Col lg='12'>
                    <hr />
                    <p className='text-center'>Developed By Md Rakib Sarker</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer