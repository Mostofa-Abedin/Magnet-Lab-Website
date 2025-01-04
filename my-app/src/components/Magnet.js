import React from "react";
import magnetImage from "../Images/magnet_bg_removed.png";

const Magnet = React.forwardRef(({ onClick }, ref) => {
  return (
    <div
      ref={ref}
      onClick={onClick} // Handle click event
      style={{
        position: "fixed",
        left: "30px", // Adjusted to center the larger image better
        top: "50%",
        transform: "translateY(-50%)",
        width: "120px", // Increased size
        height: "120px", // Increased size
        zIndex: 5, // Ensure it appears above other elements
        cursor: "pointer",
        animation: "pulseHeat 3s infinite", // Slower pulsation with heat effect
        transition: "transform 0.3s ease, filter 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.2) rotate(-5deg)"; // Scale and rotate on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1) rotate(0)"; // Reset transformation
      }}
    >
      <img
        src={magnetImage}
        alt="Magnet"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain", // Prevents cutting off parts of the image
          filter: "brightness(1)", // Default brightness
        }}
      />
    </div>
  );
});

export default Magnet;
