import React from 'react';
import desktopHexagons from '../images/background/desktop-hexagons.svg';
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

// TODO: Reorganize the following code into src/components. See src/pages/Home.js as a reference

export default function About({ show }) {
  const Execs = ExecList;
  return (
    <>
      <Container>
        <Row>
          <div className="about-container">
            <div className="hex-container">
              <img src={desktopHexagons} alt="" />
            </div>
            <div className="about-caption">
              <h1 className="title-text">
                Fostering the{' '}
                <span className="position-relative d-inline z-2">
                  Creative
                  <img
                    className="red-circle min-w-100 min-h-100 position-absolute start-0 top-0 z-n1"
                    alt="Red Circle"
                    src={require('../images/background/red-circle.png')}
                  ></img>
                </span>
                Product Management Community @ UWaterloo.
              </h1>
            </div>
          </div>
        </Row>
        <Row className="mission-vision-row" id="mission">
          <Col lg={6} className="about-us-card">
            <Row className="card-title-parent">
              <a className="card-title" href="#mission">
                <h3 className="about-header-text">Mission</h3>
              </a>
            </Row>
            <div className="about-card-body">
              <h4 className="mission-text">
                UW PM is dedicated to creating a thriving product management
                community and offering students exposure to the field of
                product.
              </h4>
            </div>
          </Col>
          <Col lg={6} className="about-us-card">
            <Row className="card-title-parent">
              <a className="card-title" href="#mission">
                <h3 className="about-header-text">Vision</h3>
              </a>
            </Row>
            <div className="about-card-body">
              <h4 className="mission-text">
                Inspire product-level thinking and explore the rationale behind
                what we should build and why that will propel students towards
                successful careers in product.
              </h4>
            </div>
          </Col>
        </Row>
        <Row className="logo-row">
          <Col sm={2} className="logo-container">
            <img src={uwPMCircleLogo} alt="" />
          </Col>
        </Row>
        <Row className="what-we-do-row" id="whatDoWeDo">
          <Col lg={8} className="about-us-card">
            <Row className="card-title-parent">
              <a className="big-card-title" href="#whatDoWeDo">
                <h3 className="about-header-text">What Do We Do</h3>
              </a>
            </Row>
            <div className="big-about-card-body">
              <h4 className="big-card-text">
                We host a wide array of events running from product case
                competitions, resume reviews, mock interviews, panel discussions
                with alumni, and more!
                <br />
                <br />
                Our events aim to help students learn more about the world of
                product management, whether it is through building first-hand
                skills or learning from industry experts.
                <br />
                <br />
                Stay tuned for ProdCon, our flagship product case competition
                running every fall, allowing students to tackle a product-style
                case study with teammates and compete for prizes.
              </h4>
            </div>
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
                name={Execs.PalakInfo.name}
                role={Execs.PalakInfo.role}
                link={Execs.PalakInfo.link}
                image={Execs.PalakInfo.image}
              />
              <TeamProfileCard
                name={Execs.PrakrutiInfo.name}
                role={Execs.PrakrutiInfo.role}
                link={Execs.PrakrutiInfo.link}
                image={Execs.PrakrutiInfo.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Events</h3>
              <p className="team-paragraph">
                Events is a fast-paced, ambitious team that is responsible for
                organizing product-related events for our student community.
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.LeannInfo.name}
                role={Execs.LeannInfo.role}
                link={Execs.LeannInfo.link}
                image={Execs.LeannInfo.image}
              />
              <TeamProfileCard
                name={Execs.IvyInfo.name}
                role={Execs.IvyInfo.role}
                link={Execs.IvyInfo.link}
                image={Execs.IvyInfo.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Outreach</h3>
              <p className="team-paragraph">
                The Outreach Team bridges the gap between our university and industry partners.
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.MayankInfo.name}
                role={Execs.MayankInfo.role}
                link={Execs.MayankInfo.link}
                image={Execs.MayankInfo.image}
              />
              <TeamProfileCard
                name={Execs.FatimahInfo.name}
                role={Execs.FatimahInfo.role}
                link={Execs.FatimahInfo.link}
                image={Execs.FatimahInfo.image}
              />
              <TeamProfileCard
                name={Execs.KhaliInfo.name}
                role={Execs.KhaliInfo.role}
                link={Execs.KhaliInfo.link}
                image={Execs.KhaliInfo.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Engineering</h3>
              <p className="team-paragraph">
                The Engineering Team works on multiple different assignments
                throughout the term, including creating and updating the UW PM
                website!
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.AadhyaaaInfo.name}
                role={Execs.AadhyaaaInfo.role}
                link={Execs.AadhyaaaInfo.link}
                image={Execs.AadhyaaaInfo.image}
              />
              {/* Adding new software team members */}
              <TeamProfileCard
                name={Execs.GaurikaInfo.name}
                role={Execs.GaurikaInfo.role}
                link={Execs.GaurikaInfo.link}
                image={Execs.GaurikaInfo.image}
              />
              <TeamProfileCard
                name={Execs.NamanInfo.name}
                role={Execs.NamanInfo.role}
                link={Execs.NamanInfo.link}
                image={Execs.NamanInfo.image}
              />
              <TeamProfileCard
                name={Execs.JoshuaLiInfo.name}
                role={Execs.JoshuaLiInfo.role}
                link={Execs.JoshuaLiInfo.link}
                image={Execs.JoshuaLiInfo.image}
              />
              <TeamProfileCard
                name={Execs.PrasanaInfo.name}
                role={Execs.PrasanaInfo.role}
                link={Execs.PrasanaInfo.link}
                image={Execs.PrasanaInfo.image}
              />
              <TeamProfileCard
                name={Execs.SunnieInfo.name}
                role={Execs.SunnieInfo.role}
                link={Execs.SunnieInfo.link}
                image={Execs.SunnieInfo.image}
              />
              <TeamProfileCard
                name={Execs.UtkarshInfo.name}
                role={Execs.UtkarshInfo.role}
                link={Execs.UtkarshInfo.link}
                image={Execs.UtkarshInfo.image}
              />
            </Row>

            <Row className="team-type" id="marketing">
              <h3 team-title>Marketing</h3>
              <p className="team-paragraph">
                The Marketing Team produces and distributes our promotional
                content, including podcasts, newsletters, and announcements!
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.AmieInfo.name}
                role={Execs.AmieInfo.role}
                link={Execs.AmieInfo.link}
                image={Execs.AmieInfo.image}
              />
              <TeamProfileCard
                name={Execs.KamilaInfo.name}
                role={Execs.KamilaInfo.role}
                link={Execs.KamilaInfo.link}
                image={Execs.KamilaInfo.image}
              />
              <TeamProfileCard
                name={Execs.AditiInfo.name}
                role={Execs.AditiInfo.role}
                link={Execs.AditiInfo.link}
                image={Execs.AditiInfo.image}
              />
              <TeamProfileCard
                name={Execs.ClorisInfo.name}
                role={Execs.ClorisInfo.role}
                link={Execs.ClorisInfo.link}
                image={Execs.ClorisInfo.image}
              />
            </Row>

            <Row className="team-type">
              <h3 team-title>Projects</h3>
              <p className="team-paragraph">
                The projects team is responsible for creating and maintaining
                new initiatives from the Club!
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.YashInfo.name}
                role={Execs.YashInfo.role}
                link={Execs.YashInfo.link}
                image={Execs.YashInfo.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Podcast</h3>
              <p className="team-paragraph">
                The Podcast Team produces our weekly podcast about PM!
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.PeterInfo.name}
                role={Execs.PeterInfo.role}
                link={Execs.PeterInfo.link}
                image={Execs.PeterInfo.image}
              />
              <TeamProfileCard
                name={Execs.AnaInfo.name}
                role={Execs.AnaInfo.role}
                link={Execs.AnaInfo.link}
                image={Execs.AnaInfo.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Newsletter</h3>
              <p className="team-paragraph">
                The Newsletter Team produces our weekly newsletter about PM!
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.PetchInfo.name}
                role={Execs.PetchInfo.role}
                link={Execs.PetchInfo.link}
                image={Execs.PetchInfo.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Finance</h3>
              <p className="team-paragraph">
                The Finance Team manages the record of expenses and revenue.
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.DavidInfo.name}
                role={Execs.DavidInfo.role}
                link={Execs.DavidInfo.link}
                image={Execs.DavidInfo.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Design</h3>
              <p className="team-paragraph">
                The Design team collaborates with Marketing to create all the
                cool graphics you see! They are also responsible for maintaining
                our fabulous design system.
              </p>
            </Row>
            <Row className="profile-row" style={{ marginBottom: '100px' }}>
              <TeamProfileCard
                name={Execs.JaneInfo.name}
                role={Execs.JaneInfo.role}
                link={Execs.JaneInfo.link}
                image={Execs.JaneInfo.image}
              />
              <TeamProfileCard
                name={Execs.WanyunInfo.name}
                role={Execs.WanyunInfo.role}
                link={Execs.WanyunInfo.link}
                image={Execs.WanyunInfo.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Case Study</h3>
              <p className="team-paragraph">
                The Case study team focuses on developing case studies!
              </p>
            </Row>
            <Row className="profile-row" style={{ marginBottom: '100px' }}>
              <TeamProfileCard
                name={Execs.NavdeepInfo.name}
                role={Execs.NavdeepInfo.role}
                link={Execs.NavdeepInfo.link}
                image={Execs.NavdeepInfo.image}
              />
              <TeamProfileCard
                name={Execs.SinehaInfo.name}
                role={Execs.SinehaInfo.role}
                link={Execs.SinehaInfo.link}
                image={Execs.SinehaInfo.image}
              />
              <TeamProfileCard
                name={Execs.AmandaInfo.name}
                role={Execs.AmandaInfo.role}
                link={Execs.AmandaInfo.link}
                image={Execs.AmandaInfo.image}
              />
              <TeamProfileCard
                name={Execs.MichelleInfo.name}
                role={Execs.MichelleInfo.role}
                link={Execs.MichelleInfo.link}
                image={Execs.MichelleInfo.image}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
