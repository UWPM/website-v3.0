import React from 'react';
import "../styles/Events.css";

const UpcomingEventsCard = ({ title, date, location, cto, about, description, subtitle, point1, point2, point3, point4, imagePath}) => {
  return (
    <div className="container-full">
      <div className="title-section">
      <h2>{title}</h2>
        <hr/>
      </div>
    <div className="main-section">
      <div>
        <div className="section">
        <div className="inner-section">
        <h2 className> ProdCon</h2>
        <p>{date} <br/> {location}</p>
        </div>
        <button className = "red-button">{cto}</button>
        </div>
        <div className="inner-section">
        <p className = "about">{about}</p>
        <p className="description">{description}</p>
        </div>
        <div className="inner-section">
        <p className = "sub-title" >{subtitle}</p>
        <ul>
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
            <li>{point4}</li>
        </ul>
        </div>
      </div>
      <img className= "image" src={imagePath} alt="" />
      </div>
      </div>
  );
};

export default UpcomingEventsCard;