import { React, useState, useEffect } from 'react';
import '../App.css';
import desktopHexagons from '../images/background/desktop-hexagons.svg';
import gradCapHex from '../images/background/grad-cap-hex.svg';
import micHex from '../images/background/mic-hex.svg';
import pencilHex from '../images/background/pencil-hex.svg';
import headphoneHex from '../images/background/headphone-hex.svg';
import bowHex from '../images/background/bow-hex.svg';
import flowerHex from '../images/background/flower-hex.svg';
import { OverlayTrigger } from 'react-bootstrap';
import rectangle2 from '../images/popup-bubbles/Rectangle2.png';
import rectangle3 from '../images/popup-bubbles/Rectangle3.png';
import rectangle4 from '../images/popup-bubbles/Rectangle4.png';
import rectangle5 from '../images/popup-bubbles/Rectangle5.png';
import { Link } from 'react-router-dom';

export default function Introduction({ show }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const popoverMic = (
    <div className="image-container-mic-hex-popover">
      <img src={rectangle5} alt="" className="hex-popover-img"></img>
      <div className="text-popover-hex">
        <p>Hello! did you know that UWPM has a podcast?</p>
        <p>Go check it out on our community page!</p>
      </div>
    </div>
  );

  const popoverBow = (
    <div className="image-container-bow-hex-popover">
      <img src={rectangle2} alt=""></img>
      <div className="text-popover-hex">
        <p>Hi, I'm one of the many members of the UW PM community.</p>
        <p>Around me are students and alumnus!</p>
      </div>
    </div>
  );

  const popoverHeadphone = (
    <div className="image-container-headphone-hex-popover">
      <img src={rectangle4} alt=""></img>
      <div className="text-popover-hex">
        <p>Hi, I'm an aspiring PM in my second year at UW!</p>
      </div>
    </div>
  );

  const popoverGradCap = (
    <div className="image-container-grad-cap-hex-popover">
      <img src={rectangle3} alt=""></img>
      <div className="text-popover-grad-cap-hex">
        <p>Hey, nice to meet you! I'm a UW PM alumni!</p>
      </div>
    </div>
  );

  return (
    <>
      <div id="homeIntro" className="hero-container">
        {windowWidth > 500 && (
          <div className="hexagon-box">
            <div className="desktop-hex">
              <img src={desktopHexagons} alt="" />
            </div>
            <div className="grad-cap-hex">
              <OverlayTrigger
                className="overlay-container"
                delay={{ show: 250, hide: 400 }}
                trigger={['hover', 'click']}
                placement="left"
                overlay={popoverGradCap}
              >
                <img src={gradCapHex} alt="" />
              </OverlayTrigger>
            </div>
            <div className="mic-hex">
              <OverlayTrigger
                className="overlay-container"
                delay={{ show: 250, hide: 400 }}
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
                className="overlay-container"
                delay={{ show: 250, hide: 400 }}
                trigger={['hover', 'click']}
                placement="top"
                overlay={popoverHeadphone}
              >
                <img src={headphoneHex} alt="" />
              </OverlayTrigger>
            </div>
            <div className="bow-hex">
              <OverlayTrigger
                className="overlay-container"
                delay={{ show: 250, hide: 400 }}
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
          </div>
        )}
        <div className="hero-text">
          <div className="title-text-box">
            <h1 className="title-text">
              Fostering the{' '}
              <span className="position-relative z-2">
                Creative{' '}
                <img
                  className="position-absolute red-circle z-n1 start-0 top-0 min-w-100 min-h-100"
                  alt="Red Circle"
                  src={require('../images/background/red-circle.png')}
                />
              </span>
              Product Management Community @ UWaterloo.
            </h1>
          </div>

          <Link to="/about" className="button-container">
            <button className="button-red-gradiant">ABOUT</button>
          </Link>

        </div>
      </div>
    </>
  );
}
