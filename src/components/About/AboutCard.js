import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            👋 Hi Everyone, I am <span className="purple">Rohit Kumar </span>
            from <span className="purple"> Patna, India.</span>
            <br />
            I have completed my Bachelor of Engineering degree from the NMAM
            Institute of Technology, Karnataka, India with a major in
            information technology in 2024.
            <br />
            I have completed my HSC from Blue Bells Academy, Bihar in 2020.
            <br />
            I have completed my SSC from Gyan Niketan, Bihar in 2018.
            <br />
            <br />
            Hobbies & Interests
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dream big, but build bigger. Your creations have the potential to
            change lives and make the world a better place."{" "}
          </p>
          <footer className="blockquote-footer">Rohit Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
