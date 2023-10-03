import React from "react";
import "../styles/Home.css";
import "../App.css";

export default function Statistics({ show }) {
  return (
    <>
      <h2>Our Impact</h2>
      <hr></hr>
      <div class="container text-center">
        <div class="row row-cols-3">
          <div class="col">
            <div id="statistic_num">100+</div>
            <div id="statistic_word">members</div>
          </div>
          <div class="col">
            <div id="statistic_num">50+</div>
            <div id="statistic_word">workshops</div>
          </div>
          <div class="col">
            <div id="statistic_num">50+</div>
            <div id="statistic_word">events</div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div style={{ minHeight: "100px" }}></div>
    </>
  );
}
