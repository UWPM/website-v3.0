import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/AboutIntro.css';
import missionPhoto from '../images/about/mission-photo.jpg';
import whatWeDoPhoto from '../images/about/what-we-do-photo.jpg';

export default function AboutIntro() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -15% 0px',
    fallbackInView: true,
  });

  return (
    <section
      ref={ref}
      id="about"
      className={`about-intro${inView ? ' about-intro--visible' : ''}`}
      aria-label="About UW PM"
    >
      <div className="about-intro__row about-intro__row--mission">
        <div className="about-intro__copy">
          <h2 className="about-intro__title">Mission</h2>
          <p className="about-intro__text">
            UW PM fosters a thriving product management community, exposing
            students to the field and inspiring product-level thinking. Our
            vision is to explore the &quot;what&quot; and &quot;why&quot;,
            guiding students toward successful careers in product.
          </p>
        </div>
        <div className="about-intro__media">
          <img
            className="about-intro__photo"
            src={missionPhoto}
            alt="Students attending a UW PM event"
          />
        </div>
      </div>

      <div className="about-intro__row about-intro__row--what-we-do">
        <div className="about-intro__media">
          <img
            className="about-intro__photo"
            src={whatWeDoPhoto}
            alt="Fireside chat panel with Derek Fei, Product Manager at Google, and Bjorn Dawson, Senior Product Manager at Shopify"
          />
        </div>
        <div className="about-intro__copy">
          <h2 className="about-intro__title">What Do We Do</h2>
          <p className="about-intro__text">
            We host a wide array of events running from product case
            competitions, resume reviews, mock interviews, panel discussions
            with alumni, and more!
          </p>
          <p className="about-intro__text">
            Our events aim to help students learn more about the world of
            product management. Join us for ProdCon, our flagship competition
            each fall!
          </p>
        </div>
      </div>
    </section>
  );
}
