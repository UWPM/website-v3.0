import React, { useState, useEffect } from 'react';
import '../styles/Events.css';
import '../App.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

//UPDATED
import fall24ProdCon from '../images/events/fall24-prodcon.jpg';
//
import win24IceCream from '../images/events/win24-ice-cream.jpg';
import riselivecasestudy from '../images/events/rise-live-case.jpg';
import uwpmxblueprint from '../images/events/uwpm-blueprint.jpg';
import uwpmxblueprint2 from '../images/events/uwpm-blueprint 2.jpg';
import sum24ResumeRevamp from '../images/events/resume-revamp.jpg';

import speakerSneakPeak from '../images/events/speaker-sneakpeak.jpeg';
import blueprintUWPM from '../images/events/blueprint-uwpm.jpeg';
import win23ProductPanel from '../images/events/win23-product-panel.png';
import win23IceCream from '../images/events/win23-ice-cream.png';
import livecasestudyies from '../images/events/live-case-studies.png';
import mocktainandcheese from '../images/events/mocktain_and_cheese.png';

export default function PastEvents() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Event listener for dynamic width changing
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Array of [imageUrl, instagramUrl]
  const flatImages = [
    //UPDATED
    [fall24ProdCon, 'https://www.instagram.com/p/DBbv9sIxZDz/'],
    //
    [uwpmxblueprint2, 'https://www.instagram.com/p/C878S99gl61/'],
    [sum24ResumeRevamp, 'https://www.instagram.com/p/C8ABdFYgV_3/'],
    [riselivecasestudy, 'https://www.instagram.com/p/C4OkY6nAmWi/'],
    [uwpmxblueprint, 'https://www.instagram.com/p/C4HGdkBAwjB/'],
    [win24IceCream, 'https://www.instagram.com/p/C7U5sSpgbim/'],
    [mocktainandcheese, 'https://www.instagram.com/p/CzKKhsVIhOR/'],
    [livecasestudyies, 'https://www.instagram.com/p/C2pvzogAyRk/?img_index=1'],
    [speakerSneakPeak, 'https://www.instagram.com/p/CuinX2tANsc/'],
    [blueprintUWPM, 'https://www.instagram.com/p/CuVlp-SJFqk/'],
    [win23ProductPanel, 'https://www.instagram.com/p/CqbWlGKgcaV/'],
    [win23IceCream, 'https://www.instagram.com/p/CpoA_B7gBpN/'],
  ];

  // Change number of rows dynamically
  const getCols = (data) => {
    const colsPerRow = isMobile ? 2 : 3;
    const rows = [];

    for (let i = 0; i < data.length; i += colsPerRow) {
      const rowImages = data.slice(i, i + colsPerRow);

      const colComponents = rowImages.map(([imageUrl, instagramUrl], index) => (
        <Col key={index} xs={6} md={4} className="p-4">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <Image src={imageUrl} alt={`Image ${index + 1}`} fluid />
          </a>
        </Col>
      ));

      rows.push(<Row key={i}>{colComponents}</Row>);
    }

    return rows;
  };

  return (
    <Container>
      <h2>Past events</h2>
      <hr></hr>
      <Container className="my-10" fluid>
        {getCols(flatImages)}
        <div className="spacer"></div>
      </Container>
    </Container>
  );
}
