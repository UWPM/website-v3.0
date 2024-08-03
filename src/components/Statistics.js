import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import '../App.css';

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    rootMargin: '-100px 0px', // Trigger early (100px before the element comes into view)
  });

  return (
    <>
      <h2>Our Impact</h2>
      <hr></hr>
      <div className="container text-center" ref={ref}>
        <div className="row row-cols-3">
          <div className="col">
            <div id="statistic_num">
              {inView ? <CountUp end={100} duration={2.5} /> : null}+
            </div>
            <div id="statistic_word">members</div>
          </div>
          <div className="col">
            <div id="statistic_num">
              {inView ? <CountUp end={50} duration={2.5} /> : null}+
            </div>
            <div id="statistic_word">workshops</div>
          </div>
          <div className="col">
            <div id="statistic_num">
              {inView ? <CountUp end={50} duration={2.5} /> : null}+
            </div>
            <div id="statistic_word">events</div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div style={{ minHeight: '100px' }}></div>
    </>
  );
}
