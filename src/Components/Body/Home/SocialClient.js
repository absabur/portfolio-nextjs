"use client";
import Link from "next/link";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const SocialClient = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Link
        href={`https://www.linkedin.com/in/ab-sabur/`}
        target="_blank"
        className="neon-glow-button"
        style={{ flex: 1 }}
      >
        <span className="neon-text">
          <FaLinkedin /> LinkedIn
        </span>
        <span className="neon-border"></span>
      </Link>
      <Link
        href={`https://github.com/absabur/`}
        target="_blank"
        className="liquid-gradient-button"
        style={{ flex: 1 }}
      >
        <span className="liquid-text">GitHub</span>
        <div className="liquid-overlay"></div>
      </Link>
      <Link
        href={`/Md_Abdus_Sabur_MERN_Stack_Developer_Resume.pdf`}
        target="_blank"
        className="neon-glow-button"
        style={{ flex: 1 }}
      >
        <span className="neon-text">Resume</span>
        <span className="neon-border"></span>
      </Link>
      <Link
        href={`/Md_Abdus_Sabur_MERN_Stack_Developer_CV.pdf`}
        target="_blank"
        className="liquid-gradient-button"
        style={{ flex: 1 }}
      >
        <span className="liquid-text">CV</span>
        <div className="liquid-overlay"></div>
      </Link>
    </div>
  );
};

export default SocialClient;
