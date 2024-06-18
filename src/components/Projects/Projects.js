import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Careclub from "../../Assets/Projects/Careclub.png";
import Banking from "../../Assets/Projects/Banking.png";
import friendsAPP from "../../Assets/Projects/friendsAPP.png";
import Travel from "../../Assets/Projects/Travel.png";
import KartOn from "../../Assets/Projects/KartOn.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={friendsAPP}
              isBlog={false}
              title="Friends-App"
              description="It is a Personal Chat Room or Workusing space to share resources and hangout with friends which I develop using react.js and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/imrohitkr/friends-app"
              demoLink="https://radiant-pika-105ad2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KartOn}
              isBlog={false}
              title="Kart-On"
              description="It is a full-stack e-commerce website which i design and develop using HTML, CSS, PHP, and MySQL/SQL, integrating seamless user experience features such as user authentication and cart functionality. Additionally, I implemented an intuitive admin panel enabling sellers to efficiently manage products and track customer activities. This project showcases my proficiency in web development and my ability to create impactful solutions to meet diverse business needs."
              ghLink="https://github.com/imrohitkr/Kart-On"
              // demoLink="https://github.com/imrohitkr/Kart-On"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Banking}
              isBlog={false}
              title="Simple Banking System"
              description="It is a banking system which i develop using Java, allowing users to seamlessly manage their accounts. Leveraging Java's versatility and my proficiency in backend development, I implemented key features such as fund deposit, withdrawal, balance inquiry, and PIN change functionality. This project highlights my expertise in Java programming and my ability to deliver secure and user-friendly financial solutions"
              ghLink="https://github.com/imrohitkr/Simple_Banking_System"
              // demoLink="https://github.com/imrohitkr/Simple_Banking_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Careclub}
              isBlog={false}
              title="Care Club"
              description="I developed a dynamic website for Care Club, an NGO, integrating seamless and secure payment gateways using HTML, CSS, and JavaScript. Leveraging Razorpay, I ensured smooth transactions for donors, enhancing user experience and trust. This project showcases my proficiency in front-end development and my commitment to leveraging technology for social impact."
              ghLink="https://github.com/imrohitkr/Care_Club"
              demoLink="https://coruscating-moonbeam-c9c0a0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Travel}
              isBlog={false}
              title="Traveler's Paradise"
              description="I develop a captivating landing page for a travel website using HTML, CSS, and JavaScript. Through creative design and responsive layout, I aimed to entice visitors and spark their wanderlust. This project demonstrates my expertise in front-end development and my ability to create engaging user experiences."
              ghLink="https://github.com/imrohitkr/Txon_task/tree/master/TXON_01"
              demoLink="https://dashing-halva-47c61a.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
