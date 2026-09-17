import React from 'react';
import PastWinners from './PastWinners';
import PastEventsV4 from './PastEventsV4';
import Gallery from './Gallery';
import '../../styles/EventsV4.css';

// Events section for the single-page v4 site. Rendered inside Home so the
// nav's #events anchor lands here. Per the task brief the "Our community
// has worked at" strip is intentionally omitted (lives on the About page).
//
// `navSlot` lets the Events page drop the nav capsule under the winners
// carousel, which is where the phone design puts it.
export default function EventsSection({ navSlot = null }) {
  return (
    <div className="events-v4" id="events">
      <PastWinners />
      {navSlot}
      <PastEventsV4 />
      <Gallery />
    </div>
  );
}
