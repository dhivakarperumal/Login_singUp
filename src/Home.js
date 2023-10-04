import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom';


const Home = () => {
    const navigates=useNavigate();

    useEffect(()=>{
    
        let firstName=sessionStorage.getItem("firstName")
        if(firstName=== "" || firstName===null)
        {
            navigates('/login')
        }

    })
  return (
    <>


   <Container fluid>
    <Row>
      <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand  to="/" className='logo'>Swiggy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='head' >Home</Nav.Link>
            <Nav.Link as={Link} to="/register" className='head' >Sigin Up</Nav.Link> 
            <Nav.Link as={Link} to="/login" className='head' >LogOut</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
   </Container>


 <div className='banner'>
    <div className='conters'>
        <h2>Restaurants in your pocket</h2>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. 
            Facilis Nesciunt Explicabo Voluptas Excepturi. Incidunt Minima Laboriosam Ullam Numquam.
             Obcaecati Ipsa, Cum Maiores Dolore Ullam Ducimus.</p>

            <div>
                <button className='btn1'>Read More</button> 
                <button className='btn1' >By Now</button>
            </div>
    </div>
 </div>
   </>
  )
}

export default Home