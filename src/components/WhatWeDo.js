import React from 'react';
import CustomCard from './CustomCard';

import WhatWeDoImage1 from '../images/what-we-do-1.png';
import WhatWeDoImage2 from '../images/what-we-do-2.png';
import WhatWeDoImage3 from '../images/what-we-do-3.png';

import ArrowIcon from '../images/arrow.svg';

const cardData = [
  {
    title: 'Educate',
    description: 'Providing resources & training of product management skills',
    image: WhatWeDoImage1,
    alt: 'Presenters at a UWPM event',
  },
  {
    title: 'Exposure',
    description: 'Access to open opportunities in Canada & the US',
    image: WhatWeDoImage2,
    alt: 'A group of students holding DataDog shirts',
  },
  {
    title: 'Network',
    description: 'Connecting students and alumni in the industry',
    image: WhatWeDoImage3,
    alt: 'Students attending a UWPM presentation',
  },
];

const factIntro = 'HEY! DID YOU KNOW?';
const funFact = 'UWPM WAS ORIGINALLY FOUNDED IN 2012';

export default function WhatWeDo({ show }) {
  return (
    <>
      <h2>What We Do</h2>
      <div className="what-we-do-container">
        <div className="staggered-cards">
          <div className="background-image"></div>

          {cardData.map((card, index) => (
            <div className="card-container">
              <CustomCard key={index} card={card} />
              {index === 0 && (
                <div>
                  <div className="arrow-container">
                    <img src={ArrowIcon} alt="Arrow" />
                  </div>
                  <div className="fun-fact">
                    <p>
                      {factIntro}
                      <br />
                      <br />
                      {funFact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
