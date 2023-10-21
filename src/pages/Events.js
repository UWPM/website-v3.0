import React from "react";
import desktopHexagons from "../images/background/desktop-hexagons.svg";
import {Container, Row, Col} from "react-bootstrap";
import "../styles/Events.css";
import "../App.css";
//import "../styles/Home.css"

export default function Events({ show }) {
  return (
    <>
      <Container>
          <div className="events-container">
            <div className="hex-container">
              <img src={desktopHexagons} alt="" />
            </div>
            <div className="figCaption">
              <h1 className="title-text">Gain product skills through our case competition, workshops, and more.</h1>
            </div>
          </div>
      </Container>

      <Container>
        <div>
          <h1>
            
          </h1>
        </div>

      </Container>

    </>
  );
}
