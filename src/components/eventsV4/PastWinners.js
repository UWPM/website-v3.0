import React, { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from './motion';

import highlight from '../../images/deco/highlight-29.svg';
import vector from '../../images/deco/vector.svg';
import starsSolid from '../../images/deco/stars.svg';
import starsOutline from '../../images/deco/stars-1.svg';

import prodcon2401 from '../../images/prodcon/prodcon2401.webp';
import prodcon2402 from '../../images/prodcon/prodcon2402.webp';
import prodcon2403 from '../../images/prodcon/prodcon2403.webp';
import prodcon2404 from '../../images/prodcon/prodcon2404.webp';
import prodcon2405 from '../../images/prodcon/prodcon2405.webp';
import prodcon2406 from '../../images/prodcon/prodcon2406.webp';

// All six ProdCon winners, copy carried over from the v4 design repo.
// Three sit on screen at a time, so descriptions read as the section
// scrolls in, and the remaining three give the pinned track real
// horizontal travel.
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
  {
    src: prodcon2404,
    title: 'Paletto',
    award: 'Best Design Award.',
    team: 'Kate Chen, Ethan Zhang, Sophia Liu, Alan Wang',
    desc: 'Design system infrastructure tool that unifies product design tokens, automated accessibility auditing, and scalable design components across enterprise design systems.',
  },
  {
    src: prodcon2405,
    title: 'HackerPilot',
    award: "People's Choice Award.",
    team: 'Nathan Wong, Clara Xu, David Park, Maya Singh',
    desc: 'Real time copilot for product management teams that tracks sprint velocity, optimizes resource management, and generates comprehensive product requirement docs and stakeholder pitches.',
  },
  {
    src: prodcon2406,
    title: 'PricePulse',
    award: 'Best Pitch Award.',
    team: 'Julian Roy, Hannah Kim, Owen Chen, Leo Verma',
    desc: 'Data driven product monetization platform that analyzes feature usage telemetry and user funnel retention to optimize SaaS pricing tier structures and value metrics.',
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

      // Pinned horizontal track, config from cedricicic/uwpm-v4.
      // Held in a variable so the card reveals below can hang off it.
      const horizontal = gsap.to(trackRef.current, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          // shorter pinned zone: same horizontal travel, less vertical scroll
          end: () => '+=' + Math.abs(getScrollAmount()) * 0.35,
          scrub: 0.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Heading fades up as the section arrives.
      const heading = sectionRef.current.querySelector('.pw__reveal-head');
      if (heading) {
        gsap.from(heading, {
          y: 16,
          autoAlpha: 0,
          duration: 0.45,
          ease: 'power4.out',
          scrollTrigger: { trigger: heading, start: 'top 92%', once: true },
        });
      }

      // Each card's text reveals as that card slides in from the right.
      // containerAnimation is what ties the trigger to HORIZONTAL position
      // inside the pinned track — without it the trigger reads the card's
      // vertical position, which never changes once pinned, so the text
      // either fired all at once up front or only after the card had
      // already slid past.
      gsap.utils.toArray('.pw__col').forEach((card) => {
        const copy = card.querySelectorAll(
          '.pw__award, .pw__title, .pw__team, .pw__desc',
        );
        if (!copy.length) return;
        gsap.from(copy, {
          y: 24,
          autoAlpha: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.07,
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontal,
            start: 'left 88%',
            once: true,
          },
        });
      });
    }, sectionRef);

    // pinned sections compute against a stale layout without this
    ScrollTrigger.refresh();

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
            <h2 className="pw__reveal-head">Past winners</h2>
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
