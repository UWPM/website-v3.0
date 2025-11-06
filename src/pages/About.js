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
                name={Execs.Adila.name}
                role={Execs.Adila.role}
                link={Execs.Adila.link}
                image={Execs.Adila.image}
              />
              <TeamProfileCard
                name={Execs.Muktha.name}
                role={Execs.Muktha.role}
                link={Execs.Muktha.link}
                image={Execs.Muktha.image}
              />
              <TeamProfileCard
                name={Execs.Fahmid.name}
                role={Execs.Fahmid.role}
                link={Execs.Fahmid.link}
                image={Execs.Fahmid.image}
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
                name={Execs.Adila.name}
                role={Execs.Adila.role}
                link={Execs.Adila.link}
                image={Execs.Adila.image}
              />
              <TeamProfileCard
                name={Execs.Iris.name}
                role={Execs.Iris.role}
                link={Execs.Iris.link}
                image={Execs.Iris.image}
              />
              <TeamProfileCard
                name={Execs.Michelle.name}
                role={Execs.Michelle.role}
                link={Execs.Michelle.link}
                image={Execs.Michelle.image}
              />
            </Row>
            <Row className="profile-row">
              <TeamProfileCard
                name={Execs.Khushi.name}
                role={Execs.Khushi.role}
                link={Execs.Khushi.link}
                image={Execs.Khushi.image}
              />
              <TeamProfileCard
                name={Execs.Emily.name}
                role={Execs.Emily.role}
                link={Execs.Emily.link}
                image={Execs.Emily.image}
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
                name={Execs.Aishwarya.name}
                role={Execs.Aishwarya.role}
                link={Execs.Aishwarya.link}
                image={Execs.Aishwarya.image}
              />
              <TeamProfileCard
                name={Execs.Vivan.name}
                role={Execs.Vivan.role}
                link={Execs.Vivan.link}
                image={Execs.Vivan.image}
              />
              <TeamProfileCard
                name={Execs.Samin.name}
                role={Execs.Samin.role}
                link={Execs.Samin.link}
                image={Execs.Samin.image}
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
                name={Execs.Michelle.name}
                role={Execs.Michelle.role}
                link={Execs.Michelle.link}
                image={Execs.Michelle.image}
              />
              <TeamProfileCard
                name={Execs.Bianca.name}
                role={Execs.Bianca.role}
                link={Execs.Bianca.link}
                image={Execs.Bianca.image}
              />
              <TeamProfileCard
                name={Execs.Aditi.name}
                role={Execs.Aditi.role}
                link={Execs.Aditi.link}
                image={Execs.Aditi.image}
              />
              <TeamProfileCard
                name={Execs.Iris.name}
                role={Execs.Iris.role}
                link={Execs.Iris.link}
                image={Execs.Iris.image}
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
                name={Execs.EmilyK.name}
                role={Execs.EmilyK.role}
                link={Execs.EmilyK.link}
                image={Execs.EmilyK.image}
              />
              <TeamProfileCard
                name={Execs.Samuel.name}
                role={Execs.Samuel.role}
                link={Execs.Samuel.link}
                image={Execs.Samuel.image}
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
                name={Execs.Danny.name}
                role={Execs.Danny.role}
                link={Execs.Danny.link}
                image={Execs.Danny.image}
              />
              <TeamProfileCard
                name={Execs.Yash.name}
                role={Execs.Yash.role}
                link={Execs.Yash.link}
                image={Execs.Yash.image}
              />
              <TeamProfileCard
                name={Execs.Owen.name}
                role={Execs.Owen.role}
                link={Execs.Owen.link}
                image={Execs.Owen.image}
              />
              <TeamProfileCard
                name={Execs.Gaurika.name}
                role={Execs.Gaurika.role}
                link={Execs.Gaurika.link}
                image={Execs.Gaurika.image}
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
                name={Execs.Avery.name}
                role={Execs.Avery.role}
                link={Execs.Avery.link}
                image={Execs.Avery.image}
              />
              <TeamProfileCard
                name={Execs.Joey.name}
                role={Execs.Joey.role}
                link={Execs.Joey.link}
                image={Execs.Joey.image}
              />
              <TeamProfileCard
                name={Execs.Billie.name}
                role={Execs.Billie.role}
                link={Execs.Billie.link}
                image={Execs.Billie.image}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
