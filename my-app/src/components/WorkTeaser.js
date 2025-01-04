import React from "react";

const WorkTeaser = () => {
  return (
    <div
      id="work"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Our Work
      </h2>
      <p style={{ fontSize: "1rem", color: "#555", marginBottom: "2rem" }}>
        Take a look at some of our most exciting projects and case studies.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {/* Example Project Cards */}
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "#ddd",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Project 1
        </div>
        <div
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "#ddd",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Project 2
        </div>
      </div>
    </div>
  );
};

export default WorkTeaser;
