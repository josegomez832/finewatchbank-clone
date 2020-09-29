import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import { useCart } from '../context/use-cart'
function Cart() {
  const { cartGroupByItems, totalPrice, removeItem, emptyCart } = useCart();
  if(totalPrice == 0){
    return(
      <Container fluid>
        <Navbar />
        <Container>
        <Row>
          <Col>
            <h1>You have no items in your cart!</h1>
          </Col>
        </Row>
        </Container>
        <Footer />        
      </Container>
    )
  }else{
    return (
      <Container fluid>
            <Navbar />
            <Container>
              <h1>Cart</h1>
              {totalPrice > 0 && 
              <Row>
                <Col>
                <Button variant="info" size="sm" onClick={()=> emptyCart()}>Empty</Button>
                </Col>
              </Row>  
             }
              
             
             {cartGroupByItems.map( (product, index) => 
             <Row className="d-flex justify-content-between align-items-center" key={index}>
               <Col><img src={product.image} alt={product.name} /></Col>
                <Col><h3>{product.name}</h3></Col>
                <Col> 
                  <Button variant="danger" size="sm" onClick={()=> removeItem(product.sku)}>Remove</Button>
                </Col>             
                <Col>{product.quantity}</Col>
                <Col>${product.price}</Col>
              </Row>
             )}
             <Row>
                <Col>
                  <p>${totalPrice}</p>
                </Col>
             </Row>  
             {totalPrice > 0 && 
              <Row>
                <Col>
                <Link to="/checkout"><Button variant="primary" size="sm">Checkout</Button></Link>
                </Col>
              </Row>  
             }
                       
            </Container>          
            <Footer />  
        </Container>
    )
  }
  
}
export default Cart;