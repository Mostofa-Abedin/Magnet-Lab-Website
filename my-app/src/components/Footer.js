import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(to right, #00202e, #003f5c)",
        color: "#fff",
        textAlign: "center",
        padding: "2rem 1rem",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <p
        style={{
          marginBottom: "1rem",
          fontSize: "1rem",
          letterSpacing: "0.5px",
        }}
      >
        © 2025 Magnet Labs. All rights reserved.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <a
          href="#"
          aria-label="Facebook"
          style={{
            color: "#1877f2", // Official Facebook blue
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.opacity = "0.8";
            e.target.style.transform = "scale(1.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = "1";
            e.target.style.transform = "scale(1)";
          }}
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          style={{
            color: "#e1306c", // Official Instagram pink
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.opacity = "0.8";
            e.target.style.transform = "scale(1.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = "1";
            e.target.style.transform = "scale(1)";
          }}
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          style={{
            color: "white", // Official LinkedIn blue
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.opacity = "0.8";
            e.target.style.transform = "scale(1.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.opacity = "1";
            e.target.style.transform = "scale(1)";
          }}
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
