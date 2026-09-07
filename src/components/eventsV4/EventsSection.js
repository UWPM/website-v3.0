import React from 'react';
import PastWinners from './PastWinners';
import PastEventsV4 from './PastEventsV4';
import Gallery from './Gallery';
import '../../styles/EventsV4.css';

// Events section for the single-page v4 site. Rendered inside Home so the
// nav's #events anchor lands here. Per the task brief the "Our community
// has worked at" strip is intentionally omitted (lives on the About page).
// Laptop/tablet layout only for now.
export default function EventsSection() {
  return (
    <div className="events-v4" id="events">
      <PastWinners />
      <PastEventsV4 />
      <Gallery />
    </div>
  );
}
