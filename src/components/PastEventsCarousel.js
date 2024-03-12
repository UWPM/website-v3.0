import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

//Event Photos
import win23IceCream from '../images/events/win23-ice-cream.png';
import livecasestudyies from '../images/events/live-case-studies.png';
import mocktainandcheese from '../images/events/mocktain_and_cheese.png';
import win23ProductPanel from '../images/events/win23-product-panel.png';

export default function PastEventsCarousel({ show }) {
  let PastEventsCarousel = [
    {
      name: 'Product Panel',
      date: 'April 2, 2023',
      location: 'Virtual',
      description:
        'An online panel with current and past UW PM executives discussing their experiences and how they landed a product management coop!',
      image: win23ProductPanel,
    },
    {
      name: 'Ice Cream PM Meetup',
      date: 'March 14, 2023',
      location: 'DC 1301',
      description:
        'Enjoy free ice cream and snacks while connecting with other students at UW who are just as interested in PM as you are.',
      image: win23IceCream,
    },
    {
      name: 'Live Case Study',
      date: 'Every Term',
      location: 'Virtual',
      description:
        'A bi-weekly initiative started in Winter 2024. The interactive sessions are designed to immerse participations in real-world product management scenarios and interview situations.',
      image: livecasestudyies,
    },
    {
      name: 'Mocktail & Cheese',
      date: 'November 12, 2022',
      location: 'DC 1301',
      description:
        'A delightful evening at our Mocktails and Cheese Night! Connect with like-minded individuals, indulge in delicious mocktails, and forge meaningful connections.',
      image: mocktainandcheese,
    },
  ];

  return (
    <>
      <h2 className="mb-5">Past Events</h2>
      <Carousel>
        {PastEventsCarousel.map((event) => (
          <Carousel.Item>
            <div className="">
              <img
                className="d-block w-100"
                src={require('../images/background/event-folder.png')}
                alt="Carousel Slide"
              />
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
        ))}
      </Carousel>
      <div className="d-flex justify-content-center my-4">
        <Link to="/events">
          <button class="button-red-gradiant">VIEW ALL EVENTS</button>
        </Link>
      </div>
    </>
  );
}
