import React from 'react';

import Container from 'react-bootstrap/Container'
import Slide from '../Components/Slide'
import Navbar from '../Layout/Navbar'
import Products from '../Layout/Products'
import Categories from '../Layout/Categories'
import AboutRow from '../Layout/AboutRow'
import Footer from '../Layout/Footer'

function Home() {
 
  return (
 

          <Container fluid>
            <Navbar />
            <Slide /> 
            <Categories />
            <Products /> 
            <AboutRow />
            <Footer />    
          </Container>
   

  );
}

export default Home;
