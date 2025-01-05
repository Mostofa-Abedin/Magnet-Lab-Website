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
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";

const App = () => {
  const [magnetPosition, setMagnetPosition] = useState({ x: 100, y: 300 });
  const [resetPositions, setResetPositions] = useState(false);

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
      const yOffset = window.scrollY * 0.3;
      const clampedY = Math.min(Math.max(300 + yOffset, 200), 400);
      setMagnetPosition({ x: 100, y: clampedY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (resetPositions) {
      motionValues.forEach((values, index) => {
        values.x.set(1200);
        values.y.set(200 + index * 100);
      });

      setResetPositions(false);
    } else {
      motionValues.forEach((values, index) => {
        values.x.set(
          magnetPosition.x +
            (index % 2 === 0 ? 50 : -50) + 
            index * 10
        );
        values.y.set(
          magnetPosition.y +
            30 * index +
            Math.sin(index * 0.5) * 20
        );
      });
    }
  }, [magnetPosition, resetPositions]);

  const handleMagnetClick = () => {
    setResetPositions(true);
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
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <div
            style={{
              pointerEvents: "auto",
              cursor: "pointer",
            }}
            onClick={handleMagnetClick}
          >
            <Magnet />
          </div>

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
          {/* Individual Project Pages */}
          <Route path="/Project1" element={<Project1 />} />
          <Route path="/Project2" element={<Project2 />} />
          <Route path="/Project3" element={<Project3 />} />
          <Route path="/Project4" element={<Project4 />} />
          <Route path="/Project5" element={<Project5 />} />
          <Route path="/Project6" element={<Project6 />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
