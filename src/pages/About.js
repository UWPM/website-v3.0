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
import PMHeadshot from '../images/about/exec-profiles/UWPMHeadshot.png';
import Laura from '../images/about/exec-profiles/LauraHeadshot.png';
import Brooklyn from '../images/about/exec-profiles/BrooklynHeadshot.png';
import Isabelle from '../images/about/exec-profiles/IsabelleHeadshot.png';
import Johnson from '../images/about/exec-profiles/JohnsonHeadshot.png';
import Jennifer from '../images/about/exec-profiles/JenniferHeadshot.png';
import Navdeep from '../images/about/exec-profiles/NavdeepHeadshot.png';
import Dat from '../images/about/exec-profiles/DatHeadshot.png';
import Rachelle from '../images/about/exec-profiles/RachelleHeadshot.png';
import Cloris from '../images/about/exec-profiles/ClorisHeadshot.png';
import Hillary from '../images/about/exec-profiles/HillaryHeadshot.png';
import Fianna from '../images/about/exec-profiles/FiannaHeadshot.png';
import Phuong from '../images/about/exec-profiles/PhuongHeadshot.png';
import Albert from '../images/about/exec-profiles/AlbertHeadshot.png';
import Joshua from '../images/about/exec-profiles/JoshuaHeadshot.png';
import Peter from '../images/about/exec-profiles/PeterHeadshot.png';
import Shushawn from '../images/about/exec-profiles/ShushawnHeadshot.png';
import Petch from '../images/about/exec-profiles/PetchHeadshot.png';
import TeamProfileCard from '../components/TeamProfileCard';
import { ExecList } from '../components/ExecList';

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
              <h1 className="title-text">Fostering the </h1>
              <div className="position-relative d-inline">
                <img
                  className="red-circle"
                  alt="Red Circle"
                  src={require('../images/background/red-circle.png')}
                ></img>
                <h1 className="position-absolute start-0 title-text">
                  Creative
                </h1>
                <h1 className="title-text">
                  Product Management Community @ UWaterloo.
                </h1>
              </div>
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
          <div className="values-title-wrapper">
            <div className="title-div">
              <h2>Values</h2>
            </div>
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
            <Row className="team-title-parent">
              <a className="team-title">
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
            <Row className="team-type" style={{ marginTop: 20 }}>
              <h3 team-title>Internal</h3>
              <p className="team-paragraph">
                The Internal Team is the backbone of UW PM! They are responsible
                for setting term goals and providing support and guidance to the
                rest of the teams as-needed.
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.YashInfo.name}
                role={Execs.YashInfo.role}
                link={Execs.YashInfo.link}
                image={Execs.YashInfo.image}
              />
              <TeamProfileCard
                name={Execs.MayInfo.name}
                role={Execs.MayInfo.role}
                link={Execs.MayInfo.link}
                image={Execs.MayInfo.image}
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
                name={Execs.PrakrutiInfo.name}
                role={Execs.PrakrutiInfo.role}
                link={Execs.PrakrutiInfo.link}
                image={Execs.PrakrutiInfo.image}
              />
              <TeamProfileCard
                name={Execs.MaggieInfo.name}
                role={Execs.MaggieInfo.role}
                link={Execs.MaggieInfo.link}
                image={Execs.MaggieInfo.image}
              />
              <TeamProfileCard
                name={Execs.AhmedInfo.name}
                role={Execs.AhmedInfo.role}
                link={Execs.AhmedInfo.link}
                image={Execs.AhmedInfo.image}
              />
              <TeamProfileCard
                name={Execs.SinehaInfo.name}
                role={Execs.SinehaInfo.role}
                link={Execs.SinehaInfo.link}
                image={Execs.SinehaInfo.image}
              />
            </Row>
            <Row className="team-type">
              <h3 team-title>Outreach</h3>
              <p className="team-paragraph">
                The Outreach Team bridges our gap from the university bubble to
                different industry partners and also manages our finances.
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.LauraInfo.name}
                role={Execs.LauraInfo.role}
                link={Execs.LauraInfo.link}
                image={Execs.LauraInfo.image}
              />
              <TeamProfileCard
                name={Execs.BrooklynInfo.name}
                role={Execs.BrooklynInfo.role}
                link={Execs.BrooklynInfo.link}
                image={Execs.BrooklynInfo.image}
              />
              <TeamProfileCard
                name={Execs.IsabelleInfo.name}
                role={Execs.IsabelleInfo.role}
                link={Execs.IsabelleInfo.link}
                image={Execs.IsabelleInfo.image}
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
                name={Execs.JohnsonInfo.name}
                role={Execs.JohnsonInfo.role}
                link={Execs.JohnsonInfo.link}
                image={Execs.JohnsonInfo.image}
              />
              <TeamProfileCard
                name={Execs.JenniferInfo.name}
                role={Execs.JenniferInfo.role}
                link={Execs.JenniferInfo.link}
                image={Execs.JenniferInfo.image}
              />
              <TeamProfileCard
                name={Execs.NavdeepInfo.name}
                role={Execs.NavdeepInfo.role}
                link={Execs.NavdeepInfo.link}
                image={Execs.NavdeepInfo.image}
              />
              <TeamProfileCard
                name={Execs.DatInfo.name}
                role={Execs.DatInfo.role}
                link={Execs.DatInfo.link}
                image={Execs.DatInfo.image}
              />
              <TeamProfileCard
                name={Execs.KrishnaInfo.name}
                role={Execs.KrishnaInfo.role}
                link={Execs.KrishnaInfo.link}
                image={Execs.KrishnaInfo.image}
              />
              <TeamProfileCard
                name={Execs.SimonInfo.name}
                role={Execs.SimonInfo.role}
                link={Execs.SimonInfo.link}
                image={Execs.SimonInfo.image}
              />
            </Row>
            <Row className="team-type" id="marketing">
              <h3 team-title>Marketing</h3>
              <p className="team-paragraph">
                The Marketing Team produces and distributes our promotional
                content, including the podcast, newsletter, and announcements!
              </p>
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.RachelleInfo.name}
                role={Execs.RachelleInfo.role}
                link={Execs.RachelleInfo.link}
                image={Execs.RachelleInfo.image}
              />
              <TeamProfileCard
                name={Execs.JessicaInfo.name}
                role={Execs.JessicaInfo.role}
                link={Execs.JessicaInfo.link}
                image={Execs.JessicaInfo.image}
              />
              <TeamProfileCard
                name={Execs.ClorisInfo.name}
                role={Execs.ClorisInfo.role}
                link={Execs.ClorisInfo.link}
                image={Execs.ClorisInfo.image}
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
                name={Execs.AlbertInfo.name}
                role={Execs.AlbertInfo.role}
                link={Execs.AlbertInfo.link}
                image={Execs.AlbertInfo.image}
              />
              <TeamProfileCard
                name={Execs.PeterInfo.name}
                role={Execs.PeterInfo.role}
                link={Execs.PeterInfo.link}
                image={Execs.PeterInfo.image}
              />
              <TeamProfileCard
                name={Execs.JoshuaInfo.name}
                role={Execs.JoshuaInfo.role}
                link={Execs.JoshuaInfo.link}
                image={Execs.JoshuaInfo.image}
              />
              <TeamProfileCard
                name={Execs.ShushawnInfo.name}
                role={Execs.ShushawnInfo.role}
                link={Execs.ShushawnInfo.link}
                image={Execs.ShushawnInfo.image}
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
              <h3 team-title>Design</h3>
              <p className="team-paragraph">
                The Design team collaborates with Marketing to create all the
                cool graphics you see! They are also responsible for maintaining
                our fabulous design system.
              </p>
            </Row>
            <Row className="profile-row" style={{ marginBottom: '100px' }}>
              <TeamProfileCard
                name={Execs.HillaryInfo.name}
                role={Execs.HillaryInfo.role}
                link={Execs.HillaryInfo.link}
                image={Execs.HillaryInfo.image}
              />
              <TeamProfileCard
                name={Execs.FiannaInfo.name}
                role={Execs.FiannaInfo.role}
                link={Execs.FiannaInfo.link}
                image={Execs.FiannaInfo.image}
              />
              <TeamProfileCard
                name={Execs.AmieInfo.name}
                role={Execs.AmieInfo.role}
                link={Execs.AmieInfo.link}
                image={Execs.AmieInfo.image}
              />
              <TeamProfileCard
                name={Execs.PhuongInfo.name}
                role={Execs.PhuongInfo.role}
                link={Execs.PhuongInfo.link}
                image={Execs.PhuongInfo.image}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
