import React , {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { products } from '../product.js'
import { useCart } from '../context/use-cart'
function Cart() {

  const { addItem, removeItem, cart, totalPrice } = useCart();

  return (
    <Container className="products panel">
        <Row>
          <Col>
            <h2>Your Cart</h2>
          </Col>
        </Row>
        <Row>
       
        </Row>
    </Container>     
  )
}

export default Cart
