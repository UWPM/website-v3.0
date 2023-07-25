import React from "react";
import JobsTable from "../components/JobsTable";
import "../styles/PMJobs.css";
import "../App.css";
import desktopHexagons from "../images/background/desktop-hexagons.svg";
import Container from "react-bootstrap/Container";

export default function PMJobs({ show }) {
  return (
    <Container>
      <div id="homeIntro" style={{ position: "relative" }}>
        {!show && (
          <>
            <div className="desktop-hex">
              <img src={desktopHexagons} alt="" />
            </div>
            <div className="main-text-box">
              <h1 className="main-text">PM Jobs & Opportunities </h1>
              <p className="sub-text">The UW PM team has put together a list of product management internships and new grad roles in the US & Canada</p>
            </div>
          </>
        )}
      </div>
      <JobsTable />
    </Container>
  );
}
