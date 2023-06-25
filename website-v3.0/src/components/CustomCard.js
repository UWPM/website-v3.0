import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function CustomCard({ card }) {
  const { title, description, button, link, image } = card;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 500;

  return (
    <div className="custom-card-container">
      <div className="hexagon-container">
        <img src={image} alt="Happy Waterloo Students" className="hexagon-image" />
      </div>
      <Card className="grey-card">
        <Card.Body>
          <Row className="d-flex justify-content-center">
            <Col>
              <Card.Title as="h3">{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              {isMobile && <Button className="red-button">{button}</Button>}
            </Col>
            {!isMobile && (
              <Col xs="auto" className="d-flex align-items-end justify-content-end">
                <Button className="red-button">{button}</Button>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
