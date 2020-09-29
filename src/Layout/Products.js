import React , {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { products } from '../product.js'
import { useCart } from '../context/use-cart'
function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addItem, countItemsInCart } = useCart();

  return (
    <Container className="products panel">
        <Row>
          <Col>
            <h2>Which Watch is right for you?</h2>
          </Col>
        </Row>
        <Row>
            {products.map(product=>
                <Col md="3" className="product__item" >
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3> 
                    
                    <div className="price">${product.price}</div>
                    <Button variant="primary" size="sm" onClick={()=>addItem(product.sku)}>Add to Cart ({countItemsInCart(product.sku)})</Button>{' '}
                   
                </Col>                 
            )} 
        </Row>
    </Container>     
  )
}

export default Products
