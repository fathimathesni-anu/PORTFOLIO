import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function Certifications() {
  const { darkMode } = useTheme();

  const certifications = [
    {
      title: "Full Stack Web Development (MERN)",
      issuer: "Illinois Tech US",
      date: "07/2025",
      details: "Hands-on, project-based MERN stack training with deployment, API integration, and scalability."
    },
    {
      title: "Full Stack Web Development (MERN)",
      issuer: "Entri Elevate",
      date: "07/2025",
      details: "Practical MERN stack program covering CRUD operations, REST APIs, and responsive UI/UX design."
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Certifications</h2>
      <Row>
        {certifications.map((cert, idx) => (
          <Col md={6} key={idx}>
            <Card className="mb-4 shadow-sm" bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"}>
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {cert.issuer} | {cert.date}
                </Card.Subtitle>
                <Card.Text>{cert.details}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

