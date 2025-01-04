import React from "react";
import magnetImage from "../Images/magnet_bg_removed.png";

const Magnet = React.forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: "30px", // Adjusted to center the larger image better
        top: "50%",
        transform: "translateY(-50%)",
        width: "120px", // Increased size
        height: "120px", // Increased size
        zIndex: 5, // Ensure it appears above other elements
      }}
    >
      <img
        src={magnetImage}
        alt="Magnet"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain", // Prevents cutting off parts of the image
        }}
      />
    </div>
  );
});

export default Magnet;
