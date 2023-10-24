import React from 'react';
import '../styles/Home.css';
import Container from 'react-bootstrap/Container';
import Introduction from '../components/Introduction';
import WhatWeDo from '../components/WhatWeDo';
import Statistics from '../components/Statistics';
import PastEventsCarousel from '../components/PastEventsCarousel';
import WorkedAt from '../components/WorkedAt';

export default function Home({ show }) {
  return (
    <Container>
      <Introduction show={show} />
      <WhatWeDo show={show} />
      <Statistics show={show} />
      <PastEventsCarousel show={show} />
      <WorkedAt show={show} />
    </Container>
  );
}
