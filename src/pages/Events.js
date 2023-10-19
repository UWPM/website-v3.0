import React from "react";
import desktopHexagons from "../images/background/desktop-hexagons.svg";
import "../styles/Events.css";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import speakerSneakPeak from "../images/events/speaker-sneakpeak.jpeg"
import blueprintUWPM from "../images/events/blueprint-uwpm.jpeg"
import win23ProductPanel from "../images/events/win23-product-panel.png"
import win23ResumeCritique from "../images/events/win23-resume-critique.png"
import fall22Prodcon from "../images/events/fall22-prodcon.png"


export default function Events({ show }) {
  // Support image rows of size 3 right now
  const imageRows = [
    [speakerSneakPeak, blueprintUWPM, win23ProductPanel],
    [win23ResumeCritique, fall22Prodcon]
  ]
  return (
    <Container>
      <div id="homeIntro" style={{ position: "relative" }}>
        <div className="desktop-hex">
          <img src={desktopHexagons} alt="" />
        </div>
        <div className="main-text-box">
          <h1 className="main-text">Past events</h1>
          <hr className="w-100" />
          <div style={{ marginTop: "120px" }}>
            <Container className="my-5" style={{ position: "relative" }}>
              {imageRows.map(x => <Row className="py-4">
                {x.map(imageSrc => <Col xs={4} md={2} lg={6} ><img height={200} src={imageSrc} /></Col>)}
              </Row>)}
              <Row className={"my-3"}>
                <Col>Hello</Col>
              </Row>
              <div className="spacer"></div>
            </Container>
          </div>
        </div>
      </div>

    </Container>

  );
}
