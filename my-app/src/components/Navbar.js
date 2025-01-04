import React from "react";
import { Link } from "react-router-dom";
import magnetLogo from "../Images/magnet_bg_removed.png"; // Adjust the path based on your logo location

const Navbar = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6))",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        color: "#fff",
        borderRadius: "0 0 8px 8px",
        boxSizing: "border-box",
      }}
    >
      {/* Logo and Name */}
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}
      >
        <img
          src={magnetLogo}
          alt="Magnet Logo"
          style={{
            width: "60px",
            height: "60px",
            marginRight: "0.8rem",
            objectFit: "contain",
            transition: "transform 0.3s ease, filter 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.2) rotate(15deg)";
            e.target.style.filter = "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1) rotate(0deg)";
            e.target.style.filter = "none";
          }}
        />
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1.2rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Magnet Labs™
        </span>
      </Link>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link
          to="/services"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "500",
            fontFamily: "'Poppins', sans-serif",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#FF7F50")}
          onMouseOut={(e) => (e.target.style.color = "#fff")}
        >
          Our Services
        </Link>
        <Link
          to="/work"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "500",
            fontFamily: "'Poppins', sans-serif",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#FF7F50")}
          onMouseOut={(e) => (e.target.style.color = "#fff")}
        >
          Our Work
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "500",
            fontFamily: "'Poppins', sans-serif",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#FF7F50")}
          onMouseOut={(e) => (e.target.style.color = "#fff")}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
