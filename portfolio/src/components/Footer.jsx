import React from "react";
import { Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-3 mt-5 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <Container className="text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} Fathima Thesni P.A | Full Stack Developer
        </p>
      </Container>
    </footer>
  );
}

