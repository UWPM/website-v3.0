import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ProdCon from '../components/ProdCon';
import '../styles/Events.css';
import '../App.css';
import UpcomingEventsCard from '../components/UpcomingEvents.js';
import PastEvents from '../components/PastEvents';
import desktopHexagons from '../images/background/desktop-hexagons.svg';
import axios from 'axios';
import useInstagramPosts from '../hooks/useInstagramPosts.js';

// TODO: Reorganize the following code into src/components. See src/pages/Home.js as a reference

export default function Events({ show }) {
  const [posts, setPosts] = useInstagramPosts();
  return (
    <Container>
      <div className="events-container">
        <div className="hex-container">
          <img src={desktopHexagons} alt="" />
        </div>
        <div className="figCaption">
          <h1 className="title-text">
            Gain product skills through our case competition, workshops, and
            more.
          </h1>
        </div>
      </div>
      <UpcomingEventsCard />
      <div>
        {!show && (
          <>
            <div>
              <h1 className="video_carousel_text">ProdCon 2023 Recap </h1>
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/SzZuCmgPiFQ?si=m2YBCin5-ocj-hfh"
                  width="853"
                  height="480"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />{' '}
              </div>
              <h1 className="video_carousel_text">
                ProdCon 2023 Recap Gallery
              </h1>
            </div>
          </>
        )}
      </div>
      <ProdCon />
      <PastEvents />
    </Container>
  );
}
