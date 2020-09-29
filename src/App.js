import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'

import { CartProvider } from './context/use-cart'

import './bootstrap/bootstrap.min.css'
import './App.css'
function App() {
  const stripePromise = loadStripe('pk_test_51HWZJ7COtMYEgwAkWzeOKutR4r9fTu49RxwXHzEQQavHHZsmr56y3T3f4ZKsGxrQbb9VPavSXjAdrWAi0dPQdg4i00IfDOngrX');
  return (

    <Router>
      <Elements stripe={stripePromise}>
      <CartProvider>        
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>  
            <Route path="/checkout">
              <Checkout />
            </Route>            
        </Switch>
      </CartProvider>
      </Elements>
    </Router>
    
  );
}

export default App;
