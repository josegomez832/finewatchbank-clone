import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AboutRow() {
    const divStyle = {
        backgroundImage: 'url(../images/home-about-section-img.jpg)',
      };
  return (
    <Container fluid noGutters="false" className="callout__buckets justify-content-md-center">
       
            <Row noGutters="false">
                <Col className="bucket content">
                    <img src="/images/winter-collection-watch.png" alt="Winter Collection Watch" />
                    <h3>Winter Collections</h3>
                    <p>Authentic timepieces from the finest watch houses all over the world, spanning from the most desired grand complications to the most enduring of sports watches. The most exclusive and sought after timepieces make up our rare collection.</p>
                    
                </Col>  
                <Col className="bucket bg" style={divStyle}>
                </Col>              
            </Row>
            
    </Container>
  )
}
