import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import hexagonScroll from "../images/uwpm-brand/scrolltop.svg";

export default function ScrollTop({ isVisible }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="scroll-container">
        {isVisible && (
          <div className="fade-in">
            <button className="scroll-top" onClick={scrollToTop}>
              <img id="hexagon-scroll" alt="" src={hexagonScroll} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
