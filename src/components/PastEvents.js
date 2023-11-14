import React, { useState, useEffect } from 'react';
import '../styles/Events.css';
import '../App.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import speakerSneakPeak from '../images/events/speaker-sneakpeak.jpeg';
import blueprintUWPM from '../images/events/blueprint-uwpm.jpeg';
import win23ProductPanel from '../images/events/win23-product-panel.png';
import win23ResumeCritique from '../images/events/win23-resume-critique.png';
import win23IceCream from '../images/events/win23-ice-cream.png';
import fall22Prodcon from '../images/events/fall22-prodcon2.jpeg';

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
    [speakerSneakPeak, 'https://www.instagram.com/p/CuinX2tANsc/'],
    [blueprintUWPM, 'https://www.instagram.com/p/CuVlp-SJFqk/'],
    [win23ProductPanel, 'https://www.instagram.com/p/CqbWlGKgcaV/'],
    [win23IceCream, 'https://www.instagram.com/p/CpoA_B7gBpN/'],
    [win23ResumeCritique, 'https://www.instagram.com/p/Co-ZyYNJR6D/'],
    [fall22Prodcon, 'https://www.instagram.com/p/CjycXW0gcyo/'],
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
