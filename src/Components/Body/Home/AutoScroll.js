'use client'
import { useState, useEffect } from "react";

export default function GlitchText() {
  const roles = [
    "MERN DEVELOPER",
    "REACT SPECIALIST",
    "Next.js DEVELOPER", 
    "Frontend DEVELOPER",
    "Full Stack DEVELOPER",
    "BACKEND DEVELOPER"
  ];

  const [displayText, setDisplayText] = useState(roles[0]);
  const [index, setIndex] = useState(0);
  
  // Characters to use for the scrambling effect
  const chars = "!<>-_\\/[]{}—=+*^?#________"; 

  useEffect(() => {
    let interval;
    let iteration = 0;
    
    // The target word we want to show
    const targetText = roles[index];

    // Start the scrambling animation
    interval = setInterval(() => {
      setDisplayText((prev) => 
        targetText
          .split("")
          .map((letter, i) => {
            // If the loop has passed this letter index, "lock" the correct letter in
            if (i < iteration) {
              return targetText[i];
            }
            // Otherwise show a random high-tech symbol
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      // Stop animation when the whole word is revealed
      if (iteration >= targetText.length) { 
        clearInterval(interval);
      }
      
      // Speed of decryption (higher += faster)
      iteration += 1 / 3; 
    }, 30);

    // Wait 3.5 seconds, then move to the next word
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index]); // Re-run this effect whenever 'index' changes

  return (
    <div className="glitch-wrapper">
      <div className="glitch-container">
        {/* data-text attribute is needed for the CSS glitch effect */}
        <h2 className="glitch-text" data-text={displayText}>
          {displayText}
        </h2>
      </div>
    </div>
  );
}