import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#333",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        color: "#fff",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Magnet Labs</div>
      <div>
        <a href="#services" style={{ margin: "0 1rem", color: "#fff" }}>
          Our Services
        </a>
        <a href="#work" style={{ margin: "0 1rem", color: "#fff" }}>
          Our Work
        </a>
        <a href="#contact" style={{ margin: "0 1rem", color: "#fff" }}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
