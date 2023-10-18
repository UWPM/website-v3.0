import React from "react";
import desktopHexagons from "../images/background/desktop-hexagons.svg";
import "../styles/Events.css";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import speakerSneakPeak from "../images/events/most_recent.jpeg"
export default function Events({ show }) {
  // Support image rows of size 3 right now
  const imageRows = [
    []
  ]
  return (
    <div id="homeIntro">
      <div className="desktop-hex">
        <img src={desktopHexagons} alt="" />
      </div>
      <div className="main-text-box">
        <h1 className="main-text">Past events</h1>
        <hr />
        <div style={{ marginTop: "120px" }}>
          <Container fluid className="my-5">
            <Row>
              <Col><img height={400} src={speakerSneakPeak}></img></Col>
              <Col>Hi</Col>
              <Col>Hi</Col>
              <Col>Hi</Col>
            </Row>
            <Row className={"my-3"}>
              <Col>Hello</Col>
            </Row>
            <div className="spacer"></div>
          </Container>
        </div>
      </div>
    </div>
  );
}
