import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src="https://www.videvo.net/videvo_files/converted/2016_11/preview/160706A_149.mp443195.mp4"
          type="video/mp4"
        />
      </video>
      <div style={{ textAlign: "center", padding: "0 2rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          The Art of Digital Attraction
        </h1>
        <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
          We craft solutions that attract, engage, and convert.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
