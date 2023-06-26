import React, { useState } from "react";
import "../styles/HomePage.css";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Introduction({ show }) {
  return (
    <>
      <h2 className="mt-5">Welcome</h2>
      <div style={{ minHeight: "200px" }}>Insert Code Here</div>
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
