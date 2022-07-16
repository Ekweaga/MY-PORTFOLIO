import React from 'react';
import './navbar.css'
import jon from './jon.jpeg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menuheader = () => {
  return (
    <Navbar style={{backgroundColor:'#0b5825'}} variant="light">
        <Container style={{display:'flex', justifyContent:'center'}}>
          <Navbar.Brand href="" style={{color:'white',fontWeight:'700'}}>CTS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about" style={{color:'white'}}>About</Nav.Link>
            <Nav.Link href="#services" style={{color:'white'}}>Services</Nav.Link>
            <Nav.Link href="#skills" style={{color:'white'}}>Skills</Nav.Link>
            <Nav.Link href="#contact" style={{color:'white'}}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Menuheader;