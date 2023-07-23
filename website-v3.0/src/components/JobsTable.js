import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/PMJobs.css";
import "../App.css";

const roleLinks = [
  <a href="https://jobs.cisco.com/jobs/ProjectDetail/Product-Management-Specialist-Intern-United-States/1380418?source=LinkedIn/" target="_blank">
    Product Management Intern
  </a>,
  <a href="https://www.weareroku.com/jobs/product-manager-intern-ad-measurement-new-york-united-states?source=linkedin_limited_listing&utm_source=linkedin_limited_listing&gh_src=v5thu41&gh_src=v5thu41&gh_src=9dbe5a101us" target="_blank">
    Product Manager Intern
  </a>,
  <a href="https://boards.greenhouse.io/addepar1/jobs/6487468002?gh_src=31a4a9852&source=LinkedIn" target="_blank">
    Product Analytics Intern
  </a>,
  <a href="https://careers.honeywell.com/us/en/job/HONEUSHRD902751EXTERNALENUS/Product-Management-Intern?utm_source=linkedin&utm_medium=phenom-feeds" target="_blank">
    Product Management Intern
  </a>,
  <a href="https://autodesk.wd1.myworkdayjobs.com/Ext/job/Portland-OR-USA/Intern--Fusion-Product-Manager_23WD66594-1?src=JB-10065" target="_blank">
    Fusion Product Manager Intern
  </a>,
  <a href="https://www.applytracking.com/x.aspx?method=direct&type=apply&board=D92FCD45-1292-4AE2-B555-D7A273418B42&Job=3104632&ClientCode=17960" target="_blank">
    Services Product Manager Intern
  </a>,
  <a href="https://boards.greenhouse.io/samsungresearchamericainternship/jobs/6614792002?gh_src=13c38d562us" target="_blank">
    Product Manager Intern
  </a>,
  <a href="https://www.lifeatspotify.com/jobs/summer-internship-technical-product-management-music-mission-us" target="_blank">
    Technical Product Management Intern
  </a>,
  <a href="https://www.atlassian.com/company/careers/detail/c2878062-e8b1-4513-8a96-6ce37ff62151" target="_blank">
    Associate Product Manager Intern
  </a>,
  <a href="https://careers.jobscore.com/careers/cadent/jobs/product-management-intern-cWt8qcEOLkpB-ULHKFWxD6?t=w6ybqr" target="_blank">
    Product Management Intern
  </a>,
  <a
    href="https://university-uber.icims.com/jobs/120419/job?iis=marketing&iisn=Linkedin&iisp=paid&linkedin_sponsored=sponsored&rx_campaign=Linkedin1&rx_group=1462&rx_job=120419&rx_medium=post&rx_r=none&rx_source=Linkedin&rx_ts=20230301T004825Z&rx_viewer=f7dd686e9d8f11ed97c3b17508f4a2e6cae77bafd53b490fab3274d3efb0a2a1&mobile=false&width=1030&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240"
    target="_blank"
  >
    Technical Product Management Intern
  </a>,
  <a href="https://navan.com/careers/openings/4888624?gh_jid=4888624&gh_src=b13de4e21" target="_blank">
    Product Manager Intern
  </a>,
  <a href="https://boards.greenhouse.io/sezzle/jobs/4984954003?gh_src=6d383ce23us" target="_blank">
    Product Management Intern
  </a>,
  <a href="https://ouryahoo.wd5.myworkdayjobs.com/en-US/careers/job/United-States-of-America---Remote/Product-Manager-Intern---Monetization-Product-Team_JR0021779" target="_blank">
    Product Manager Intern
  </a>,
];

const pmJobsList = [
  { company: "Cisco", role: roleLinks[0], location: "San Jose", session: "Summer 2023", added: "Feb 28" },
  { company: "Roku", role: roleLinks[1], location: "New York", session: "Summer 2023", added: "Feb 28" },
  { company: "Addepar", role: roleLinks[2], location: "Remote", session: "Summer 2023", added: "Feb 28" },
  { company: "Honeywell", role: roleLinks[3], location: "Texas", session: "Summer 2023", added: "Feb 28" },
  { company: "Autodesk", role: roleLinks[4], location: "Remote", session: "Summer 2023", added: "Feb 28" },
  { company: "HP", role: roleLinks[5], location: "Texas", session: "Summer 2023", added: "Feb 28" },
  { company: "Samsung", role: roleLinks[6], location: "Mountain View", session: "Summer 2023", added: "Feb 28" },
  { company: "Spotify", role: roleLinks[7], location: "New York, Remote", session: "Summer 2023", added: "Feb 28" },
  { company: "Atlassian", role: roleLinks[8], location: "Remote, USA", session: "Summer 2023", added: "Feb 28" },
  { company: "Cadent", role: roleLinks[9], location: "New York", session: "Summer 2023", added: "Feb 28" },
  { company: "Uber", role: roleLinks[10], location: "San Francisco", session: "Summer 2023", added: "Feb 28" },
  { company: "Navan", role: roleLinks[11], location: "Palo Alto", session: "Summer 2023", added: "Feb 28" },
  { company: "Sezzle", role: roleLinks[12], location: "Remote", session: "Summer 2023", added: "Feb 28" },
  { company: "Yahoo", role: roleLinks[13], location: "Remote", session: "Summer 2023", added: "Feb 28" },
];

export default function JobsOpportunities({ show }) {
  return (
    <>
      <div className="pm-jobs-table">
        <Container className="header-container px-5">
          <Row className="table-headers mobile-hide">
            <Col className="mobile-hide">Company</Col>
            <Col xs={6} md={4} className="mobile-hide">
              Role
            </Col>
            <Col className="mobile-hide">Location</Col>
            <Col className="mobile-hide">Session</Col>
            <Col className="mobile-hide">Added</Col>
          </Row>
          <Row className="table-headers mobile-show">
            <Col className="mobile-show">Open Roles (Summer 2023)</Col>
          </Row>
        </Container>
        <Container className="body-container pb-4 px-5">
          {pmJobsList.map((item, index) => (
            <Row className="table-items" key={index}>
              <Col>{item.company}</Col>
              <Col xs={6} md={4} className="table-link">
                {item.role}
              </Col>
              <Col className="mobile-hide">{item.location}</Col>
              <Col className="mobile-hide">{item.session}</Col>
              <Col className="mobile-hide">{item.added}</Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
}
// export default function JobsOpportunities({ show }) {
//   return (
//     <>
//       <div className="pm-jobs-table">
//         <Container className="header-container px-5">
//           <Row className="table-headers">
//             <Col xs={12} sm={6} md={2}>
//               Company
//             </Col>
//             <Col xs={12} sm={6} md={4}>
//               Role
//             </Col>
//             <Col className="mobile-hide" md={2}>
//               Location
//             </Col>
//             <Col className="mobile-hide" md={2}>
//               Session
//             </Col>
//             <Col className="mobile-hide" md={2}>
//               Added
//             </Col>
//           </Row>
//         </Container>
//         <Container className="body-container pb-4 px-5">
//           {pmJobsList.map((item, index) => (
//             <Row className="table-items" key={index}>
//               <Col xs={12} sm={6} md={2}>
//                 {item.company}
//               </Col>
//               <Col xs={12} sm={6} md={4}>
//                 {item.role}
//               </Col>
//               <Col className="mobile-hide" md={2}>
//                 {item.location}
//               </Col>
//               <Col className="mobile-hide" md={2}>
//                 {item.session}
//               </Col>
//               <Col className="mobile-hide" md={2}>
//                 {item.added}
//               </Col>
//             </Row>
//           ))}
//         </Container>
//       </div>
//     </>
//   );
// }
