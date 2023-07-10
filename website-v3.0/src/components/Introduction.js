import React, { useState } from "react";
import "../styles/HomePage.css";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Introduction({ show }) {
  return (
    <>
      <div className="main-text-box">
        <h1 className="main-text">Fostering the </h1>
          <div className="position-relative d-inline">
            <img className="red-circle" alt="Red Circle" src={require("../images/background/red-circle.png")}></img>
            <h1 className="position-absolute start-0 main-text">Creative</h1>
          </div>
        <h1 className="main-text">Product Management Community @ UWaterloo.</h1>
      </div>
      <div>
        <div class="button-container">
          <Link to="/about">
            <button class='button-red inroduction-about-us'>
              ABOUT US
            </button>
          </Link>
          <Link to="/community">
            <button class='button-transparent'>
              GET INVOLVED
            </button> 
          </Link>
        </div>
      </div>
    </>
  );
}
