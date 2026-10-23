import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: "HomelyCare Dashboard",
      desc: "Role-based healthcare management system with authentication, dashboards, and CRUD modules.",
      img: "/project3.png",
      demo: "https://homelycaredashboard.vercel.app/",
      code: "https://github.com/fathimathesni-anu/HOMELYCAREDASHBOARD"
    },
    {
      title: "Kerala Tour Online",
      desc: "Travel booking website with carousel, booking system, and smooth navigation.",
      img: "/project1.png",
      demo: "https://fathimathesni-anu.github.io/14_React_Bootstrap_Assignment_1/",
      code: "https://github.com/fathimathesni-anu/14_React_Bootstrap_Assignment_1"
    },
    {
      title: "E-Commerce Web Application",
      desc: "React.js-based shopping site with product listing, search, and cart features.",
      img: "/project2.png",
      demo: "https://fathimathesni-anu.github.io/Module3-REACT-Application/",
      code: "https://github.com/fathimathesni-anu/Module3-REACT-Application"
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((proj, idx) => (
          <Col md={4} key={idx}>
            <Card className="mb-4 shadow-sm" bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"}>
              <Card.Img variant="top" src={proj.img} />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
                <Button variant={darkMode ? "light" : "dark"} href={proj.demo} target="_blank" className="me-2">
                  Demo
                </Button>
                <Button variant={darkMode ? "outline-light" : "outline-dark"} href={proj.code} target="_blank">
                  Code
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

