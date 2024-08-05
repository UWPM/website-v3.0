import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

// Event Photos
import win24IceCream from '../images/events/win24-ice-cream.jpg';
import riselivecasestudy from '../images/events/rise-live-case.jpg';
import uwpmxblueprint from '../images/events/uwpm-blueprint.jpg';
import uwpmxblueprint2 from '../images/events/uwpm-blueprint 2.jpg';
import sum24ResumeRevamp from '../images/events/resume-revamp.jpg';

export default function PastEventsCarousel({ show }) {
  let PastEventsCarousel = [
    {
      name: 'UWPM X BluePrint Product Night',
      date: 'July 8th, 2024',
      location: 'E7-4053',
      description:
        'Blueprint and UWPM are proud to present Product Night which will feature an interactive case study with prompts taken from real PM interviews at large companies, and help you to learn how to ace your next PM interview.',
      image: uwpmxblueprint2,
    },
    {
      name: 'Resume Revamp',
      date: 'June 13th, 2024',
      location: 'E7 Ideas Clinic',
      description:
        'Ready to level up your career? Join us at UW PMs RESUME REVAMP! Experienced mentors will be there to provide you with valuable insights and 1:1 guidance.',
      image: sum24ResumeRevamp,
    },
    {
      name: 'Ice Cream Social',
      date: 'May 30th, 2024',
      location: 'DC Fishbowl',
      description:
        'Enjoy free ice cream and snacks while connecting with other students at UW who are just as interested in PM as you are.',
      image: win24IceCream,
    },
    {
      name: 'RISE Product Challenge',
      date: 'March 14th, 2024',
      location: 'MC 2034',
      description:
        'Join us for the RISE (Revolutionary Ideas, Strategy, and Execution) Product Challenge – your arena to showcase groundbreaking product management strategies that can change the game! This brand new event is a competitive version of the UWPM Live Case Study event.',
      image: riselivecasestudy,
    },
    {
      name: 'UWPM X BluePrint Product Night',
      date: 'March 7th, 2024',
      location: 'E5-4106',
      description:
        'Blueprint and UWPM are proud to present Product Night which will feature an interactive case study with prompts taken from real PM interviews at large companies, and help you to learn how to ace your next PM interview.',
      image: uwpmxblueprint,
    },
  ];

  return (
    <>
      <h2 className="mb-5">Past Events</h2>
      <Carousel>
        {PastEventsCarousel.map((event, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-item-wrapper">
              <img
                className="d-block w-100 background-img"
                src={require('../images/background/event-folder.png')}
                alt="Carousel Slide"
              />
              <div className="file-contents">
                <img className="event-img" src={event.image} alt="Event" />
                <div className="event-text">
                  <h3 className="event-name">{event.name}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-description mt-5">{event.description}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex justify-content-center my-4">
        <Link to="/events">
          <button className="button-red-gradiant">VIEW ALL EVENTS</button>
        </Link>
      </div>
    </>
  );
}
