import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesTeaser from "./components/ServicesTeaser";
import WorkTeaser from "./components/WorkTeaser";
import ContactTeaser from "./components/ContactTeaser";
import Footer from "./components/Footer";
import Magnet from "./components/Magnet";
import People from "./components/People";

// Import pages for routing
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App = () => {
  const [magnetPosition, setMagnetPosition] = useState({ x: 100, y: 300 });
  const [resetPositions, setResetPositions] = useState(false); // New state to reset People positions

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
    // When resetPositions is true, reset motion values to the starting point on the right
    if (resetPositions) {
      motionValues.forEach((values, index) => {
        values.x.set(1200); // Reset x position to the far right
        values.y.set(200 + index * 100); // Staggered vertical reset
      });

      // Disable reset after applying it
      setResetPositions(false);
    } else {
      // Normal attraction logic
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
    }
  }, [magnetPosition, resetPositions]); // Trigger on position updates or reset

  // Function to handle click on the Magnet
  const handleMagnetClick = () => {
    setResetPositions(true); // Trigger reset positions
  };

  return (
    <Router>
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
          {/* Magnet */}
          <div
            style={{
              pointerEvents: "auto", // Allow clicks on the Magnet
              cursor: "pointer",
            }}
            onClick={handleMagnetClick} // Reset positions on click
          >
            <Magnet />
          </div>

          {/* People */}
          {motionValues.map((values, index) => (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                width: 80,
                height: 80,
              }}
              animate={{
                x: values.x.get(),
                y: values.y.get(),
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <People index={index} />
            </motion.div>
          ))}
        </div>

        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                {/* Hero and Teaser Sections */}
                <HeroSection />
                <ServicesTeaser />
                <WorkTeaser />
                <ContactTeaser />
              </>
            }
          />

          {/* Services Page */}
          <Route path="/services" element={<Services />} />

          {/* Work Page */}
          <Route path="/work" element={<Work />} />

          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
