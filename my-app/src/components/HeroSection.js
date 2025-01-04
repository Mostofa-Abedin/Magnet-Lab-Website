import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source src="/Bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          color: "#fff",
          padding: "0 2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          The Art of Digital Attraction
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginTop: "1rem",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          We craft solutions that attract, engage, and convert.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
