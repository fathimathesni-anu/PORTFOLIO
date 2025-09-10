import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function PortfolioNavbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Fathima Thesni P.A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/certifications">Certifications</Nav.Link>
            <Nav.Link as={Link} to="/education">Education</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Button
            onClick={toggleTheme}
            variant={darkMode ? "outline-light" : "outline-dark"}
            className="ms-3"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

