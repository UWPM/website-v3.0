import "../styles/HomePage.css";
import "../App.css"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

//Event Photos
import win23IceCream from "../images/events/win23-ice-cream.png"
import fall22Prodcon from "../images/events/fall22-prodcon.png"
import win23ProductPanel from "../images/events/win23-product-panel.png"
import win23Resume from "../images/events/win23-resume-critique.png"

export default function PastEvents({ show }) {
  let pastEvents = [
    {
      name: "Product Panel",
      date: "April 2, 2023",
      location: "Virtual",
      description: "An online panel with current and past UW PM executives discussing their experiences and how they landed a product management coop!",
      image: win23ProductPanel
    },
    {
      name: "Ice Cream PM Meetup",
      date: "March 14, 2023",
      location: "DC 1301",
      description: "Enjoy free ice cream and snacks while connecting with other students at UW who are just as interested in PM as you are.",
      image: win23IceCream
    },
    {
      name: "Resume Critique",
      date: "Every Term",
      location: "Virtual",
      description: "Land your next co-op by preparing with Resume Critiques and Mock Interviews from your upper-year mentors.",
      image: win23Resume
    },
    {
      name: "Prodcon",
      date: "November 12, 2022",
      location: "DC 1301",
      description: "A product management case study conference where teams of 1-4 compete to present the best solution to the given case.",
      image: fall22Prodcon
    },
  ]

  return (
    <>
      <h2 className="mb-5">Past Events</h2>
      <Carousel>
        {pastEvents.map((event) =>
          <Carousel.Item>
            <div className="">
              <img className="d-block w-100" src={require("../images/background/event-folder.png")}
                alt="Carousel Slide" />
              <div className="file-contents">
                <div className="event-text">
                  <h3 className="event-name">{event.name}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-description mt-5">{event.description}</p>
                </div>
                <img className="event-img" src={event.image} alt="Event"></img>
              </div>
            </div>
          </Carousel.Item>
        )}
      </Carousel>
      <div className="d-flex justify-content-center my-4">
        <Link to="/about">
          <button class='button-red-gradiant'>
            VIEW ALL EVENTS
          </button>
        </Link>
      </div>
    </>
  );
}
