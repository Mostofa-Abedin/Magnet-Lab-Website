import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      {/* Video Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        >
          <source src="/Bg_video.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, rgba(0,32,46,0.5), transparent)",
          }}
        ></div>

        {/* Shooting Stars */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${Math.random() * 80}%`, // Random starting position
              left: `${Math.random() * -50}%`, // Random starting position
              width: "2px",
              height: "2px",
              background: "white",
              boxShadow: "0 0 10px 2px white",
              borderRadius: "50%",
              animation: `shootingStar ${4 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              zIndex: 2,
            }}
          ></div>
        ))}
      </div>

      {/* Overlay Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.7)",
            color: "#ffd380",
            animation: "fadeIn 1.5s ease-in",
          }}
        >
          The Art of Digital Attraction
        </h1>
        <p
          style={{
            fontSize: "1.8rem",
            marginTop: "1.5rem",
            fontFamily: "'Montserrat', sans-serif",
            color: "#fff",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
            animation: "fadeIn 2s ease-in",
            lineHeight: "1.6",
          }}
        >
          We craft solutions that{" "}
          <span style={{ fontWeight: "bold", color: " #bb0a1e" }}>Attract</span>,{" "}
          <span style={{ fontWeight: "bold", color: "	#367588" }}>Engage</span>, &{" "}
          <span style={{ fontWeight: "bold", color: " #ffa600" }}>Convert</span>.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
