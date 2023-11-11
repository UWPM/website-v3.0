import React from 'react';
import desktopHexagons from '../images/background/desktop-hexagons.svg';
import uwPMCircleLogo from '../images/uw-pm-circle-logo.svg';
import '../styles/About.css';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function About({ show }) {
  return (
    <>
      <Container>
        <Row>
          <div className="about-container">
            <div className="hex-container">
              <img src={desktopHexagons} alt="" />
            </div>
            <div className="about-caption">
              <h1 className="title-text">Fostering the </h1>
              <div className="position-relative d-inline">
                <img
                  className="red-circle"
                  alt="Red Circle"
                  src={require('../images/background/red-circle.png')}
                ></img>
                <h1 className="position-absolute start-0 title-text">
                  Creative
                </h1>
                <h1 className="title-text">
                  Product Management Community @ UWaterloo.
                </h1>
              </div>
            </div>
          </div>
        </Row>
        <Row className="mission-vision-row" id="mission">
          <Col lg={6} className="about-us-card">
            <Row className="card-title-parent">
              <a className="card-title" href="#mission">
                <h3 className="about-header-text">Mission</h3>
              </a>
            </Row>
            <div className="card-body">
              <h4 className="mission-text">
                UW PM is dedicated to creating a thriving product management
                community and offering students exposure to the field of
                product.
              </h4>
            </div>
          </Col>
          <Col lg={6} className="about-us-card">
            <Row className="card-title-parent">
              <a className="card-title" href="#mission">
                <h3 className="about-header-text">Vision</h3>
              </a>
            </Row>
            <div className="card-body">
              <h4 className="mission-text">
                Inspire product-level thinking and explore the rationale behind
                what we should build and why that will propel students towards
                successful careers in product.
              </h4>
            </div>
          </Col>
        </Row>
        <Row className="logo-row">
          <Col sm={2} className="logo-container">
            <img src={uwPMCircleLogo} alt="" />
          </Col>
        </Row>
      </Container>
      <div>
        <div class="values-title-wrapper">
          <div class="title-div">
            <h2>Values</h2>
          </div>
          <div class="grid-container">
            <div class="grid-item">
              <img src={innovationImg} class="icons-image" />
              <div class="text-box">
                <h3>Innovation</h3>
                <p>
                  We value innovation as the driving force behind successful
                  products, that comes from encouraging creative thinking, the
                  exploration of new ideas, and the pursuit of inventive
                  solutions to real-world problems.
                </p>
              </div>
            </div>
            <div class="grid-item">
              {' '}
              <img src={empowermentImg} class="icons-image" />
              <div class="text-box">
                <h3>Empowerment</h3>
                <p>
                  We empower anyone to succeed and break into the world of
                  product management by providing the resources, knowledge, and
                  opportunities necessary to succeed. We believe in equipping
                  individuals with the skills and experiences to work in
                  product, no matter their background.
                </p>
              </div>
            </div>
            <div class="grid-item">
              {' '}
              <img src={learningImg} class="icons-image" />
              <div class="text-box">
                <h3>Continuous Learning</h3>
                <p>
                  We embrace a growth mindset and value continuous learning for
                  all our members. Members are encouraged to expand their
                  horizons on the world of product from learning from everyone
                  around them to strive for personal and professional
                  development.
                </p>
              </div>
            </div>
            <div class="grid-item">
              {' '}
              <img src={communityImg} class="icons-image" />
              <div class="text-box">
                <h3>Community Engagement</h3>
                <p>
                  We actively engage with the Waterloo product management
                  community, both with alumni, current students and beyond, to
                  exchange knowledge and build valuable long-lasting
                  connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
