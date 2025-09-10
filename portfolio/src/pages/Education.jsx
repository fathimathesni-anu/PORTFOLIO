import React from "react";
import { Container, Card } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function Education() {
  const { darkMode } = useTheme();

  const education = {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "University of Calicut",
    college: "Sree Narayana Guru College of Advanced Studies, Nattika, Kerala",
    duration: "07/2017 – 05/2020",
    details: "Focused on software development, database management, and programming fundamentals."
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Education</h2>
      <Card className="shadow-sm p-3" bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"}>
        <Card.Body>
          <Card.Title>{education.degree}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {education.university} | {education.duration}
          </Card.Subtitle>
          <Card.Text>
            <strong>College:</strong> {education.college}
            <br />
            {education.details}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

