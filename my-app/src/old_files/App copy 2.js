import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { throttle } from "lodash";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const magnetRef = useRef(null);
  const peopleRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const magnet = magnetRef.current;
  
    // Function to calculate magnet's position
    const getMagnetPosition = () => {
      const rect = magnet.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    };
  
    // Continuously update the magnet's position
    let magnetPosition = getMagnetPosition();
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: () => {
        magnetPosition = getMagnetPosition();
        console.log("Updated Magnet Position:", magnetPosition);
      },
    });
  
    // Set dynamic initial positions and animation for each person
    peopleRefs.current.forEach((ref, index) => {
      if (ref) {
        const initialX = 1200; // Starting X position
        const initialY = 200 + index * 150; // Staggered Y position
  
        // Set initial style
        ref.style.position = "absolute";
        ref.style.left = `${initialX}px`;
        ref.style.top = `${initialY}px`;
  
        console.log(
          `Person ${index + 1} Style Set: left=${ref.style.left}, top=${ref.style.top}`
        );
  
        // Calculate unique offsets
        const offsetX = (index % 2 === 0 ? 1 : -1) * (50 + index * 10); // Alternating left-right offsets
        const offsetY = index * 30; // Incremental vertical offset
  
        // Animate each person towards the magnet with offsets
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${index * 10}% top`, // Staggered scroll trigger
            end: `${index * 10 + 20}% top`,
            scrub: true,
          },
        });
  
        timeline.to(ref, {
          x: () => magnetPosition.x - ref.offsetWidth / 2 + offsetX,
          y: () => magnetPosition.y - ref.offsetHeight / 2 + offsetY,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            console.log(
              `Person ${index + 1} Stuck to Magnet at Position:`,
              magnetPosition
            );
          },
        });
      }
    });
  
    // Cleanup ScrollTriggers
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);
  
  
  return (
    <div
      ref={containerRef}
      style={{
        height: "300vh",
        position: "relative",
        background: `
          linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        overflow: "hidden", // Prevent content from escaping boundaries
      }}
    >
      {/* Magnet */}
      <div
        ref={magnetRef}
        style={{
          position: "fixed",
          left: "50px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <img
          src="https://via.placeholder.com/100x100?text=Magnet"
          alt="Magnet"
        />
      </div>

      {/* People */}
      <div
        style={{
          position: "relative", // Ensure relative positioning within parent
          width: "100%",
          height: "100%",
        }}
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (peopleRefs.current[index] = el)}
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "skyblue",
              borderRadius: "50%",
              textAlign: "center",
              lineHeight: "80px",
              fontWeight: "bold",
              position: "absolute",
              zIndex: 5,
            }}
          >
            {`P${index + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
