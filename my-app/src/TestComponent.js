import React from "react";
import P1Image from "./Images/P1_bg_removed.png";

const TestComponent = () => (
  <div>
    <img
      src={P1Image}
      alt="Test Image"
      style={{ width: "100px", height: "100px" }}
    />
  </div>
);

export default TestComponent;
