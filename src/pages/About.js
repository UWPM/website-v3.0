import React from "react";
import "../styles/About.css";
import innovationImg from "../images/about/Group 5850.png";
import empowermentImg from "../images/about/Group 5851.png";
import learningImg from "../images/about/Group 5852.png";
import communityImg from "../images/about/Group 5853.png";

export default function About({ show }) {

  return (
    <>
    <div>
      <div class="what-we-do-container">
      <div class="title-div" ><h2>What Do We Do</h2></div>
      <div class="rounded-div">
      <div>
        <p>We host a wide array of events running from product case competitions, resume reviews, mock interviews, panel discussions with alumni, and more! </p>
        <p>Our events aim to help students learn more about the world of product management, whether it is through building first-hand skills or learning from industry experts. </p>
        <p>Stay tuned for ProdCon, our flagship product case competition running every fall, allowing students to tackle a product-style case study with teammates and compete for prizes.</p>
      </div>
      </div>
      </div>
      <div class="values-title-wrapper">
        <div class="title-div">
          <h2>Values</h2>
        </div>
      <div class="grid-container">
        <div class="grid-item">
          <img src={innovationImg} class="icons-image"/>
        <div class="text-box">
            <h3>Innovation</h3>
            <p>We value innovation as the driving force behind successful products, that comes from encouraging creative thinking, the exploration of new ideas, and the pursuit of inventive solutions to real-world problems.</p>
        </div>
        </div>
        <div class="grid-item"> <img src={empowermentImg} class="icons-image"/>
        <div class="text-box">
            <h3>Empowerment</h3>
            <p>We empower anyone to succeed and break into the world of product management by providing the resources, knowledge, and opportunities necessary to succeed.  We believe in equipping individuals with the skills and experiences to work in product, no matter their background.</p>
        </div></div>
        <div class="grid-item"> <img src={learningImg} class="icons-image"/>
        <div class="text-box">
            <h3>Continuous Learning</h3>
            <p>We embrace a growth mindset and value continuous learning for all our members. Members are encouraged to expand their horizons on the world of product from learning from everyone around them to strive for personal and professional development.</p>
        </div></div>
        <div class="grid-item"> <img src={communityImg} class="icons-image"/>
        <div class="text-box">
            <h3>Community Engagement</h3>
            <p>We actively engage with the Waterloo product management community, both with alumni, current students and beyond, to exchange knowledge and build valuable long-lasting connections.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
    </>
  );
}
