import React from "react";
import Container from "react-bootstrap/Container";
import ProdConn from "../components/ProdCon";
import "../styles/Events.css";
import "../App.css";
import UpcomingEventsCard from "../components/UpcomingEvents.js";
import context from "react-bootstrap/esm/AccordionContext";
import placeholder from '../images/events/placeholder.png';
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
      <UpcomingEventsCard
                title="Upcoming Event"
                date="November 18th 2023" 
                location="Location TBD"
                cto="APPLY NOW"
                about="About"
                description="ProdCon UW PM’s flagship event that typically happens every fall. ProdCon is a day-long product management case study competition, where students compete in teams of two to four to tackle an industry product challenge."
                subtitle="Why Attend ProdCon?"
                point1="Network with industry PM and like-minded students"
                point2="Build experiential product skills"
                point3="Solve real-world problems"
                point4="Win Prizes"
                imagePath={placeholder}
      />
      <div>
        {!show && (
          <>
            <div>
              <h1 className="main-text-event">ProdCon 2022 Recap </h1>
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/C0DPdy98e4c"
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
