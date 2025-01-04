import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Import the external CSS for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© 2025 Magnet Labs. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="#"
          className="social-icon facebook"
          aria-label="Facebook"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="#"
          className="social-icon instagram"
          aria-label="Instagram"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="#"
          className="social-icon linkedin"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
