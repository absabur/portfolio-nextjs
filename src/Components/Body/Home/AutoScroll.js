'use client'
import { useState, useEffect, useRef } from "react";

export default function RoleScroller() {
  const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer"
  ];

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, roles.length]);

  // Smooth scroll to current role
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const selectedTag = container.children[currentIndex];
      const scrollPos = selectedTag.offsetLeft - (container.offsetWidth / 2 - selectedTag.offsetWidth / 2);
      
      container.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="role-scroller-wrapper">
      <div
        ref={containerRef}
        className="role-scroller-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {roles.map((role, index) => (
          <div
            key={index}
            className={`role-tag ${index === currentIndex ? "active" : ""}`}
          >
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}