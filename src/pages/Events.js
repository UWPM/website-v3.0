import React from "react";
import desktopHexagons from "../images/background/desktop-hexagons.svg";
import "../styles/Events.css";
import "../App.css";
import PastEvents from "../components/PastEvents";

export default function Events({ show }) {
  return (
    <>
      <div className="desktop-hex">
        <img src={desktopHexagons} alt="" />
      </div>
      <div>This is the events page</div>
      <PastEvents />
    </>
  );
}
