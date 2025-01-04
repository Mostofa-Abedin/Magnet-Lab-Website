import React from "react";
import magnetLogo from "../Images/magnet_bg_removed.png"; // Adjust the path based on where your logo is stored

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
      {/* Logo and Name */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={magnetLogo}
          alt="Magnet Logo"
          style={{
            width: "40px",
            height: "40px",
            marginRight: "0.5rem",
            objectFit: "contain",
          }}
        />
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Magnet Labs
        </span>
      </div>

      {/* Navigation Links */}
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
