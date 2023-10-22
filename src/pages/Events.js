import React from "react";
import Container from "react-bootstrap/Container";
import ProdConn from "../components/ProdCon";
import "../styles/Events.css";
import "../App.css";
import PastEvents from "../components/PastEvents";

export default function Events({ show }) {
  return (
    <Container>
      <div>
        {!show && (
          <>
            <div>
              <h1 className="main-text-event">ProdCon 2022 Recap </h1>
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/C0DPdy98e4c"
                  width="853"
                  height="480"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />{" "}
              </div>
              <h1 className="main-text-event">ProdCon 2022 Recap Gallery</h1>
            </div>
          </>
        )}
      </div>
      <ProdConn />
      <div>This is the events page</div>
      <PastEvents />
    </Container>
  );
}



