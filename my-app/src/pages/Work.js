import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Work = () => {
  const projects = [
    { title: "Project Title 1", description: "A brief description of this project.", link: "/projects/project-title-1" },
    { title: "Project Title 2", description: "Another project showcasing our expertise.", link: "/projects/project-title-2" },
    { title: "Project Title 3", description: "Discover the innovative solutions we deliver.", link: "/projects/project-title-3" },
    { title: "Project Title 4", description: "Explore how we turn ideas into success.", link: "/projects/project-title-4" },
    { title: "Project Title 5", description: "A remarkable project crafted with precision.", link: "/projects/project-title-5" },
    { title: "Project Title 6", description: "Elevating brands through creativity and strategy.", link: "/projects/project-title-6" },
  ];

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
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Our Work Speaks for Itself</h1>
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
          background: "#f9f9f9",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(to bottom right, #fff, #eee)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              padding: "1.5rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{project.title}</h3>
            <p style={{ fontSize: "1rem", margin: "1rem 0" }}>{project.description}</p>
            <a
              href={project.link}
              style={{
                marginTop: "auto",
                padding: "0.75rem 1.5rem",
                background: "#ff6f61",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.background = "#e85b50")}
              onMouseOut={(e) => (e.target.style.background = "#ff6f61")}
            >
              Learn More
            </a>
          </div>
        ))}
      </section>

      {/* Call-to-Action Section */}
      <section
        style={{
          padding: "2rem",
          textAlign: "center",
          background: "linear-gradient(to right, #1f1f1f, #333)",
          color: "#fff",
        }}
      >
        <h2>Have a Vision? Let’s Make It Happen</h2>
        <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          Contact Magnet Labs to bring your ideas to life.
        </p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            background: "#ff6f61",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#e85b50")}
          onMouseOut={(e) => (e.target.style.background = "#ff6f61")}
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Work;
