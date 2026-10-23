import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { darkMode } = useTheme();
  const inputClass = darkMode ? "bg-dark text-light border-secondary" : "bg-light text-dark border-dark";

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Form className="w-75 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" className={inputClass} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your Email" className={inputClass} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your Message" className={inputClass} />
        </Form.Group>
        <Button variant={darkMode ? "light" : "dark"} type="submit">Send</Button>
      </Form>

      <div className="text-center mt-4">
        <a href="mailto:fathimathesni43@gmail.com" className="m-2"><FaEnvelope size={30} /></a>
        <a href="https://github.com/fathimathesni-anu" className="m-2"><FaGithub size={30} /></a>
        <a href="https://linkedin.com/in/fathima-thesni-1998anu" className="m-2"><FaLinkedin size={30} /></a>
      </div>
    </Container>
  );
}

