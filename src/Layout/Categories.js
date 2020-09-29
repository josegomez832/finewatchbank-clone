import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Categories() {
  return (
    <Container className="panel">
        <Row>
            <Col>
                <img src="/images/pexels-photo-2078268.jpeg" className="img__bucket" />
                <div className="bucket__title">Shop Best Sellers</div>
            </Col>
            <Col>
                <img src="/images/pexels-photo-380782.jpeg" className="img__bucket" />
                <div className="bucket__title">Shop Recent Watches</div>
            </Col>
        </Row>
    </Container>
  )
}
