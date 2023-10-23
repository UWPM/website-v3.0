import React from "react";
import desktopHexagons from "../images/background/desktop-hexagons.svg";
import "../styles/Events.css";
import "../App.css";
import UpcomingEventsCard from "../components/UpcomingEvents.js";
import context from "react-bootstrap/esm/AccordionContext";

export default function Events({ show }) {
  return (
    <>
      <div className="desktop-hex">
        <img src={desktopHexagons} alt="" />
      </div>
      <UpcomingEventsCard />
    </>
  );
}
