import React from "react";

const ContactTeaser = () => {
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
        }}
        onClick={() => (window.location.href = "/contact-us")}
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactTeaser;
