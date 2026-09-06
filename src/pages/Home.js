import React from 'react';
import { Link } from 'react-router-dom';
import homeHeroArtwork from '../images/home-hero.svg';
import pmLogo from '../images/uwpm-brand/pmlogo.svg';
import WhatWeDo from '../components/WhatWeDo';
import OurImpact from '../components/OurImpact';
import Footer from '../components/Footer';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <section id="home" className="home-hero" aria-label="UW PM introduction">
        <img className="home-hero__artwork" src={homeHeroArtwork} alt="" />

        <a className="home-hero__brand" href="#home" aria-label="UW PM home">
          <img src={pmLogo} alt="UW PM" />
        </a>

        <div className="home-hero__content">
          <h1>
            Fostering the creative product management community @ UWaterloo
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
        </div>

        <nav className="home-hero__nav" aria-label="Primary navigation">
          <a
            className="home-hero__nav-link home-hero__nav-link--active"
            href="#home"
          >
            Home
          </a>
          <a className="home-hero__nav-link" href="#what-we-do">
            About
          </a>
          <Link className="home-hero__nav-link" to="/events">
            Events
          </Link>
          <a className="home-hero__nav-link" href="#teams">
            Teams
          </a>
        </nav>
      </section>
      <WhatWeDo />
      <OurImpact />
      <Footer />
    </>
  );
}
