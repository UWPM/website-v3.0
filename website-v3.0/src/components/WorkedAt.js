import React, { useState } from "react";
import "../styles/HomePage.css";
import "../App.css"

//import images
import Salesforce from "../images/company-logos/salesforce.png"
import Meta from "../images/company-logos/meta.png"
import Microsoft from "../images/company-logos/microsoft.png"
import Apple from "../images/company-logos/apple.png"
import Riotgames from "../images/company-logos/riotgames.png"
import Ibm from "../images/company-logos/ibm.png"
import Lyft from "../images/company-logos/lyft.png"
import Wish from "../images/company-logos/wish.png"
import Datadog from "../images/company-logos/datadog.png"
import AmericanExpress from "../images/company-logos/american-express.png"
import Shopify from "../images/company-logos/shopify.png"
import Autodesk from "../images/company-logos/autodesk.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function WorkedAt({ show }) {
  return (
    <div style={{minHeight: "fit-content"}}>
      <h2>Our Community has Worked At</h2>
      <Container fluid className="my-5">
        <Row>
        <Col xs={4} md={2} className="company-image"><img height={60} src={Salesforce} alt={"Sales Force"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={60} src={Meta} alt={"Meta"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={70} src={Microsoft} alt={"Microsoft"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={50} src={Apple} alt={"Apple"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={80} src={Riotgames} alt={"Riot Games"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={70} src={Ibm} alt={"IBM"}/></Col>
        </Row>
        <Row className={"my-4"}>
        <Col xs={4} md={2} className="company-image"><img height={60} src={Lyft} alt={"Lyft"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={30} src={Wish} alt={"Wish"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={25} src={Datadog} alt={"Datadog"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={50} src={AmericanExpress} alt={"AmericanExpress"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={30} src={Shopify} alt={"Shopify"}/></Col>
        <Col xs={4} md={2} className="company-image"><img height={80} src={Autodesk} alt={"Autodesk"}/></Col>
        </Row>
        <div className="spacer"></div>
      </Container>
    </div>
  );
}
