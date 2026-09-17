import React from 'react';
import { useMediaQuery } from 'react-responsive';
import EventsSection from '../components/eventsV4/EventsSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

// Dedicated Events route (/events). Opens with the shared page hero
// (brand, title, nav) so it matches About, then renders the Events section.
export default function Events() {
  // The phone design moves the nav capsule below the winners carousel
  // instead of sitting directly under the title.
  const isPhone = useMediaQuery({ maxWidth: 640 });

  const nav = (
    <div className="page-hero__nav-wrap">
      <Navbar active="events" />
    </div>
  );

  return (
    <>
      <section className="page-hero" aria-label="UW PM events hero">
        <Header hideNav active="events" className="page-hero__header" />
        <div className="page-hero__title-wrap">
          <h1 className="page-hero__title">Events</h1>
        </div>
        {!isPhone && nav}
      </section>
      <EventsSection navSlot={isPhone ? nav : null} />
      <Footer />
    </>
  );
}
