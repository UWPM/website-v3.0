import React from "react";
import desktopHexagons from "../images/background/desktop-hexagons.svg";

export default function Events({ show }) {
  return (
    <>
      <div className="desktop-hex">
        <img src={desktopHexagons} alt="" />
      </div>
    </>
  );
}
