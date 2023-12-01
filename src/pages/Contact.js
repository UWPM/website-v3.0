import React from 'react';
import WorkedAt from '../components/WorkedAt';
import '../styles/Contact.css';
import '../App.css';
import desktopHexagonsHalf from '../images/background/desktop-hexagons-half.svg';
import instagramImg from '../images/contact/instagram-icon.png';
import linkedinImg from '../images/contact/linkedin-icon.png';
import facebookImg from '../images/contact/facebook-icon.png';
import twitterImg from '../images/contact/twitter-icon.png';

// TODO: Reorganize the following code into src/components. See src/pages/Home.js as a reference

export default function Contact({ show }) {
  return (
    <>
      <div className="contact-container">
        <img src={desktopHexagonsHalf} className="hexagons" />
        <div className="content">
          <h2>Get in Touch With Us!</h2>
          <p className="contact-text">
            {' '}
            Have a question or interested in joining? Shoot us an email or
            connect with us on social media! We look forward to connecting with
            you and sharing our passion for product management!
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
  );
}
