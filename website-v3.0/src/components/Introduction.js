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
import { OverlayTrigger } from 'react-bootstrap';
import rectangle1 from "../images/popup-bubbles/Rectangle1.png"
import rectangle2 from "../images/popup-bubbles/Rectangle2.png"
import rectangle3 from "../images/popup-bubbles/Rectangle3.png"
import rectangle4 from "../images/popup-bubbles/Rectangle4.png"

export default function Introduction({ show }) {


  const popoverMic = (
    <div className="image-container-mic-hex-popover">
      <img src={rectangle2} alt="" className="hex-popover-img">
      </img>
      <div className="text-popover-hex">
        <p>Hello! did you know that UWPM has a podcast</p>
        <p>Go check it out on our community page</p>
      </div>
    </div>
  );

  const popoverBow = (
    <div className="image-container-bow-hex-popover">
      <img src={rectangle1} alt="">
      </img>
      <div className="text-popover-hex">
        <p>hi, im one of the many members of the uw pm community.</p>
        <p>around me are students and alumnus</p>
      </div>
    </div>
  );

  const popoverHeadphone = (
    <div className="image-container-headphone-hex-popover">
      <img src={rectangle4} alt="">
      </img>
      <div className="text-popover-hex">
        <p>Hi, I'm an aspiring PM in my second year at UW</p>
      </div>
    </div>
  );

  const popoverGradCap = (
    <div className="image-container-grad-cap-hex-popover">
      <img src={rectangle3} alt="">
      </img>
      <div className="text-popover-grad-cap-hex">
        <p>Hey, nice to meet you! I'm a UW PM alumni</p>
      </div>
    </div>
  );


  return (
    <>
      <div id="homeIntro" style={{ position: "relative", minHeight: "830px" }}>
        {!show && (
          <>
          <div className="desktop-hex">
              <img src={desktopHexagons} alt="" />
            </div>
            <div className="grad-cap-hex">
              <OverlayTrigger
                trigger={['hover', 'click']}
                placement="bottom"
                overlay={popoverGradCap}
              >
                <img src={gradCapHex} alt="" />
              </OverlayTrigger>
            </div>
            <div className="mic-hex">
              <OverlayTrigger
                trigger={['hover', 'click']}
                placement="top"
                overlay={popoverMic}
              >
                <img src={micHex} alt="" />
              </OverlayTrigger>
            </div>
            <div className="pencil-hex">

              <img src={pencilHex} alt="" />
            </div>
            <div className="headphone-hex">
              <OverlayTrigger
                trigger={['hover', 'click']}
                placement="top"
                overlay={popoverHeadphone}
              >
                <img src={headphoneHex} alt="" />
              </OverlayTrigger>
            </div>
            <div className="bow-hex">
              <OverlayTrigger
                trigger={['hover', 'click']}
                placement="top"
                overlay={popoverBow}
              >
                <img src={bowHex} alt="" />
              </OverlayTrigger>
            </div>
            <div className="flower-hex">
              <img src={flowerHex} alt="" />
            </div>
          </>
        )}
        <div className="main-text-box">
          <h1 className="main-text">Fostering the </h1>
          <div className="position-relative d-inline">
            <img className="red-circle" alt="Red Circle" src={require("../images/background/red-circle.png")}></img>
            <h1 className="position-absolute start-0 main-text">Creative</h1>
          </div>
          <h1 className="main-text">Product Management Community @ UWaterloo.</h1>
        </div>
        <div>
          <div className="button-container">
            <Link to="/about">
              <button className='button-red-gradiant inroduction-about-us'>
                ABOUT US
              </button>
            </Link>
            <Link to="/community">
              <button className='button-transparent'>
                GET INVOLVED
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
