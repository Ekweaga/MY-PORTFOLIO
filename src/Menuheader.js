import React from 'react';
import './navbar.css'
import jon from './jon.jpeg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menuheader = () => {
  return (
   <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
  <div class="container">
       <a class="navbar-brand logo-text" href="#">Chax</a> 
      <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault" style={{zIndex:'111'}}>
          <ul class="navbar-nav ms-auto navbar-nav-scroll">
              <li class="nav-item" style={{color:'white'}}>
                  <a class="nav-link active" aria-current="page" href="#header" style={{color:'white'}}>Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#services">Services</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#details">Details</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#features">Features</a>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown01">
                      <li><a class="dropdown-item" href="#">Article Details</a></li>
                      <li><div class="dropdown-divider"></div></li>
                      <li><a class="dropdown-item" href="#">Terms Conditions</a></li>
                      <li><div class="dropdown-divider"></div></li>
                      <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                  </ul>
              </li>
          </ul>
          <span class="nav-item">
              <a class="btn-solid-sm" href="#contact">Contact</a>
          </span>
      </div> 
  </div> 
</nav>
  )
}

export default Menuheader;