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
          background: "linear-gradient(120deg, rgba(30, 30, 47, 0.7), rgba(46, 46, 72, 0.7))",
          backdropFilter: "blur(10px)",
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
          From cutting-edge web development to impactful marketing strategies, we deliver solutions that help your business stand out.
        </p>
      </section>

      {/* Service Sections */}
      {[
        {
          title: "Custom Web Development",
          description: "We create responsive, visually stunning, and functional websites tailored to your brand.",
          points: ["Mobile-friendly design", "SEO-optimized structure", "Custom integrations (e.g., e-commerce, CRM tools)"],
          img: webImage,
          bg: "rgba(44, 72, 117, 0.7)",
        },
        {
          title: "SEO That Drives Results",
          description: "Boost your online visibility with tailored strategies that get your business noticed.",
          points: [
            { icon: "🔍", text: "Keyword research and optimization" },
            { icon: "📄", text: "On-page and off-page SEO" },
            { icon: "📈", text: "Monthly performance reporting" },
          ],
          img: seoImage,
          bg: "rgba(0, 32, 46, 0.7)",
        },
        {
          title: "Social Media Marketing That Engages",
          description: "Create a strong social presence with campaigns that captivate your audience.",
          points: [
            "Platform-specific strategies (e.g., Instagram, LinkedIn, Facebook)",
            "Professional content creation and curation",
            "Analytics and performance tracking to measure success",
          ],
          img: socialMediaImage,
          bg: "rgba(139, 80, 143, 0.7)",
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
            backdropFilter: "blur(10px)",
            flexWrap: "wrap",
            borderRadius: "12px",
            margin: "2rem 1rem",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              marginRight: index % 2 === 1 ? "2rem" : "0",
              marginLeft: index % 2 === 0 ? "2rem" : "0",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#fff",
                textShadow: "0 3px 6px rgba(0,0,0,0.2)",
              }}
            >
              {service.title}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#fff",
                marginBottom: "1.5rem",
                lineHeight: "1.8",
              }}
            >
              {service.description}
            </p>
            <ul
              style={{
                marginTop: "1rem",
                color: "#fff",
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
                  {point.icon ? (
                    <>
                      <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>{point.icon}</span>
                      {point.text}
                    </>
                  ) : (
                    point
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <img
              src={service.img}
              alt={service.title}
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </section>
      ))}

      {/* Packages Section */}
        <section
          style={{
            padding: "4rem 2rem",
            background: "linear-gradient(120deg, rgba(255, 99, 97, 0.7), rgba(255, 214, 128, 0.7))",
            color: "#fff",
            textAlign: "center",
            borderRadius: "12px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            margin: "2rem 1rem",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>
            Tailored Packages for Every Business
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Choose from flexible packages combining our core services to suit your needs.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                name: "Starter Package",
                features: ["Web Development", "Basic SEO"],
                icon: "🛠️", // Better icon for the Starter Package
                gradient: "linear-gradient(to right, #ff7f50, #ffb347)",
                price: "Contact Us for Pricing",
              },
              {
                name: "Growth Package",
                features: ["Web Development", "SEO", "Social Media Marketing"],
                icon: "📈", // Growth-related icon
                gradient: "linear-gradient(to right, #3a7bd5, #3a6073)",
                price: "Contact Us for Pricing",
              },
              {
                name: "Custom Package",
                features: ["Fully tailored to your business goals"],
                icon: "🎨", // Creative icon for custom design
                gradient: "linear-gradient(to right, #d53369, #daae51)",
                price: "Contact Us for Pricing",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                style={{
                  background: pkg.gradient,
                  color: "#fff",
                  borderRadius: "12px",
                  padding: "2rem",
                  textAlign: "left",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  {pkg.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                    textAlign: "center",
                    textShadow: "0 3px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  {pkg.name}
                </h3>
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: "0",
                    color: "#fff",
                    lineHeight: "1.8",
                  }}
                >
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "0.5rem",
                        fontSize: "1rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "8px",
                          height: "8px",
                          background: "#fff",
                          borderRadius: "50%",
                          marginRight: "0.5rem",
                        }}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "1rem",
                    background: "rgba(255,255,255,0.2)",
                    padding: "0.5rem",
                    borderRadius: "8px",
                  }}
                >
                  {pkg.price}
                </div>
              </div>
            ))}
          </div>
        </section>



      {/* Call-to-Action Section */}
      <section
        style={{
          background: "linear-gradient(120deg, rgba(30, 30, 47, 0.7), rgba(46, 46, 72, 0.7))",
          padding: "3rem 2rem",
          textAlign: "center",
          color: "#fff",
          borderRadius: "12px",
          boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
          margin: "2rem 1rem",
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
            boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
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
