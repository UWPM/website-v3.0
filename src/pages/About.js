import React from 'react';
import PageHero from '../components/PageHero';
import '../styles/Home.css';
import '../styles/About.css';
import '../App.css';
import { Container } from 'react-bootstrap';
import innovationImg from '../images/about/network.png';
import empowermentImg from '../images/about/empowerment.png';
import learningImg from '../images/about/learning.png';
import communityImg from '../images/about/engagement.png';
import AboutIntro from '../components/AboutIntro';
import Footer from '../components/Footer';

// TODO: Reorganize the following code into src/components. See src/pages/Home.js as a reference

export default function About({ show }) {
  return (
    <>
      <PageHero active="about" title="About Us" ariaLabel="About UW PM hero">
        <div
          className="about-hero-placeholder"
          role="img"
          aria-label="About us banner placeholder"
        />
      </PageHero>

      <AboutIntro />

      <Container>
        <div>
          <div className="values-title-wrapper" id="values">
            <a className="title-div" href="#values">
              <div>
                <h2>Values</h2>
              </div>
            </a>
            <div className="values-grid">
              <div className="value-item value-item--network">
                <div className="value-item__media">
                  <img
                    src={innovationImg}
                    className="icons-image"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="value-item__copy">
                  <h3>Network</h3>
                  <p>
                    We believe innovation drives great products by fostering
                    creativity, exploring new ideas, and finding inventive
                    solutions to real-world problems.
                  </p>
                </div>
              </div>

              <div className="value-item value-item--empowerment">
                <div className="value-item__media">
                  <img
                    src={empowermentImg}
                    className="icons-image"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="value-item__copy">
                  <h3>Empowerment</h3>
                  <p>
                    We help people break into product management by providing
                    the resources, skills, and opportunities they need to
                    succeed, regardless of their background.
                  </p>
                </div>
              </div>

              <div className="value-item value-item--learning">
                <div className="value-item__media">
                  <img
                    src={learningImg}
                    className="icons-image icons-image--small"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="value-item__copy">
                  <h3>Continuous Learning</h3>
                  <p>
                    We embrace a growth mindset, encouraging continuous learning
                    and development through shared knowledge and experiences.
                  </p>
                </div>
              </div>

              <div className="value-item value-item--engagement">
                <div className="value-item__media">
                  <img
                    src={communityImg}
                    className="icons-image icons-image--small"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="value-item__copy">
                  <h3>Community Engagement</h3>
                  <p>
                    We engage with the Waterloo product management community —
                    alumni, students, and beyond — to share knowledge and build
                    lasting connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
