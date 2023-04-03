import React, { useState } from "react";
import "../styles/HomePage.css";
import Container from 'react-bootstrap/Container';


import Introduction from "../components/Introduction";
import WhatWeDo from "../components/WhatWeDo";
import Statistics from "../components/Statistics";
import PastEvents from "../components/PastEvents";
import WorkedAt from "../components/WorkedAt";

export default function HomePage({ show }) {

  return (
    <Container>
      <Introduction show={show} />
      <WhatWeDo show={show} />
      <Statistics show={show} />
      <PastEvents show={show} />
      <WorkedAt show={show} />
    </Container>
  );
}
