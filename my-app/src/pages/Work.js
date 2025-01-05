import React from "react";
import { Link } from "react-router-dom";

// Import project preview images
import Project1Preview from "../Images/Project1Preview.jpg";
import Project2Preview from "../Images/Project2Preview.jpg";
import Project3Preview from "../Images/Project3Preview.jpg";
import Project4Preview from "../Images/Project4Preview.jpg";
import Project5Preview from "../Images/Project5Preview.jpg";
import Project6Preview from "../Images/Project6Preview.jpg";

const Work = () => {
  const projects = [
    {
      title: "Project Title 1",
      description: "A brief description of this project.",
      link: "/Project1",
      image: Project1Preview,
    },
    {
      title: "Project Title 2",
      description: "Another project showcasing our expertise.",
      link: "/Project2",
      image: Project2Preview,
    },
    {
      title: "Project Title 3",
      description: "Discover the innovative solutions we deliver.",
      link: "/Project3",
      image: Project3Preview,
    },
    {
      title: "Project Title 4",
      description: "Explore how we turn ideas into success.",
      link: "/Project4",
      image: Project4Preview,
    },
    {
      title: "Project Title 5",
      description: "A remarkable project crafted with precision.",
      link: "/Project5",
      image: Project5Preview,
    },
    {
      title: "Project Title 6",
      description: "Elevating brands through creativity and strategy.",
      link: "/Project6",
      image: Project6Preview,
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Introductory Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "linear-gradient(to right, rgba(31, 31, 31, 0.8), rgba(51, 51, 51, 0.8))",
          backdropFilter: "blur(10px)",
          color: "#fff",
          borderRadius: "0 0 20px 20px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          Our Work Speaks for Itself
        </h1>
        <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          Explore the projects that showcase our expertise and creativity.
        </p>
      </section>

      {/* Project Grid Section */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          padding: "4rem 2rem",
          background: "linear-gradient(to bottom, rgba(255, 99, 97, 0.2), rgba(255, 214, 128, 0.2))",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(238, 238, 238, 0.8))",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              borderRadius: "12px",
              padding: "1.5rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#00202e" }}>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "8px",
                objectFit: "cover",
                margin: "1rem 0",
              }}
            />
            <p style={{ fontSize: "1rem", margin: "1rem 0", color: "#333" }}>{project.description}</p>
            <Link
              to={project.link}
              style={{
                marginTop: "auto",
                padding: "0.75rem 1.5rem",
                background: "#ff6f61",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.background = "#e85b50")}
              onMouseOut={(e) => (e.target.style.background = "#ff6f61")}
            >
              Learn More
            </Link>
          </div>
        ))}
      </section>

      {/* Call-to-Action Section */}
      <section
        style={{
          padding: "2rem",
          textAlign: "center",
          background: "linear-gradient(to right, rgba(31, 31, 31, 0.8), rgba(51, 51, 51, 0.8))",
          backdropFilter: "blur(10px)",
          color: "#fff",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
          margin: "2rem 1rem",
        }}
      >
        <h2>Have a Vision? Let’s Make It Happen</h2>
        <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          Contact Magnet Labs to bring your ideas to life.
        </p>
        <Link
          to="/contact"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            background: "#ff6f61",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#e85b50")}
          onMouseOut={(e) => (e.target.style.background = "#ff6f61")}
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Work;
