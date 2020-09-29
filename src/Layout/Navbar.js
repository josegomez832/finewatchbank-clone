import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav' 
import {
  BrowserRouter as Router,

  Link
} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { products } from '../product.js'
import { useCart } from '../context/use-cart'
export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  return (
  
    <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/"><img src="./images/fwb-logo-final_black.png" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/">Home</Link>
              <Link to="/cart">Cart</Link>
              
              <Nav.Link href="/">Contact Us</Nav.Link>
            </Nav>
            <div className="cart cart_item">
              <span>{cart.length}</span>
            <FontAwesomeIcon 
              icon={faShoppingCart}
              onClick={() => setOpen(!open)}
              aria-controls="example-fade-text"
              aria-expanded={open}
              />
            </div>
        </Navbar.Collapse>
        </Navbar>

  )
}
