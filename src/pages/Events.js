import React from 'react';
import { useMediaQuery } from 'react-responsive';
import EventsSection from '../components/eventsV4/EventsSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
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
      <PageHero
        active="events"
        title="Events"
        ariaLabel="UW PM events hero"
        showNav={!isPhone}
      />
      <EventsSection navSlot={isPhone ? nav : null} />
      <Footer />
    </>
  );
}
