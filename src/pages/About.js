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
import Yash from '../images/about/exec-profiles/YashHeadshot.png';
import May from '../images/about/exec-profiles/MayHeadshot.png';
import Prakruti from '../images/about/exec-profiles/PrakrutiHeadshot.png';
import Maggie from '../images/about/exec-profiles/MaggieHeadshot.png';
import Ahmed from '../images/about/exec-profiles/AhmedHeadshot.png';
import Sineha from '../images/about/exec-profiles/SinehaHeadshot.png';
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

export default function About({ show }) {
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
              <Col xs={3} className="profile-card">
                <img src={Yash} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Yash Gajaria</h4>
                  <p className="centered-box">President</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={May} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">May Ly</h4>
                  <p className="centered-box">Social Lead</p>
                </div>
              </Col>
            </Row>
            <Row className="team-type">
              <h3 team-title>Events</h3>
              <p className="team-paragraph">
                Events is a fast-paced, ambitious team that is responsible for
                organizing product-related events for our student community.
              </p>
            </Row>
            <Row className="profile-row">
              <Col xs={3} className="profile-card">
                <img src={Prakruti} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Prakruti Gajera</h4>
                  <p className="centered-box">Events Lead</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Maggie} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Maggie Li</h4>
                  <p className="centered-box">Events Director</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Ahmed} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Ahmed Ahmed</h4>
                  <p className="centered-box">Events Director</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Sineha} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Sineha Manivannan</h4>
                  <p className="centered-box">Events Director</p>
                </div>
              </Col>
            </Row>
            <Row className="team-type">
              <h3 team-title>Outreach</h3>
              <p className="team-paragraph">
                The Outreach Team bridges our gap from the university bubble to
                different industry partners and also manages our finances.
              </p>
            </Row>
            <Row className="profile-row">
              <Col xs={3} className="profile-card">
                <img src={Laura} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Laura Persichini</h4>
                  <p className="centered-box">Outreach Lead</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Brooklyn} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Brooklyn Wong</h4>
                  <p className="centered-box">Outreach Director</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Isabelle} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Isabelle Lau</h4>
                  <p className="centered-box">Outreach Director</p>
                </div>
              </Col>
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
              <Col xs={3} className="profile-card">
                <img src={Johnson} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Johnson Duong</h4>
                  <p className="centered-box">Engineering Co-Lead</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Jennifer} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Jennifer Ying</h4>
                  <p className="centered-box">Engineering Co-Lead</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Navdeep} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Navdeep Gill</h4>
                  <p className="centered-box">Project Developer</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Dat} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Dat Bui</h4>
                  <p className="centered-box">Project Developer</p>
                </div>
              </Col>
            </Row>
            <Row className="profile-row" style={{ marginTop: '20px' }}>
              <Col xs={3} className="profile-card">
                <img src={PMHeadshot} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Krishna Joshi</h4>
                  <p className="centered-box">Project Developer</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={PMHeadshot} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Simon He</h4>
                  <p className="centered-box">Project Developer</p>
                </div>
              </Col>
            </Row>
            <Row className="team-type">
              <h3 team-title>Marketing</h3>
              <p className="team-paragraph">
                The Marketing Team produces and distributes our promotional
                content, including the podcast, newsletter, and announcements!
              </p>
            </Row>
            <Row className="profile-row">
              <Col xs={3} className="profile-card">
                <img src={Rachelle} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Rachelle Dong</h4>
                  <p className="centered-box">Marketing Lead</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={PMHeadshot} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Jessica Luong</h4>
                  <p className="centered-box">Marketing Director</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Cloris} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Cloris Zhang</h4>
                  <p className="centered-box">Marketing Director</p>
                </div>
              </Col>
            </Row>

            <Row className="team-type">
              <h3 team-title>Design</h3>
              <p className="team-paragraph">
                The Design team collaborates with Marketing to create all the
                cool graphics you see! They are also responsible for maintaining
                our fabulous design system.
              </p>
            </Row>
            <Row className="profile-row">
              <Col xs={3} className="profile-card">
                <img src={Hillary} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Hillary Huang</h4>
                  <p className="centered-box">Design Lead</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Fianna} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Fianna Tran</h4>
                  <p className="centered-box">Design Director</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={PMHeadshot} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Amie Ahn</h4>
                  <p className="centered-box">Design/Marketing Director</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Phuong} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Phuong Tu</h4>
                  <p className="centered-box">Design Director</p>
                </div>
              </Col>
            </Row>
            <Row className="team-type">
              <h3 team-title>Podcast</h3>
              <p className="team-paragraph">
                The Podcast Team produce our weekly podcast about PM!
              </p>
            </Row>
            <Row className="profile-row">
              <Col xs={3} className="profile-card">
                <img src={Albert} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Albert Huynh</h4>
                  <p className="centered-box">Podcast Lead</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Peter} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Peter Huang</h4>
                  <p className="centered-box">Podcast Director</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Joshua} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Joshua Chang</h4>
                  <p className="centered-box">Podcast Director</p>
                </div>
              </Col>
              <Col xs={3} className="profile-card">
                <img src={Shushawn} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Shushawn Saha</h4>
                  <p className="centered-box">Podcast Director</p>
                </div>
              </Col>
            </Row>
            <Row className="team-type">
              <h3 team-title>Newsletter</h3>
              <p className="team-paragraph">
                The Newsletter Team produce our weekly newsletter about PM!
              </p>
            </Row>
            <Row className="profile-row" style={{ marginBottom: '50px' }}>
              <Col xs={3} className="profile-card">
                <img src={Petch} className="profile-pic"></img>
                <div className="exec-text">
                  <h4 className="centered-box">Petch Lomtakul</h4>
                  <p className="centered-box">Newsletter Lead</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
