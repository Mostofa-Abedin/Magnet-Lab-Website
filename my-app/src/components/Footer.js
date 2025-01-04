import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <p>© 2025 Magnet Labs. All rights reserved.</p>
      <div style={{ marginTop: "0.5rem" }}>
        <a href="#" style={{ margin: "0 0.5rem", color: "#fff" }}>
          Facebook
        </a>
        <a href="#" style={{ margin: "0 0.5rem", color: "#fff" }}>
          Instagram
        </a>
        <a href="#" style={{ margin: "0 0.5rem", color: "#fff" }}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
