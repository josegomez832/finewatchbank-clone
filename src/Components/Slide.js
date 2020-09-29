import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
export default function Slide() {
  const bg = {
    backgroundImage: 'url(../images/iwc-hero-banner.jpg)',
    width: "100%",
    backgroundSize: "cover"
  };
  return (
      <Jumbotron className="text-white mt-2 rounded bg-dark container" style={bg}>
        <Container>
          <Row className="d-flex align-items-center pt-5 pb-5">
            <Col className="pt-5 pb-5" md={{ span: 5, offset: 7 }}>
            <h2 className="text-uppercase">Timeless Design, Finest Technology</h2>
              <p>
              As meticulous as the watchmakers who create the timepiece, an IWC Schaffhausen collector is as meticulous in which model he chooses. Explore our private collection of new IWC watches for sale.
              </p>
            </Col>
          </Row>        
        </Container>
      </Jumbotron>

  )
}
