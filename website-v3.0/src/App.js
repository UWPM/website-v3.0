import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage'

import React from "react";
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className={`App w-100`}>

      {/* Default bootstrap react navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      <div style={{height: "100vh", }}>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
