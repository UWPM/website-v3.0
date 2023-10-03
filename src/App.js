import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/uwpm-brand/pmlogo.svg";

import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import Events from "./pages/Events";
import PMJobs from "./pages/PMJobs";
import Contact from "./pages/Contact";

import ScrollTop from "./components/ScrollTop";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  window.onscroll = function (ev) {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else if (window.scrollY === 0) {
      setIsVisible(false);
    }
  };

  return (
    <div className={`App w-100`}>
      <ScrollTop isVisible={isVisible} />
      {/* Default bootstrap react navbar */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} className="logo" alt="University of Waterloo Product Management Club Logo" />
          </Navbar.Brand>
          <Navbar.Toggle id="navbar-toggler" className="custom-toggler" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-right">
              <Nav.Link id="nav-link" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link id="nav-link" as={Link} to="/community">
                Community
              </Nav.Link>
              <Nav.Link id="nav-link" as={Link} to="/events">
                Events
              </Nav.Link>
              <Nav.Link id="nav-link" as={Link} to="/pm-jobs">
                PM Jobs
              </Nav.Link>
              <Nav.Link id="nav-link" as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/pm-jobs" element={<PMJobs />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <Navbar id="footer" expand="lg">
          <Container>
            <MediaQuery minWidth={768}>
              <Navbar.Brand as={Link} to="/">
                <img src={logo} className="logo" alt="University of Waterloo Product Management Club Logo" />
              </Navbar.Brand>
            </MediaQuery>
            <Nav className="me-auto" id="social-links">
              <Nav.Link id="nav-link" href="https://www.instagram.com/uwaterloopm/?hl=en" target="_blank">
                Instagram
              </Nav.Link>
              <Nav.Link id="nav-link" href="https://www.facebook.com/uwaterloopm/" target="_blank">
                Facebook
              </Nav.Link>
              <Nav.Link id="nav-link" href="https://www.linkedin.com/company/uw-pm/" target="_blank">
                LinkedIn
              </Nav.Link>
              <Nav.Link id="nav-link" href="https://uwaterloo-pm.medium.com/" target="_blank">
                Medium
              </Nav.Link>
            </Nav>
            <div className="copyright">@ UWPM 2023</div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
