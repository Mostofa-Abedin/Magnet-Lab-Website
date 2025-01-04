import React, { useEffect, useRef } from "react"; 
import { gsap } from "gsap"; // Import GSAP (GreenSock Animation Platform) for animations
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin to link animations with scrolling

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin with GSAP

const App = () => {
  // References to the magnet and people elements
  const magnetRef = useRef(null); // Reference for the magnet element
  const peopleRefs = useRef([]); // Array to store references to the people elements
  const containerRef = useRef(null); // Reference for the scroll container

  useEffect(() => {
    const magnet = magnetRef.current; // Get the magnet DOM element from the ref

    // Function to get the magnet's dynamic position (center)
    const getMagnetPosition = () => {
      const magnetRect = magnet.getBoundingClientRect(); // Get the magnet's bounding box
      return {
        x: magnetRect.left + magnetRect.width / 2, // Calculate the magnet's horizontal center
        y: magnetRect.top + magnetRect.height / 2, // Calculate the magnet's vertical center
      };
    };

    // Animate each person to move toward the magnet
    peopleRefs.current.forEach((ref, index) => {
      if (ref) {
        // Create a GSAP timeline for each person
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current, // The scrollable container
            start: `${index * 20}% top`, // When this person starts moving (staggered by index)
            end: `${index * 20 + 20}% top`, // When this person's animation ends
            scrub: true, // Link animation to scroll position for smooth control
          },
        });

        // Add a "move to magnet" animation to the timeline
        timeline.to(ref, {
          x: () => {
            const magnetPos = getMagnetPosition(); // Get the current magnet position
            const personRect = ref.getBoundingClientRect(); // Get the person's current position
            return magnetPos.x - (personRect.left + personRect.width / 2); // Calculate the horizontal offset to the magnet
          },
          y: () => {
            const magnetPos = getMagnetPosition(); // Get the current magnet position
            const personRect = ref.getBoundingClientRect(); // Get the person's current position
            return magnetPos.y - (personRect.top + personRect.height / 2); // Calculate the vertical offset to the magnet
          },
          duration: 0.5, // Duration of the animation step
          ease: "power2.out", // Smooth easing for the motion
          onComplete: () => {
            // Once the person reaches the magnet, keep it dynamically following the magnet
            ScrollTrigger.create({
              trigger: containerRef.current, // The scrollable container
              start: "top top", // Ensure it always tracks from the top
              scrub: true, // Smooth linkage to scrolling
              onUpdate: () => {
                const magnetPos = getMagnetPosition(); // Get the updated magnet position
                gsap.to(ref, {
                  x: magnetPos.x - (ref.getBoundingClientRect().left + ref.getBoundingClientRect().width / 2), // Horizontal adjustment
                  y: magnetPos.y - (ref.getBoundingClientRect().top + ref.getBoundingClientRect().height / 2), // Vertical adjustment
                  duration: 0.1, // Quick adjustment to match the magnet's motion
                  ease: "none", // Linear easing for precise tracking
                });
              },
            });
          },
        });
      }
    });

    // Cleanup all ScrollTriggers when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all active ScrollTriggers
    };
  }, []);

  // Function to render grid labels for debugging
  const renderGridLabels = () => {
    const labels = [];
    const step = 50; // Size of each grid square
    const gridSize = 2000; // Total grid size (adjust based on your page height)

    for (let y = 0; y < gridSize; y += step) {
      for (let x = 0; x < gridSize; x += step) {
        labels.push(
          <div
            key={`label-${x}-${y}`}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
              color: "gray",
              fontSize: "10px",
              transform: "translate(-50%, -50%)", // Center the label at the grid point
              pointerEvents: "none", // Ensure labels don't block interactions
            }}
          >
            {`${x},${y}`} {/* Display the grid point coordinates */}
          </div>
        );
      }
    }
    return labels; // Return all grid labels
  };

  return (
    <div
      ref={containerRef} // Reference for the scroll container
      style={{
        height: "300vh", // Increased height for extended scrolling
        position: "relative",
        background: `
          linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `, // Creates a grid-like background
        backgroundSize: "50px 50px", // Size of the grid squares
      }}
    >
      {renderGridLabels()} {/* Render grid labels for debugging */}

      {/* Magnet */}
      <div
        ref={magnetRef} // Reference for the magnet
        style={{
          position: "fixed", // Fixed position so it moves with the page
          left: "50px", // Horizontal placement
          top: "50%", // Vertical placement
          transform: "translateY(-50%)", // Center the magnet vertically
          zIndex: 10, // Ensure the magnet stays on top of other elements
        }}
      >
        <img
          src="https://via.placeholder.com/100x100?text=Magnet"
          alt="Magnet" // Placeholder image for the magnet
        />
      </div>

      {/* People */}
      <div
        style={{
          position: "absolute", // Positioned within the scrollable container
          right: "50px", // Horizontal placement
          top: "20%", // Initial vertical placement
          display: "flex",
          flexDirection: "column", // Stack people vertically
          gap: "20px", // Space between people
        }}
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index} // Unique key for each person
            ref={(el) => (peopleRefs.current[index] = el)} // Store each person in the refs array
            style={{
              width: "80px", // Size of the person
              height: "80px",
              backgroundColor: "skyblue", // Placeholder color
              borderRadius: "50%", // Make it circular
              textAlign: "center", // Center text inside the circle
              lineHeight: "80px", // Vertically align text
              fontWeight: "bold", // Bold text
              position: "absolute", // Needed for individual positioning
              zIndex: 5, // Ensure people stay above the grid
            }}
          >
            {`P${index + 1}`} {/* Label each person */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
