import React from "react";
import desktopHexagons from "../images/background/desktop-hexagons.svg";
import "../styles/Events.css";
import "../App.css";

export default function Events({ show }) {
  return (
    <>
      <div id="homeIntro">
          <>
            <div className="desktop-hex">
              <img src={desktopHexagons} alt="" />
            </div>
            <div className="main-text-box">
              <h1 className="main-text">Past events</h1>
              <hr/>
            </div>
          </>
      </div>
    </>
  );
}
