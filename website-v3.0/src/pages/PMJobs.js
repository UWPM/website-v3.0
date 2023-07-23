import React from "react";
import "../styles/PMJobs.css";
import "../App.css";
import titleImage from "../images/pmjobs/title.svg";
import desktopHexagons from "../images/background/desktop-hexagons.svg";

export default function PMJobs({ show }) {

  return (
    <>
      <div id="homeIntro" style={{ position: "relative", minHeight: "830px" }}>
        {!show && (
          <>
            <div className="desktop-hex">
              <img src={desktopHexagons} alt="" />
            </div>
            <div className="head-container">
        <div class="titleImage">
          <img src={titleImage} alt=""></img>
        </div>
          </>
        )}
      </div>
    </>
  );
}
