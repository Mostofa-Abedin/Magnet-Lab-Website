import React from "react";

const Services = () => {
  return (
    <div>
      {/* Introductory Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "linear-gradient(to right, #1f1f1f, #333)",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Our Expertise, Your Advantage
        </h1>
        <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          Explore our range of services designed to elevate your business.
        </p>
      </section>

      {/* Web Development Section */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4rem 2rem",
          background: "#f9f9f9",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", marginRight: "2rem", minWidth: "300px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Custom Web Development
          </h2>
          <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
            We create responsive, visually stunning, and functional websites
            tailored to your brand.
          </p>
          <ul style={{ marginTop: "1rem" }}>
            <li>Mobile-friendly design.</li>
            <li>SEO-optimized structure.</li>
            <li>Custom integrations (e.g., e-commerce, CRM tools).</li>
          </ul>
        </div>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src="/Images/web-development.jpg"
            alt="Web Development"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
      </section>

      {/* SEO Section */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4rem 2rem",
          background: "#fff",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", marginRight: "2rem", minWidth: "300px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            SEO That Drives Results
          </h2>
          <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
            Boost your online visibility with tailored strategies that get your
            business noticed.
          </p>
          <ul style={{ marginTop: "1rem" }}>
            <li>Keyword research and optimization.</li>
            <li>On-page and off-page SEO.</li>
            <li>Monthly performance reporting with actionable insights.</li>
          </ul>
        </div>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src="/Images/seo-results.jpg"
            alt="SEO"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
      </section>

      {/* Social Media Marketing Section */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4rem 2rem",
          background: "#f9f9f9",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", marginRight: "2rem", minWidth: "300px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Social Media Marketing That Engages
          </h2>
          <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
            Create a strong social presence with campaigns that captivate your
            audience.
          </p>
          <ul style={{ marginTop: "1rem" }}>
            <li>Platform-specific strategies (e.g., Instagram, LinkedIn, Facebook).</li>
            <li>Professional content creation and curation.</li>
            <li>Analytics and performance tracking to measure success.</li>
          </ul>
        </div>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src="/Images/social-media.jpg"
            alt="Social Media Marketing"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
      </section>

      {/* Packages Section */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "linear-gradient(to right, #1f1f1f, #333)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Tailored Packages for Every Business
        </h2>
        <p style={{ marginTop: "1rem", fontSize: "1.25rem" }}>
          Choose from flexible packages combining our core services to suit
          your needs.
        </p>
        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{ margin: "0.5rem", padding: "2rem", background: "#444", borderRadius: "10px", color: "#fff" }}>
            <h3>Starter Package</h3>
            <p>Web Development + Basic SEO</p>
          </div>
          <div style={{ margin: "0.5rem", padding: "2rem", background: "#555", borderRadius: "10px", color: "#fff" }}>
            <h3>Growth Package</h3>
            <p>Web Development + SEO + Social Media Marketing</p>
          </div>
          <div style={{ margin: "0.5rem", padding: "2rem", background: "#666", borderRadius: "10px", color: "#fff" }}>
            <h3>Custom Package</h3>
            <p>Fully tailored to your business goals</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        style={{
          padding: "2rem",
          background: "linear-gradient(to right, #1f1f1f, #333)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h2>Let’s Build Something Great Together</h2>
        <p>Contact us today to get started.</p>
        <button
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#ff6f61",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Services;
