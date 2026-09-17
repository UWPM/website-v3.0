import React from 'react';
import EventsSection from '../components/eventsV4/EventsSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Home.css';

// Dedicated Events route (/events). Reuses standard Header so
// the top navigation stays consistent, then renders the Events section.
export default function Events() {
  return (
    <>
      <Header active="events" />
      <EventsSection />
      <Footer />
    </>
  );
}
