"use client";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const SocialClient = () => {
  return (
    <div style={{display: "flex", gap: "20px"}}>
      <button
        onClick={() =>
          window.open("https://www.linkedin.com/in/ab-sabur/", "_blank")
        }
        className="neon-glow-button"
      >
        <span className="neon-text">
          <FaLinkedin /> LinkedIn
        </span>
        <span className="neon-border"></span>
      </button>
      <button
        onClick={() => window.open("https://github.com/absabur", "_blank")}
        className="liquid-gradient-button"
      >
        <span className="liquid-text">
          <FaGithubSquare /> GitHub
        </span>
        <div className="liquid-overlay"></div>
      </button>
    </div>
  );
};

export default SocialClient;
