import React from "react";
import "../styles/PMJobs.css";
import "../App.css";
import titleImage from "../images/pmjobs/title.svg";

export default function PMJobs({ show }) {

  return (
    <>
      <div className="head-container">
        <div class="titleImage">
          <img src={titleImage} alt=""></img>
        </div>
      </div>
    </>
  );
}
