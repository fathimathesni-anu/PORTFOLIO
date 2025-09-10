import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`d-flex align-items-center ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{ minHeight: "90vh" }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Profile Photo */}
          <Col md={4} className="mb-4 mb-md-0 d-flex justify-content-center">
            <Image
              src="profile.png"
              alt="Fathima Thesni P.A"
              roundedCircle
              fluid
              style={{ width: "220px", height: "220px", objectFit: "cover" }}
            />
          </Col>

          {/* Text Content */}
          <Col md={8}>
            <h1 className="fw-bold">Hi, I'm Fathima Thesni P.A</h1>
            <h3 className="mb-3">Full Stack Web Developer (Entry Level)</h3>
            <p className="mb-4">
              Building responsive and scalable web applications using the{" "}
              <strong>MERN Stack</strong>.
            </p>

            {/* Contact Info */}
            <div className="mb-4">
              <p className="mb-2">
                <strong>📞 Phone:</strong> 8330041722
              </p>
              <p className="mb-0">
                <strong>🏡 Address:</strong> Thrissur, Kerala
              </p>
            </div>

            <div>
              <Button
                variant={darkMode ? "light" : "dark"}
                href="/projects"
                className="me-2 mb-2 px-4 py-2 rounded-pill shadow-sm custom-btn"
              >
                View My Work
              </Button>
              <Button
                variant={darkMode ? "outline-light" : "outline-dark"}
                href="/resume"
                className="mb-2 px-4 py-2 rounded-pill shadow-sm custom-btn"
              >
                Hire Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Extra styles for hover effects */}
      <style>
        {`
          .custom-btn {
            transition: all 0.3s ease-in-out;
          }
          .custom-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </section>
  );
}



