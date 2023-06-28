import React from "react";
import CustomCard from "./CustomCard";
import "../styles/HomePage.css";
import "../App.css";

import WhatWeDoImage1 from "../images/whatwedo.jpeg";
import WhatWeDoImage2 from "../images/whatwedo.jpeg";
import WhatWeDoImage3 from "../images/whatwedo.jpeg";

const cardData = [
  {
    title: "Educate",
    description: "Providing resources & training of product management skills",
    button: "PM GUIDE",
    link: "https://example.com/card1",
    image: WhatWeDoImage1,
  },
  {
    title: "Exposure",
    description: "Access to open opportunities in Canada & the US",
    button: "PM JOBS",
    link: "https://example.com/card2",
    image: WhatWeDoImage2,
  },
  {
    title: "Network",
    description: "Connecting students and alumni in the industry",
    button: "COMMUNITY",
    link: "https://example.com/card3",
    image: WhatWeDoImage3,
  },
];

export default function WhatWeDo({ show }) {
  return (
    <>
      <h2>What We Do</h2>
      <div className="staggered-cards">
        {cardData.map((card, index) => (
          <div className="card-container">
            <CustomCard key={index} card={card} />
          </div>
        ))}
      </div>
    </>
  );
}
