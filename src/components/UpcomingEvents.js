import React from 'react';
import '../styles/Events.css';
import upcomingEventPost from '../images/events/fall24-prodcon.jpg';
import { Container } from 'react-bootstrap';

const UpcomingEventsCard = () => {
  const title = 'Upcoming Events';
  const date = 'Saturday, November 16th 2024';
  const location = 'TBD';
  const callToAction = 'APPLICATIONS CLOSED';
  const about = 'About';
  const description =
    "ProdCon is the University of Waterloo's product management case study competition. You will get an opportunity to solve a case, present it to judges and network with industry professionals!";
  const subtitle = 'Why Attend ProdCon?';
  const points = [
    'Learn how to ace real PM case studies',
    'Explore PM strategies',
    'Develop your problem solving skills',
    'Network with like-minded students',
  ];

  return (
    <Container>
      <div className="title-section">
        <h2>{title}</h2>
        <hr />
      </div>
      <div className="main-section">
        <div className="upcoming-event-text">
          <div className="section">
            <div className="inner-section">
              <h2 className>ProdCon 2024</h2>
              <p>
                {date} <br /> {location}
              </p>
            </div>
            {/* <a href="https://forms.gle/sBnTSueM3r5Gp2H28" target="_blank">
              <button className="red-button">{callToAction}</button>
            </a> */}
          </div>
          <div className="inner-section">
            <p className="about">{about}</p>
            <p className="description">{description}</p>
          </div>
          <div className="inner-section">
            <p className="sub-title">{subtitle}</p>
            <ul>
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* TODO: Add link to IG post */}
        <a>
          <img
            className="upcoming-events-post"
            src={upcomingEventPost}
            alt=""
          />
        </a>
      </div>
    </Container>
  );
};

export default UpcomingEventsCard;
