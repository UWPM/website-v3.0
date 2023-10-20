import React from "react";
import desktopHexagons from "../images/background/desktop-hexagons.svg";
import "../styles/Events.css";
import "../App.css";
import UpcomingEventsCard from "../components/UpcomingEvents.js";
import context from "react-bootstrap/esm/AccordionContext";
import placeholder from '../images/events/placeholder.png';

export default function Events({ show }) {
  return (
    <>
      <div className="desktop-hex">
        <img src={desktopHexagons} alt="" />
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
    </>
  );
}

