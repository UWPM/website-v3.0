import React from 'react';
import '../styles/Events.css';
import upcomingEventPost from '../images/events/uwpm-blueprint 2.jpg';
import { Container } from 'react-bootstrap';

const UpcomingEventsCard = () => {
  const title = 'Upcoming Events';
  const date = 'Thursday, July 8th 2024';
  const location = 'E7 - 4053 (Engineering 7)';
  const callToAction = 'APPLY NOW';
  const about = 'About';
  const description =
    'Product Night features an interactive case study with real interview prompts from top companies, helping students ace their PM interviews.';
  const subtitle = 'Why Attend Product Night?';
  const points = [
    'Learn how to ace real interview questions',
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
              <h2 className>UWPM X Blueprint night</h2>
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
