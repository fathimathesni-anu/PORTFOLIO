
import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";
import resumeFile from "../assets/fathima thesni p.a- resume - fsd (4).pdf"; // ✅ import your file

export default function Resume() {
  const { darkMode } = useTheme();
  const resumeLink = resumeFile; // ✅ use the imported file

  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">My Resume</h2>
      <Card
        className="shadow-sm p-3"
        bg={darkMode ? "dark" : "light"}
        text={darkMode ? "light" : "dark"}
      >
        <Card.Body>
          <iframe
            src={resumeLink}
            title="Resume"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
          <div className="mt-3">
            <Button variant={darkMode ? "light" : "dark"} href={resumeLink} download>
              Download Resume
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
} 



