import React, { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from './motion';

import prodcon2024 from '../../images/events/posters/prodcon-2024.jpg';
import mocktails from '../../images/events/posters/mocktails-and-cheese.jpg';
import productNightW24 from '../../images/events/posters/product-night-w24.jpg';
import productNightS24 from '../../images/events/posters/product-night-s24.jpg';
import resumeRevamp from '../../images/events/posters/resume-revamp.jpg';
import iceCream from '../../images/events/posters/ice-cream-social.jpg';
import rise2024 from '../../images/events/posters/rise-2024.jpg';

// `lift` is a signed share of the band's sway; `tilt` is degrees.
const posters = [
  {
    src: prodcon2024,
    alt: 'ProdCon 2024: applications open',
    lift: 0.3,
    tilt: -6,
  },
  {
    src: mocktails,
    alt: 'Mocktails & Cheese product social night',
    lift: -1,
    tilt: 4,
  },
  {
    src: productNightW24,
    alt: 'Blueprint x UWPM Product Night',
    lift: 0.3,
    tilt: -3,
  },
  {
    src: productNightS24,
    alt: 'UWPM x Blueprint Product Night',
    lift: -0.7,
    tilt: 7,
  },
  { src: resumeRevamp, alt: 'Resume Revamp workshop', lift: 1, tilt: -5 },
  {
    src: iceCream,
    alt: 'Ice Cream Social with mock interviews',
    lift: 0.7,
    tilt: 3,
  },
  { src: rise2024, alt: 'RISE 2024 product challenge', lift: -0.4, tilt: -7 },
];

// Horizontal travel as a share of a poster's own width — climbs from the
// first poster to the last so the row shears open and reads as moving right.
const DRIFT_FIRST = 10;
const DRIFT_LAST = 42;
const at = (i) => i / (posters.length - 1);

export default function Gallery() {
  const band = useRef(null);

  useLayoutEffect(() => {
    if (!band.current || prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gallery__item').forEach((el, i) => {
        const drift = DRIFT_FIRST + (DRIFT_LAST - DRIFT_FIRST) * at(i);
        gsap.fromTo(
          el,
          { xPercent: -drift },
          {
            xPercent: drift,
            ease: 'none',
            scrollTrigger: {
              trigger: band.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        );
      });
    }, band);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="gallery"
      ref={band}
      aria-label="Posters from past UWPM events"
    >
      {posters.map((p, i) => (
        <div
          className="gallery__item"
          key={p.src}
          style={{
            '--lane': `${at(i) * 100}%`,
            '--lift': p.lift,
            '--tilt': `${p.tilt}deg`,
          }}
        >
          <div className="gallery__poster">
            <img src={p.src} alt={p.alt} />
          </div>
        </div>
      ))}
    </section>
  );
}
