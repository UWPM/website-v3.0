import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import '../styles/About.css';

export default function TeamProfileCard(props) {
  const { name, role, link, image } = props;
  return (
    <Col xs={3} className="profile-card">
      <a target="_blank" href={link}>
        <img src={image} className="profile-pic"></img>
      </a>
      <div className="exec-text">
        <a target="_blank" href={link}>
          <h4 className="centered-box">{name}</h4>
        </a>
        <p className="centered-box">{role}</p>
      </div>
    </Col>
  );
}
