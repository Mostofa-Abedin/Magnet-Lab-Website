import React from "react";

const ServicesTeaser = () => {
  return (
    <div
      id="services"
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(to right, rgba(44, 72, 117, 0.7), rgba(0, 32, 46, 0.7))",
        backdropFilter: "blur(10px)", // Frosted glass effect
        color: "#fff",
        textAlign: "center",
        borderRadius: "20px", // Rounded borders for the container
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)", // Enhanced floating effect
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
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        Our Services
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.8",
          marginBottom: "2rem",
        }}
      >
        We provide cutting-edge digital solutions to help your business grow.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Example Service Cards */}
        {[{ title: "Web Development", icon: "💻" }, { title: "SEO", icon: "📈" }, { title: "Social Media Marketing", icon: "📱" }].map((service, index) => (
          <div
            key={index}
            style={{
              width: "180px",
              height: "180px",
              background: "linear-gradient(to bottom, rgba(255, 99, 97, 0.8), rgba(255, 133, 49, 0.8))",
              borderRadius: "12px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Shadow for cards
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#00202e",
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
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{service.icon}</div>
            {service.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTeaser;
