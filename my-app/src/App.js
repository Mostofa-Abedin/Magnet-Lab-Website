import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesTeaser from "./components/ServicesTeaser";
import WorkTeaser from "./components/WorkTeaser";
import ContactTeaser from "./components/ContactTeaser";
import Footer from "./components/Footer";

const App = () => {
  const [magnetPosition, setMagnetPosition] = useState({ x: 100, y: 300 });

  // Define motion values explicitly for each person
  const motionValues = [
    { x: useMotionValue(1200), y: useMotionValue(200) },
    { x: useMotionValue(1200), y: useMotionValue(300) },
    { x: useMotionValue(1200), y: useMotionValue(400) },
    { x: useMotionValue(1200), y: useMotionValue(500) },
    { x: useMotionValue(1200), y: useMotionValue(600) },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY * 0.3; // Scale down the scroll influence
      const clampedY = Math.min(Math.max(300 + yOffset, 200), 400); // Bound to [200, 400]
      setMagnetPosition({ x: 100, y: clampedY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    motionValues.forEach((values, index) => {
      values.x.set(
        magnetPosition.x +
          (index % 2 === 0 ? 50 : -50) + // Add offset for variety
          index * 10
      );
      values.y.set(
        magnetPosition.y +
          30 * index + // Staggered vertical positions
          Math.sin(index * 0.5) * 20
      );
    });
  }, [magnetPosition]);

  return (
    <div>
      <Navbar />

      {/* Overlayed Animation */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // Allow clicks to pass through
          zIndex: 10, // Ensure it's above all other content
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            left: magnetPosition.x,
            top: magnetPosition.y,
            width: 80,
            height: 80,
            background: "red",
            borderRadius: "50%",
          }}
        >
          <motion.img
            src="https://via.placeholder.com/100x100?text=Magnet"
            alt="Magnet"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </motion.div>

        {motionValues.map((values, index) => (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              width: 80,
              height: 80,
              background: "skyblue",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
            }}
            animate={{
              x: values.x.get(),
              y: values.y.get(),
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {`P${index + 1}`}
          </motion.div>
        ))}
      </div>

      {/* Website Sections */}
      <HeroSection />
      <ServicesTeaser />
      <WorkTeaser />
      <ContactTeaser />
      <Footer />
    </div>
  );
};

export default App;
