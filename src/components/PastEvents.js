import React from "react";
import "../styles/Events.css";
import "../App.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import speakerSneakPeak from "../images/events/speaker-sneakpeak.jpeg";
import blueprintUWPM from "../images/events/blueprint-uwpm.jpeg";
import win23ProductPanel from "../images/events/win23-product-panel.png";
import win23ResumeCritique from "../images/events/win23-resume-critique.png";
import win23IceCream from "../images/events/win23-ice-cream.png";
import fall22Prodcon from "../images/events/fall22-prodcon2.jpeg";

export default function PastEvents() {
  // Support image rows of size 3 right now
  const imageRows = [
    [
      [speakerSneakPeak, "https://www.instagram.com/p/CuinX2tANsc/"],
      [blueprintUWPM, "https://www.instagram.com/p/CuVlp-SJFqk/"],
      [win23ProductPanel, "https://www.instagram.com/p/CqbWlGKgcaV/"],
    ],
    [
      [win23IceCream, "https://www.instagram.com/p/CpoA_B7gBpN/"],
      [win23ResumeCritique, "https://www.instagram.com/p/Co-ZyYNJR6D/"],
      [fall22Prodcon, "https://www.instagram.com/p/CjycXW0gcyo/"],
    ],
  ];
  return (
    <Container>
      <h1 className="main-text">Past events</h1>
      <hr></hr>
      <Container className="my-10">
        {imageRows.map((x) => (
          <Row>
            {x.map(([imageSource, instagramURL]) => (
              <Col className="pb-4">
                <a href={instagramURL}>
                  <Image fluid src={imageSource} />
                </a>
              </Col>
            ))}
          </Row>
        ))}
        <div className="spacer"></div>
      </Container>
    </Container>
  );
}
