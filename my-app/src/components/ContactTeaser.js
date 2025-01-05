import React from "react";
import { useNavigate } from "react-router-dom";

const ContactTeaser = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div
      id="contact"
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(to right, rgba(0, 32, 46, 0.5), rgba(138, 80, 143, 0.5))",
        backdropFilter: "blur(15px)", // Adds frosted glass effect
        color: "#fff",
        textAlign: "center",
        borderRadius: "20px",
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
        margin: "2rem 1rem",
        transform: "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.4)";
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "1rem",
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        Get in Touch
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.8",
          marginBottom: "2rem",
          color: "#ffd380",
        }}
      >
        Have a question? Ready to start a project? Let's connect!
      </p>
      <button
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#ffa600",
          color: "#00202e",
          border: "none",
          borderRadius: "12px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          transition: "transform 0.3s ease, background-color 0.3s ease",
        }}
        onClick={() => navigate("/contact")}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.backgroundColor = "#ff8531";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.backgroundColor = "#ffa600";
        }}
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactTeaser;
