import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "./images/uwpm-brand/pmlogo.svg";

import HomePage from './pages/HomePage'
import About from './pages/About'
import Community from './pages/Community'
import PMGuide from './pages/PMGuide'
import PMJobs from './pages/PMJobs'
import Contact from './pages/Contact'

function App() {

  return (
    <div className={`App w-100`}>

      {/* Default bootstrap react navbar */}
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img
                  src={logo}
                  className="logo"
                  alt="University of Waterloo Product Management Club Logo"
                /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-right">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/community">Community</Nav.Link>
            <Nav.Link as={Link} to="/pm-guide">PM Guide</Nav.Link>
            <Nav.Link as={Link} to="/pm-jobs">PM Jobs</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div style={{height: "100vh", }}>
      <HomePage/>
      </div>
      <div>
      <Routes>
        <Route exact path="/" element={App} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/community" element={<Community/>} />
        <Route exact path="/pm-guide" element={<PMGuide/>} />
        <Route exact path="/pm-jobs" element={<PMJobs/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
