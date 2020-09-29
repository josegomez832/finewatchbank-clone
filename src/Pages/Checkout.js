import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import { useCart } from '../context/use-cart'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
export default function Checkout() {
    
        const stripe = useStripe();
        const elements = useElements();
      
        const handleSubmit = async (event) => {
          // Block native form submission.
          event.preventDefault();
      
          if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }
      
          // Get a reference to a mounted CardElement. Elements knows how
          // to find your CardElement because there can only ever be one of
          // each type of element.
          const cardElement = elements.getElement(CardElement);
      
          // Use your card Element with other Stripe.js APIs
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
          });
      
          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
        };
  return (
    <Container fluid>
    <Navbar />
    <Container>
    <Row>
      <Col>
      <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
      </Col>
    </Row>
    </Container>
    <Footer />        
  </Container>
    
  )
}