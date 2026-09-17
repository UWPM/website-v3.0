import React from 'react';
import { Link } from 'react-router-dom';
import mascotPencil from '../images/home/mascot-pencil.png';
import mascotMic from '../images/home/mascot-mic.png';
import mascotGrad from '../images/home/mascot-grad.png';
import starsOutline from '../images/home/stars-outline.png';
import starsFilled from '../images/deco/stars.svg';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import WhatWeDo from '../components/WhatWeDo';
import OurImpact from '../components/OurImpact';
import Footer from '../components/Footer';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <section id="home" className="home-hero" aria-label="UW PM introduction">
        <Header hideNav active="home" />

        <div className="home-hero__stage">
          <div
            className="home-hero__figure-wrap home-hero__figure-wrap--pencil"
            aria-hidden="true"
          >
            <img
              className="home-hero__figure home-hero__figure--pencil"
              src={mascotPencil}
              alt="UW PM Mascot with pencil"
            />
          </div>

          <div className="home-hero__content">
            <h1 className="home-hero__headline">
              <span className="home-hero__headline-part">
                <span>Fostering</span> <span>the creative</span>
              </span>
              <span className="home-hero__highlight-wrap">
                <span className="home-hero__glow" aria-hidden="true" />
                <span className="home-hero__highlight-text">
                  <span>product </span>
                  <span>management </span>
                  <span>community</span>
                </span>
              </span>
              <span className="home-hero__headline-line--sub">
                <span className="home-hero__waterloo-wrap">
                  @&nbsp;UWaterloo.
                </span>
                <img
                  className="home-hero__star home-hero__star--inline"
                  src={starsFilled}
                  alt=""
                  aria-hidden="true"
                />
              </span>
            </h1>

            <div className="home-hero__actions">
              <Link
                className="home-hero__button home-hero__button--primary"
                to="/events"
              >
                Learn more
              </Link>
              <a
                className="home-hero__button home-hero__button--secondary"
                href="mailto:hello@uwpm.ca"
              >
                Join our team
              </a>
            </div>

            <div className="home-hero__star-outline-wrap" aria-hidden="true">
              <img
                className="home-hero__star home-hero__star--outline"
                src={starsOutline}
                alt=""
              />
            </div>
          </div>

          <div className="home-hero__figures-bottom" aria-hidden="true">
            <div className="home-hero__figure-wrap home-hero__figure-wrap--mic">
              <img
                className="home-hero__figure home-hero__figure--mic"
                src={mascotMic}
                alt="UW PM Mascot with microphone"
              />
            </div>
            <div className="home-hero__figure-wrap home-hero__figure-wrap--grad">
              <img
                className="home-hero__figure home-hero__figure--grad"
                src={mascotGrad}
                alt="UW PM Mascot with graduation cap"
              />
            </div>
          </div>
        </div>

        <Navbar active="home" className="home-hero__nav--home" />
      </section>
      <WhatWeDo />
      <OurImpact />
      <Footer />
    </>
  );
}
