import React from "react";

const WorkTeaser = () => {
  return (
    <div
      id="work"
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(to right, #8a508f, #00202e)",
        color: "#fff",
        textAlign: "center",
        borderRadius: "20px", // Rounded borders for the container
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)", // Enhanced shadow for floating effect
        margin: "2rem 1rem", // Space around the container
        transform: "translateY(0)", // Ensure initial position
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover animation
        cursor: "default",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)"; // Lift on hover
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)"; // Return to normal
        e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.4)";
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "1rem",
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        Our Work
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.8",
          marginBottom: "2rem",
          color: "white",
        }}
      >
        Take a look at some of our most exciting projects and case studies.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Example Project Cards */}
        {["Project 1", "Project 2", "Project 3"].map((project, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              height: "200px",
              background: "linear-gradient(to bottom, #ffd380, #ffa600)",
              borderRadius: "12px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 1)", // Shadow for cards
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#00202e",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
            }}
          >
            {project}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTeaser;
