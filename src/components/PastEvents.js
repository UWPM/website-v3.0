import React, { useState, useEffect } from 'react';
import '../styles/Events.css';
import '../App.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import speakerSneakPeak from '../images/events/speaker-sneakpeak.jpeg';
import blueprintUWPM from '../images/events/blueprint-uwpm.jpeg';
import win23ProductPanel from '../images/events/win23-product-panel.png';
import win23IceCream from '../images/events/win23-ice-cream.png';
import livecasestudyies from '../images/events/live-case-studies.png';
import mocktainandcheese from '../images/events/mocktain_and_cheese.png';
import { InstagramEmbed } from 'react-social-media-embed';
import useInstagramPosts from '../hooks/useInstagramPosts';

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
  const [posts, setPosts] = useInstagramPosts();

  // Change number of rows dynamically
  const getCols = (data) => {
    const colsPerRow = isMobile ? 2 : 3;
    const rows = [];
    data = data?.map((x) => x.url);
    for (let i = 0; i < data.length; i += colsPerRow) {
      const rowImages = data.slice(i, i + colsPerRow);

      const colComponents = rowImages.map((instagramUrl, index) => (
        <Col key={index} xs={6} md={4} className="p-4">
          <InstagramEmbed url={instagramUrl} />
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
        {getCols(posts)}
        <div className="spacer"></div>
      </Container>
    </Container>
  );
}
