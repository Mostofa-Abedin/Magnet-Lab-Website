import React from "react";

const ServicesTeaser = () => {
  return (
    <div
      id="services"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Our Services
      </h2>
      <p style={{ fontSize: "1rem", color: "#555", marginBottom: "2rem" }}>
        We provide cutting-edge digital solutions to help your business grow.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {/* Example Service Cards */}
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Web Development
        </div>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          SEO
        </div>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Social Media Marketing
        </div>
      </div>
    </div>
  );
};

export default ServicesTeaser;
