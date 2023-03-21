import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage'

import React from "react";
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from "./images/logos/pmlogo.svg";


function App() {
  return (
    <div className={`App w-100`}>

      {/* Default bootstrap react navbar */}
      <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img
                  src={logo}
                  className="logo"
                  alt="University of Waterloo Product Management Club Logo"
                /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#community">Community</Nav.Link>
            <Nav.Link href="#pm-guide">PM Guide</Nav.Link>
            <Nav.Link href="#pm-jobs">PM Jobs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
      <div style={{height: "100vh", }}>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
