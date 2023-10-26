import React from 'react';
import '../styles/Events.css';
import upcomingEventPost from '../images/events/prodcon-event-post.png';
import { Container } from 'react-bootstrap';

const UpcomingEventsCard = () => {
  const title = 'Upcoming Events';
  const date = 'Saturday, November 18th 2023';
  const location = 'Location: Science Technology Center (STC 1012)';
  const cto = 'APPLY NOW';
  const about = 'About';
  const description =
    'ProdCon UW PM’s flagship event that typically happens every fall. ProdCon is a day-long product management case study competition, where students compete in teams of two to five to tackle an industry product challenge.';
  const subtitle = 'Why Attend ProdCon?';
  const points = [
    'Network with industry PM and like-minded students',
    'Build experiential product skills',
    'Solve real-world problems',
    'Win Prizes',
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
              <h2 className> ProdCon</h2>
              <p>
                {date} <br /> {location}
              </p>
            </div>
            <a href="https://forms.gle/sBnTSueM3r5Gp2H28" target="_blank">
              <button className="red-button">{cto}</button>
            </a>
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
