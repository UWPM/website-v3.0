import React, { useState } from 'react';
import prodconGroup from '../../images/prodcon/group.webp';

// Add entries here and the carousel controls activate automatically.
const events = [
  {
    title: 'ProdCon 2025',
    date: 'November 16th, 2024',
    copy: "ProdCon is the University of Waterloo's product management case study competition. You will get an opportunity to solve a case, present it to judges and network with industry professionals.",
    image: prodconGroup,
  },
];

function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M10 2 4 8l6 6' : 'M6 2l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

function Arrow({ label, onClick, disabled, children }) {
  return (
    <button
      type="button"
      className="ev__arrow"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default function PastEventsV4() {
  const [index, setIndex] = useState(0);
  const many = events.length > 1;

  const go = (step) =>
    setIndex((i) => (i + step + events.length) % events.length);

  const e = events[index];

  return (
    <section className="ev">
      <div className="container">
        <div className="ev4-head">
          <h2>Past events</h2>
          <a className="link-arrow" href="#events">
            View all events
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2 8h12M9 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="square"
              />
            </svg>
          </a>
        </div>

        <div className="ev__slide">
          <div className="ev__info">
            <h3 className="ev__title">{e.title}</h3>
            <p className="ev__date">{e.date}</p>
            <p className="ev__copy">{e.copy}</p>
            <div className="ev__arrows">
              <Arrow
                label="Previous event"
                onClick={() => go(-1)}
                disabled={!many}
              >
                <Chevron dir="left" />
              </Arrow>
              <Arrow label="Next event" onClick={() => go(1)} disabled={!many}>
                <Chevron dir="right" />
              </Arrow>
            </div>
          </div>
          {e.image && (
            <div className="ev__media">
              <img src={e.image} alt={e.title} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
