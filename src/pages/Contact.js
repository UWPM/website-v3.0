import WorkedAt from '../components/WorkedAt';
import '../styles/Contact.css';
import '../App.css';
import desktopHexagonsHalf from '../images/background/desktop-hexagons-half.svg';
import instagramImg from '../images/contact/instagram-icon.png';
import linkedinImg from '../images/contact/linkedin-icon.png';
import facebookImg from '../images/contact/facebook-icon.png';
import twitterImg from '../images/contact/twitter-icon.png';

// TODO: Reorganize the following code into src/components. See src/pages/Home.js as a reference
import React, { useMemo, useState } from 'react';
import { Container, Form, Row, Col, Image, Button } from 'react-bootstrap';
import '../styles/Contact.css';
import icon from '../images/contactcute.svg';

export default function Contact({ show }) {
  const uwpmEmail = 'contact@uwaterloopm.com';
  const [formData, setFormData] = useState({
    name: '',
    userEmail: '',
    body: '',
  });

  const emailLink = useMemo(() => {
    const subject = `${formData.name} (${formData.userEmail}) has a message to UWPM!`;
    const mailtoLink = `mailto:${uwpmEmail}?subject=${subject}&body=${formData.body}&from=${formData.userEmail}`;
    console.log(mailtoLink);
    return mailtoLink;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Do something with the form data, like sending it to a server
    // Reset the form fields if needed
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <>
        <div className="contact-container">
          <img src={desktopHexagonsHalf} className="hexagons" />
          <div className="content">
            <h2>Get in Touch With Us!</h2>
            <p className="contact-text">
              {' '}
              Have a question or interested in joining? Shoot us an email or
              connect with us on social media! We look forward to connecting
              with you and sharing our passion for product management!
            </p>
            <div>
              <a
                href="https://www.instagram.com/uwaterloopm/?hl=en"
                target="_blank"
              >
                <img src={instagramImg} className="contact-icons" />
              </a>
              <a href="https://ca.linkedin.com/company/uw-pm" target="_blank">
                <img src={linkedinImg} className="contact-icons" />
              </a>
              <a href="https://www.facebook.com/uwaterloopm/" target="_blank">
                <img src={facebookImg} className="contact-icons" />
              </a>
              <a href="https://twitter.com/uwaterloopm?lang=en" target="_blank">
                <img src={twitterImg} className="contact-icons" />
              </a>
            </div>
          </div>
        </div>
      </>
      <Container>
        <Row style={{ display: 'flex', marginTop: 'auto' }}>
          <Col>
            <h1>Shoot us a message!</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="py-4">
                <Form.Label className="py-2" as="h1">
                  Name
                </Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="grey-form"
                />
                <Form.Label className="py-2" as="h1">
                  Email
                </Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="grey-form"
                />
                <Form.Label as="h1">Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={8}
                  name="body"
                  value={formData.body}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="py-2 mb-4 grey-form"
                />
                <Button className="py-2 button-red-gradiant">
                  <a href={emailLink} target="_blank">
                    Send Message
                  </a>
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image className="object-bottom" src={icon} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
