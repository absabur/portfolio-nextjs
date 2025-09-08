"use client";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const SocialClient = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <button
        onClick={() =>
          window.open("https://www.linkedin.com/in/ab-sabur/", "_blank")
        }
        className="neon-glow-button"
        style={{ flex: 1 }}
      >
        <span className="neon-text">
          <FaLinkedin /> LinkedIn
        </span>
        <span className="neon-border"></span>
      </button>
      <button
        onClick={() => window.open("https://github.com/absabur", "_blank")}
        className="liquid-gradient-button"
        style={{ flex: 1 }}
      >
        <span className="liquid-text">
          <FaGithubSquare /> GitHub
        </span>
        <div className="liquid-overlay"></div>
      </button>
      <button
        onClick={() =>
          window.open(
            "/Md Abdus Sabur MERN Stack Developer Resume.pdf",
            "_blank"
          )
        }
        className="neon-glow-button"
        style={{ flex: 1 }}
      >
        <span className="neon-text">Resume</span>
        <span className="neon-border"></span>
      </button>
      <button
        onClick={() =>
          window.open(
            "/Md Abdus Sabur MERN Stack Developer CV.pdf",
            "_blank"
          )
        }
        className="liquid-gradient-button"
        style={{ flex: 1 }}
      >
        <span className="liquid-text">CV</span>
        <div className="liquid-overlay"></div>
      </button>
    </div>
  );
};

export default SocialClient;
