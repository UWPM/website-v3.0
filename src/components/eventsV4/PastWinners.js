import React, { useLayoutEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from './motion';

import highlight from '../../images/deco/highlight-29.svg';
import vector from '../../images/deco/vector.svg';
import starsSolid from '../../images/deco/stars.svg';
import starsOutline from '../../images/deco/stars-1.svg';

import prodcon2401 from '../../images/prodcon/prodcon2401.webp';
import prodcon2402 from '../../images/prodcon/prodcon2402.webp';
import prodcon2403 from '../../images/prodcon/prodcon2403.webp';

// Figma shows three winners on the events page. Full copy carried over
// from the v4 design repo.
const projects = [
  {
    src: prodcon2401,
    title: 'SAMM',
    award: '1st Place. Grand Winner.',
    team: 'Subodh Thallada, Mihajlo Micic, Akira Takaki, Marc Da Silva',
    desc: 'An AI product discovery platform that accelerates market validation from weeks into hours. It transforms raw consumer insights into complete product strategies, visual roadmaps, and spatial prototypes.',
  },
  {
    src: prodcon2402,
    title: 'Oyster',
    award: '2nd Place. Runner Up.',
    team: 'Artemis Cherkaev, Ryushen Tan, James Liang, Petar Isakovic',
    desc: 'Intelligent product lifecycle management engine that translates user feedback and wireframes into interactive prototypes while aligning developer specifications in real time.',
  },
  {
    src: prodcon2403,
    title: 'Auctopus',
    award: '3rd Place. Finalist.',
    team: 'Caellum Yip Hoi Lee, Chloe Houvardas, Daniel Shah, Jeremy Liu',
    desc: 'Full funnel product intelligence tool that converts strategic vision into validated user experience flows, automated market research, and synthetic user cohort testing.',
  },
];

export default function PastWinners() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current || prefersReducedMotion()) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const track = trackRef.current;
        const band = track ? track.parentElement : null;
        const lastCard = track ? track.lastElementChild : null;
        if (!track || !band || !lastCard) return 0;
        return -Math.max(
          0,
          lastCard.offsetLeft + lastCard.offsetWidth - band.clientWidth,
        );
      };

      gsap.to(trackRef.current, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: () => '+=' + Math.abs(getScrollAmount()),
          scrub: 0.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pw" id="winners" ref={sectionRef}>
      <div className="pw__decorations" aria-hidden="true">
        <img src={highlight} alt="" className="pw__svg pw__svg--highlight" />
        <img src={vector} alt="" className="pw__svg pw__svg--vector" />
        <img src={starsSolid} alt="" className="pw__svg pw__svg--star-solid" />
        <img
          src={starsOutline}
          alt=""
          className="pw__svg pw__svg--star-outline"
        />
      </div>

      <div className="pw__inner">
        <div className="container">
          <div className="ev4-head">
            <h2>Past winners</h2>
          </div>
        </div>

        <div className="pw__band">
          <div className="pw__track" ref={trackRef}>
            {projects.map((p) => (
              <div className="pw__col" key={p.title}>
                <div className="pw__box">
                  <div className="pw__img-wrap">
                    <img src={p.src} alt={p.title} className="pw__img" />
                  </div>
                  <span className="pw__award">{p.award}</span>
                  <h3 className="pw__title">{p.title}</h3>
                  <p className="pw__team">{p.team}</p>
                  <p className="pw__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
