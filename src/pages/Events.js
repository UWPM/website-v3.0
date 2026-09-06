import React from 'react';
import { Link } from 'react-router-dom';
import EventsSection from '../components/eventsV4/EventsSection';
import pmLogo from '../images/uwpm-brand/pmlogo.svg';
import '../styles/Home.css';

// Dedicated Events route (/events). Reuses the hero nav styling from Home so
// the top navigation stays consistent, then renders the Events section.
export default function Events() {
  return (
    <>
      <section className="home-hero home-hero--compact" aria-label="Events">
        <Link className="home-hero__brand" to="/" aria-label="UW PM home">
          <img src={pmLogo} alt="UW PM" />
        </Link>
        <nav className="home-hero__nav" aria-label="Primary navigation">
          <Link className="home-hero__nav-link" to="/">
            Home
          </Link>
          <Link className="home-hero__nav-link" to="/#what-we-do">
            About
          </Link>
          <Link
            className="home-hero__nav-link home-hero__nav-link--active"
            to="/events"
          >
            Events
          </Link>
          <Link className="home-hero__nav-link" to="/#teams">
            Teams
          </Link>
        </nav>
      </section>
      <EventsSection />
    </>
  );
}
