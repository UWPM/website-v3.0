import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

export default function CustomCard({ card }) {
  const { title, description, button, link, image, alt } = card;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 525;

  return (
    <div className="custom-card-container">
      <div className="hexagon-container">
        <img src={image} alt={alt} className="hexagon-image" />
      </div>
      <Card className="grey-card">
        <Card.Body>
          <Row className="d-flex justify-content-center">
            <Col>
              <Card.Title
                className="what-we-do-title"
                as="h3"
                style={{
                  color: 'white',
                  width: '100%', // adjust as needed
                }}
              >
                {title}
              </Card.Title>
              <Card.Text style={{ color: 'white' }}>{description}</Card.Text>
              {/* {isMobile && <Button className="red-button">{button}</Button>} */}
            </Col>
            {/* {!isMobile && (
              <Col
                xs="auto"
                className="d-flex align-items-end justify-content-end"
              >
                <Link to={link}>
                  <Button className="red-button">{button}</Button>
                </Link>
              </Col>
            )} */}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
