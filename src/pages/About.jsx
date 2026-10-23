import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>About Me</h2>
          <p>
            Aspiring Full Stack Web Developer with a BCA degree and MERN Stack training.
            Skilled in building responsive applications with React, Node.js, Express.js, and MongoDB.
            Passionate about problem-solving, teamwork, and continuous learning.
          </p>
        </Col>
        <Col md={6}>
          <h3>Tech Stack</h3>
          <p>
            <strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS <br />
            <strong>Backend:</strong> Node.js, Express.js, RESTful APIs <br />
            <strong>Database:</strong> MongoDB, Mongoose, Firebase <br />
            <strong>Tools:</strong> Git, GitHub, Postman, VS Code
          </p>
        </Col>
      </Row>
    </Container>
  );
}

