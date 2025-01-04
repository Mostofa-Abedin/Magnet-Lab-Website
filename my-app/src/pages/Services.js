import React from "react";
import { Link } from "react-router-dom";
import webImage from "../Images/stock-web-development.jpg";
import seoImage from "../Images/stock-seo.jpg";
import socialMediaImage from "../Images/stock-social-media.jpg";

const Services = () => {
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
          background: "linear-gradient(120deg, #1e1e2f, #2e2e48)",
          padding: "4rem 2rem",
          color: "#fff",
          textAlign: "center",
          borderRadius: "0 0 20px 20px",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            textShadow: "0 4px 8px rgba(0,0,0,0.5)",
          }}
        >
          Our Expertise, Your Advantage
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          From cutting-edge web development to impactful marketing strategies,
          we deliver solutions that help your business stand out.
        </p>
      </section>

      {/* Service Sections */}
      {[
        {
          title: "Custom Web Development",
          description:
            "We create responsive, visually stunning, and functional websites tailored to your brand.",
          points: [
            "Mobile-friendly design",
            "SEO-optimized structure",
            "Custom integrations (e.g., e-commerce, CRM tools)",
          ],
          img: webImage,
          bg: "#ffffff",
        },
        {
          title: "SEO That Drives Results",
          description:
            "Boost your online visibility with tailored strategies that get your business noticed.",
          points: [
            { icon: "🔍", text: "Keyword research and optimization" },
            { icon: "📄", text: "On-page and off-page SEO" },
            { icon: "📈", text: "Monthly performance reporting" },
          ],
          img: seoImage,
          bg: "#f8f8f8",
        },
        {
          title: "Social Media Marketing That Engages",
          description:
            "Create a strong social presence with campaigns that captivate your audience.",
          points: [
            "Platform-specific strategies (e.g., Instagram, LinkedIn, Facebook)",
            "Professional content creation and curation",
            "Analytics and performance tracking to measure success",
          ],
          img: socialMediaImage,
          bg: "#ffffff",
        },
      ].map((service, index) => (
        <section
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4rem 2rem",
            background: service.bg,
            flexWrap: "wrap",
            borderRadius: "12px",
            margin: "2rem 1rem",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              marginRight: index % 2 === 1 ? "2rem" : "0",
              marginLeft: index % 2 === 0 ? "2rem" : "0",
              textAlign: "left", // Ensure text alignment is left
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#333",
                textShadow: "0 3px 6px rgba(0,0,0,0.1)",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#555",
                marginBottom: "1.5rem",
                lineHeight: "1.8",
              }}
            >
              {service.description}
            </p>
            {service.title === "SEO That Drives Results" ? (
              <ul
                style={{
                  marginTop: "1rem",
                  paddingLeft: "0",
                  color: "#555",
                  lineHeight: "1.8",
                  listStyleType: "none",
                }}
              >
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      {point.icon}
                    </span>
                    {point.text}
                  </li>
                ))}
              </ul>
            ) : (
              <ul
                style={{
                  marginTop: "1rem",
                  color: "#555",
                  lineHeight: "1.8",
                  listStyleType: "disc",
                  paddingLeft: "1rem",
                }}
              >
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <img
              src={service.img}
              alt={service.title}
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </section>
      ))}

      {/* Call-to-Action Section */}
      <section
        style={{
          background: "linear-gradient(120deg, #1e1e2f, #2e2e48)",
          padding: "3rem 2rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Ready to Elevate Your Business?
        </h2>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            padding: "1rem 2rem",
            fontSize: "1.25rem",
            background: "#ff6f61",
            color: "#fff",
            borderRadius: "8px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ff8563")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6f61")}
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Services;
