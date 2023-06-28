import React from "react";
import "../styles/HomePage.css";
import "../App.css";
import { Link } from 'react-router-dom';
import desktopHexagons from "../images/background/desktop-hexagons.svg";
import gradCapHex from "../images/background/grad-cap-hex.svg";
import micHex from "../images/background/mic-hex.svg";
import pencilHex from "../images/background/pencil-hex.svg";
import headphoneHex from "../images/background/headphone-hex.svg";
import bowHex from "../images/background/bow-hex.svg";
import flowerHex from "../images/background/flower-hex.svg";

export default function Introduction({ show }) {
  return (
    <div id="homeIntro" style={{ position: "relative", minHeight: "830px" }}>
      {!show && (
        <>
          <div className="desktop-hex">
            <img src={desktopHexagons} alt="" />
          </div>
          <div className="grad-cap-hex">
            <img src={gradCapHex} alt="" />
          </div>
          <div className="mic-hex">
            <img src={micHex} alt="" />
          </div>
          <div className="pencil-hex">
            <img src={pencilHex} alt="" />
          </div>
          <div className="headphone-hex">
            <img src={headphoneHex} alt="" />
          </div>
          <div className="bow-hex">
            <img src={bowHex} alt="" />
          </div>
          <div className="flower-hex">
            <img src={flowerHex} alt="" />
          </div>
        </>
      )}
      <h2 className="mt-5">Welcome</h2>
      <div style={{ minHeight: "200px" }}>Insert Code Here</div>
      <div>
        <div class="button-container">
          <Link to="/about">
            <button class='button-red-gradiant inroduction-about-us'>
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
    </div>
  );
}
