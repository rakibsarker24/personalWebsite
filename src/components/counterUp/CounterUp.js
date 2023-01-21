import React, { Component } from "react";
import '../counterUp/counterUp.css'
import {Container,Row,Col,Button} from 'react-bootstrap'

import DztImageGalleryComponent from "reactjs-image-gallery";


const CounterUp = () => {

    var data = [{
        url: 'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1870&q=80',
   
        thumbUrl: 'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1870&q=80',

        thumbUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1870&q=80',
    
        thumbUrl: 'https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80',
      },
    ];


  return (
    <section id='counterup'>
        <Container>
                <Row>
                    <Col lg='12'>
                    <div>
                        <DztImageGalleryComponent images={data} />
                    </div>
                    </Col>
                </Row>
               
        </Container>
    </section>
  )
}

export default CounterUp