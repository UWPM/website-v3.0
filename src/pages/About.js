import React from 'react';
import uwPMCircleLogo from '../images/uw-pm-circle-logo.svg';
import '../styles/About.css';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import innovationImg from '../images/about/Group 5850.png';
import empowermentImg from '../images/about/Group 5851.png';
import learningImg from '../images/about/Group 5852.png';
import communityImg from '../images/about/Group 5853.png';
import TeamProfileCard from '../components/TeamProfileCard';
import { ExecList } from '../components/ExecList';
import AboutIntro from '../components/AboutIntro';

// TODO: Reorganize the following code into src/components. See src/pages/Home.js as a reference

export default function About({ show }) {
  const Execs = ExecList;
  return (
    <>
      <AboutIntro />
      <Container>
        <Row className="logo-row">
          <Col sm={2} className="logo-container">
            <img src={uwPMCircleLogo} alt="" />
          </Col>
        </Row>
        <div>
          <div className="values-title-wrapper" id="values">
            <a className="title-div" href="#values">
              <div>
                <h2>Values</h2>
              </div>
            </a>
            <div className="grid-container">
              <div className="grid-item">
                <img src={innovationImg} className="icons-image" />
                <div className="text-box">
                  <h3>Innovation</h3>
                  <p>
                    We value innovation as the driving force behind successful
                    products, that comes from encouraging creative thinking, the
                    exploration of new ideas, and the pursuit of inventive
                    solutions to real-world problems.
                  </p>
                </div>
              </div>
              <div className="grid-item">
                {' '}
                <img src={empowermentImg} className="icons-image" />
                <div className="text-box">
                  <h3>Empowerment</h3>
                  <p>
                    We empower anyone to succeed and break into the world of
                    product management by providing the resources, knowledge,
                    and opportunities necessary to succeed. We believe in
                    equipping individuals with the skills and experiences to
                    work in product, no matter their background.
                  </p>
                </div>
              </div>
              <div className="grid-item">
                {' '}
                <img src={learningImg} className="icons-image" />
                <div className="text-box">
                  <h3>Continuous Learning</h3>
                  <p>
                    We embrace a growth mindset and value continuous learning
                    for all our members. Members are encouraged to expand their
                    horizons on the world of product from learning from everyone
                    around them to strive for personal and professional
                    development.
                  </p>
                </div>
              </div>
              <div className="grid-item">
                {' '}
                <img src={communityImg} className="icons-image" />
                <div className="text-box">
                  <h3>Community Engagement</h3>
                  <p>
                    We actively engage with the Waterloo product management
                    community, both with alumni, current students and beyond, to
                    exchange knowledge and build valuable long-lasting
                    connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row className="meet-team-container">
          <Col>
            <Row className="team-title-parent" id="meet-the-team">
              <a className="team-title" href="#meet-the-team">
                <h3 className="about-header-text">Meet the Team</h3>
              </a>
            </Row>
            <Row>
              <p className="team-paragraph">
                The UW Product Management Club consists of a passionate group of
                students with a great deal of skills in marketing,
                communication, partnerships, finance, web development, and
                graphic design.
              </p>
            </Row>
            <Row className="team-type">
              <h3 team-title>Internal</h3>
              <p className="team-paragraph">
                The Internal Team is the backbone of UW PM! They are responsible
                for setting term goals and providing support and guidance to the
                rest of the teams.
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.Aishwarya.name}
                role={Execs.Aishwarya.role}
                link={Execs.Aishwarya.link}
                image={Execs.Aishwarya.image}
              />
              <TeamProfileCard
                name={Execs.Muktha.name}
                role={Execs.Muktha.role}
                link={Execs.Muktha.link}
                image={Execs.Muktha.image}
              />
              <TeamProfileCard
                name={Execs.Samuel.name}
                role={Execs.Samuel.role}
                link={Execs.Samuel.link}
                image={Execs.Samuel.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Marketing</h3>
              <p className="team-paragraph">
                The Marketing Team produces and distributes our promotional
                content, including podcasts, newsletters, and announcements!
              </p>
            </Row>
            <Row className="profile-row" style={{ marginBottom: '100px' }}>
              <TeamProfileCard
                name={Execs.Khushi.name}
                role={Execs.Khushi.role}
                link={Execs.Khushi.link}
                image={Execs.Khushi.image}
              />
              <TeamProfileCard
                name={Execs.EvelynT.name}
                role={Execs.EvelynT.role}
                link={Execs.EvelynT.link}
                image={Execs.EvelynT.image}
              />
              <TeamProfileCard
                name={Execs.Orlando.name}
                role={Execs.Orlando.role}
                link={Execs.Orlando.link}
                image={Execs.Orlando.image}
              />
            </Row>

            {/* ===== PODCAST ===== */}
            <Row className="team-type" id="podcast">
              <h3 team-title>Podcast</h3>
              <p className="team-paragraph">
                The Podcast Team produces our weekly episodes and creative audio
                content around product management!
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.August.name}
                role={Execs.August.role}
                link={Execs.August.link}
                image={Execs.August.image}
              />
              <TeamProfileCard
                name={Execs.Samir.name}
                role={Execs.Samir.role}
                link={Execs.Samir.link}
                image={Execs.Samir.image}
              />
              <TeamProfileCard
                name={Execs.Milind.name}
                role={Execs.Milind.role}
                link={Execs.Milind.link}
                image={Execs.Milind.image}
              />
              <TeamProfileCard
                name={Execs.Ria.name}
                role={Execs.Ria.role}
                link={Execs.Ria.link}
                image={Execs.Ria.image}
              />
            </Row>

            {/* ===== OUTREACH ===== */}
            <Row className="team-type">
              <h3 team-title>Outreach</h3>
              <p className="team-paragraph">
                The Outreach Team builds relationships between the UW PM
                community, students, and industry partners.
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.Fanelle.name}
                role={Execs.Fanelle.role}
                link={Execs.Fanelle.link}
                image={Execs.Fanelle.image}
              />
              <TeamProfileCard
                name={Execs.EvelynW.name}
                role={Execs.EvelynW.role}
                link={Execs.EvelynW.link}
                image={Execs.EvelynW.image}
              />
              <TeamProfileCard
                name={Execs.Maurya.name}
                role={Execs.Maurya.role}
                link={Execs.Maurya.link}
                image={Execs.Maurya.image}
              />
            </Row>

            {/* ===== DESIGN ===== */}
            <Row className="team-type">
              <h3 team-title>Design</h3>
              <p className="team-paragraph">
                The Design Team collaborates with Marketing to create all the
                amazing visuals and maintain our brand system.
              </p>
            </Row>
            <Row className="profile-row" style={{ marginBottom: '100px' }}>
              <TeamProfileCard
                name={Execs.Ellie.name}
                role={Execs.Ellie.role}
                link={Execs.Ellie.link}
                image={Execs.Ellie.image}
              />
              <TeamProfileCard
                name={Execs.Evan.name}
                role={Execs.Evan.role}
                link={Execs.Evan.link}
                image={Execs.Evan.image}
              />
              <TeamProfileCard
                name={Execs.Nemesha.name}
                role={Execs.Nemesha.role}
                link={Execs.Nemesha.link}
                image={Execs.Nemesha.image}
              />
            </Row>

            {/* ===== EVENTS ===== */}
            <Row className="team-type">
              <h3 team-title>Events</h3>
              <p className="team-paragraph">
                The Events Team plans and executes all our exciting initiatives
                for the UW PM community!
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.Nicole.name}
                role={Execs.Nicole.role}
                link={Execs.Nicole.link}
                image={Execs.Nicole.image}
              />
              <TeamProfileCard
                name={Execs.Masudah.name}
                role={Execs.Masudah.role}
                link={Execs.Masudah.link}
                image={Execs.Masudah.image}
              />
              <TeamProfileCard
                name={Execs.Michael.name}
                role={Execs.Michael.role}
                link={Execs.Michael.link}
                image={Execs.Michael.image}
              />
              <TeamProfileCard
                name={Execs.Owen.name}
                role={Execs.Owen.role}
                link={Execs.Owen.link}
                image={Execs.Owen.image}
              />
            </Row>

            {/* ===== ENGINEERING ===== */}
            <Row className="team-type">
              <h3 team-title>Engineering</h3>
              <p className="team-paragraph">
                The Engineering Team maintains and improves the UW PM website
                and digital tools!
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.Shreya.name}
                role={Execs.Shreya.role}
                link={Execs.Shreya.link}
                image={Execs.Shreya.image}
              />
              <TeamProfileCard
                name={Execs.Krish.name}
                role={Execs.Krish.role}
                link={Execs.Krish.link}
                image={Execs.Krish.image}
              />
              <TeamProfileCard
                name={Execs.Cedric.name}
                role={Execs.Cedric.role}
                link={Execs.Cedric.link}
                image={Execs.Cedric.image}
              />
              <TeamProfileCard
                name={Execs.Gaurika.name}
                role={Execs.Gaurika.role}
                link={Execs.Gaurika.link}
                image={Execs.Gaurika.image}
              />
              <TeamProfileCard
                name={Execs.Lalithya.name}
                role={Execs.Lalithya.role}
                link={Execs.Lalithya.link}
                image={Execs.Lalithya.image}
              />
              <TeamProfileCard
                name={Execs.Naysha.name}
                role={Execs.Naysha.role}
                link={Execs.Naysha.link}
                image={Execs.Naysha.image}
              />
            </Row>

            {/* ===== CONTENT ===== */}
            <Row className="team-type">
              <h3 team-title>Content</h3>
              <p className="team-paragraph">
                The Content Team writes and curates newsletters, blog posts, and
                social features that inspire the UW PM community.
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.Jiya.name}
                role={Execs.Jiya.role}
                link={Execs.Jiya.link}
                image={Execs.Jiya.image}
              />
              <TeamProfileCard
                name={Execs.Arpit.name}
                role={Execs.Arpit.role}
                link={Execs.Arpit.link}
                image={Execs.Arpit.image}
              />
              <TeamProfileCard
                name={Execs.Puneet.name}
                role={Execs.Puneet.role}
                link={Execs.Puneet.link}
                image={Execs.Puneet.image}
              />
            </Row>

            {/* ===== FINANCE ===== */}
            <Row className="team-type">
              <h3 team-title>Finance</h3>
              <p className="team-paragraph">
                The Finance Team manages records of expenses, revenue, and
                budgeting for all UW PM activities.
              </p>
            </Row>
            <Row className="profile-row" style={{ marginBottom: '100px' }}>
              <TeamProfileCard
                name={Execs.KrishFinance.name}
                role={Execs.KrishFinance.role}
                link={Execs.KrishFinance.link}
                image={Execs.KrishFinance.image}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
