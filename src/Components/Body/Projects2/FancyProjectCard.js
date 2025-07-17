import React from "react";
import styles from "./FancyProjectCard.module.css";
import Link from "next/link";
import { FaKey } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import Copy from "../Contact/Copy";
import { FaLink, FaSquareGithub } from "react-icons/fa6";

const FancyProjectCard = ({
  title,
  image,
  liveUrl,
  frontendUrl,
  backendUrl,
  demoUser,
  demoPass,
  techStack,
}) => {
  return (
    <div className={`${styles.card} project`}>
      <div className={styles.imageContainer}>
        <img src={image.src} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <div className="project-links">
            <Link
              className="liquid-gradient-button"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="liquid-text">
                <FaLink /> Live
              </span>
              <div className="liquid-overlay"></div>
            </Link>
            <Link
              className="neon-glow-button"
              href={frontendUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="neon-text">
                <FaSquareGithub /> Frontend
              </span>
              <span className="neon-border"></span>
            </Link>
            {backendUrl && (
              <Link
                className="neon-glow-button"
                href={backendUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="neon-text">
                  <FaSquareGithub /> Backend
                </span>
                <span className="neon-border"></span>
              </Link>
            )}
          </div>
          {demoUser && (
            <div
              style={{
                color: "var(--color2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Copy
                data={demoUser}
                key={demoUser}
                icon={
                  <>
                    <RiAdminFill /> / <IoIosMailOpen />
                  </>
                }
              />
              <Copy data={demoPass} icon={<FaKey />} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.badges}>
          {techStack.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default FancyProjectCard;
