import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <Container className="panel">
        <Row>
            <Col>
                <h3>ABOUT FINE WATCH BANK</h3>
                <p><img className="pull-left" height="120" width="120" alt="Chrono24 Trusted Seller" src=" //www.chrono24.com/others/trusted-seller-icon.htm?format=120&amp;id=7393" />Fine Watch Bank offers the world top-of- the-line rare timepieces, while simultaneously providing a trusted, tailored experience for clients. We are dedicated to ensuring that all timepieces are authentic and expertly maintained to Manufacture standards.</p>
            </Col>
            <Col>
                <h3>COLLECTIONS</h3>
                <ul>
                    <li>A. LANGE & SOHNE</li>
                    <li>CARTIER</li>
                    <li>F.P. JOURNE</li> 
                    <li>PATEK PHILIPPE</li>
                </ul>
            </Col>
            <Col>
                <h3>GET IN TOUCH</h3>
                <ul className="contact__details">
                    <li><FontAwesomeIcon icon={faEnvelope} /> 713-351-0187</li>
                    <li><FontAwesomeIcon icon={faPhone} />info@finewatchbank.com</li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}
