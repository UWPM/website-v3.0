import React from "react";
import "../styles/Events.css";
import placeholder from "../images/events/placeholder.png";

const UpcomingEventsCard = ({
  title,
  date,
  location,
  buttonMessage,
  about,
  description,
  subtitle,
  point1,
  point2,
  point3,
  point4,
}) => {
  title = "Upcoming Event";
  date = "November 18th 2023";
  location = "Location TBD";
  buttonMessage = "APPLY NOW";
  about = "About";
  description =
    "ProdCon UW PM’s flagship event that typically happens every fall. ProdCon is a day-long product management case study competition, where students compete in teams of two to four to tackle an industry product challenge.";
  subtitle = "Why Attend ProdCon?";
  point1 = "Network with industry PM and like-minded students";
  point2 = "Build experiential product skills";
  point3 = "Solve real-world problems";
  point4 = "Win Prizes";
  const points = [point1, point2, point3, point4];
  return (
    <div className="container-full">
      <div className="title-section">
        <h2>{title}</h2>
        <hr />
      </div>
      <div className="main-section">
        <div>
          <div className="section">
            <div className="inner-section">
              <h2 className> ProdCon</h2>
              <p>
                {date} <br /> {location}
              </p>
            </div>
            <a
              href="https://www.instagram.com/p/CyWVHpNIC-i/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="red-button">{buttonMessage}</button>
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
        <a href="https://www.instagram.com/p/CyWVHpNIC-i/?hl=en">
          <img className="image" src={placeholder} alt="" />
        </a>
      </div>
    </div>
  );
};

export default UpcomingEventsCard;
