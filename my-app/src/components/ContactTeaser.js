import React from "react";
import { useNavigate } from "react-router-dom";

const ContactTeaser = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div
      id="contact"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Get in Touch
      </h2>
      <p style={{ fontSize: "1rem", color: "#ccc", marginBottom: "2rem" }}>
        Have a question? Ready to start a project? Let's connect!
      </p>
      <button
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          transition: "background-color 0.3s ease",
        }}
        onClick={() => navigate("/contact")}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactTeaser;
