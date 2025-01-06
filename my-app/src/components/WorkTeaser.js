import React from "react";
import { Link } from "react-router-dom";

// Import project preview images
import Project1Preview from "../Images/Project1Preview.jpg";
import Project2Preview from "../Images/Project2Preview.jpg";

const WorkTeaser = () => {
  const projects = [
    {
      title: "Project 1",
      path: "/Project1",
      image: Project1Preview,
    },
    {
      title: "Project 2",
      path: "/Project2",
      image: Project2Preview,
    },
  ];

  return (
    <div
      id="work"
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(to right, #2c4875, #00202e)",
        color: "#fff",
        textAlign: "center",
        borderRadius: "20px",
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
        margin: "2rem 1rem",
        transform: "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.4)";
      }}
    >
      {/* Clickable Title */}
      <Link to="/work" style={{ textDecoration: "none", color: "inherit" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            transition: "text-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.textShadow = "0 0 10px white";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.textShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
          }}
        >
          Our Work
        </h2>
      </Link>

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
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              height: "350px",
              background: "linear-gradient(to bottom, #ffd380, #ffa600)",
              borderRadius: "12px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#00202e",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              padding: "1rem",
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
            <h3 style={{ marginBottom: "1rem" }}>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "150px",
                borderRadius: "8px",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
            />
            <Link
              to={project.path}
              style={{
                textDecoration: "none",
                background: "#ff6f61",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "1rem",
                transition: "background 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.boxShadow = "0 0 10px white";
              }}
              onMouseOut={(e) => {
                e.target.style.boxShadow = "none";
              }}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkTeaser;
