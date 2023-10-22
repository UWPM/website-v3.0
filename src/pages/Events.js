import React from "react";
import Container from "react-bootstrap/Container";
import ProdConn from "../components/ProdCon";
import "../styles/Events.css";
import "../App.css";
import UpcomingEventsCard from "../components/UpcomingEvents.js";
import PastEvents from "../components/PastEvents";
import desktopHexagons from "../images/background/desktop-hexagons.svg";

export default function Events({ show }) {
  return (
    <Container>
      <div className="events-container">
        <div className="hex-container">
          <img src={desktopHexagons} alt="" />
        </div>
        <div className="figCaption">
          <h1 className="title-text">Gain product skills through our case competition, workshops, and more.</h1>
        </div>
      </div>
      <UpcomingEventsCard />
      <div>
        {!show && (
          <>
            <div>
              <h1 className="main-text-event">ProdCon 2022 Recap </h1>
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/SzZuCmgPiFQ?si=m2YBCin5-ocj-hfh"
                  width="853"
                  height="480"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />{" "}
              </div>
              <h1 className="main-text-event">ProdCon 2022 Recap Gallery</h1>
            </div>
          </>
        )}
      </div>
      <ProdConn />
      <PastEvents />
    </Container>
  );
}
