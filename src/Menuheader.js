import React from 'react';
import './navbar.css'
import jon from './jon.jpeg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menuheader = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container style={{display:'flex', justifyContent:'center'}}>
          <Navbar.Brand href="" style={{color:'#38d16a',fontWeight:'500'}}>CTS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Menuheader;