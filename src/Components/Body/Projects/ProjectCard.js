"use client";

import React, { useState } from "react";
import { FaKey, FaLink, FaGithubSquare, FaEdit, FaTimes } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";

import "./ProjectCard.css";
import "./project.css";

import Copy from "../../Body/Contact/Copy";
import Link from "next/link";
import Image from "next/image";
import ProtectedButton from "../../ProtectedButton";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Card */}
      <div className="card project" onClick={() => setIsOpen(true)}>
        <div className="imageContainer">
          <Image
            src={project?.images[0].url}
            alt={project?.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB..."
            className="image"
          />
          <div className="overlay">
            <div className="badges">
              {project?.technologies.slice(0, 3).map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
              {project?.technologies.length > 3 && (
                <span>+{project?.technologies.length - 3}</span>
              )}
            </div>
          </div>
        </div>
        <div className="info">
          <p>{project?.title}</p>
          <div className="cta">View Details →</div>
        </div>
      </div>

      {/* Modal (conditionally visible) */}
      {isOpen && <ProjectModal project={project} setIsOpen={setIsOpen} />}
    </>
  );
}

const ProjectModal = ({ project, setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen(false)} className={`ic-modalOverlay`}>
      <div className={`ic-modalContent`} onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setIsOpen(false)} className="ic-closeButton">
          <FaTimes />
        </button>

        <div className={`ic-modalGrid`}>
          <ProtectedButton>
            <Link
              style={{
                fontSize: "30px",
                color: "var(--color5)",
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: 10,
              }}
              href={`/admin/project/update/${project._id}`}
              onClick={() => setIsOpen(false)}
            >
              <FaEdit />
            </Link>
          </ProtectedButton>
          <div className={`ic-modalImageContainer`}>
            <Image
              src={project?.images[0].url}
              alt={project?.title || "Project screenshot"}
              width={800} // Set a base width
              height={450} // Set a base height (e.g., 16:9 ratio)
              className="ic-modalImage"
              style={{ objectFit: "cover" }} // Ensures the image fills the area without stretching
            />
          </div>

          <div className={`ic-modalDetails`}>
            <h2>{project?.title}</h2>

            <div className={`ic-techStack`}>
              {project?.technologies.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>

            <div className={`ic-section`}>
              <p>Description</p>
              <p>{project?.description}</p>
            </div>

            <div className={`ic-buttonGroup`}>
              <Link
                className={`neon-glow-button`}
                href={project?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="neon-text">
                  <FaLink /> Live Demo
                </span>
                <span className="neon-border"></span>
              </Link>
              {project?.frontendCodeUrl && (
                <Link
                  className={`liquid-gradient-button`}
                  href={project?.frontendCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="liquid-text">
                    <FaGithubSquare /> Frontend Code
                  </span>
                  <div className="liquid-overlay"></div>
                </Link>
              )}
              {project?.backendCodeUrl && (
                <Link
                  className={`liquid-gradient-button`}
                  href={project?.backendCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="liquid-text">
                    <FaGithubSquare /> Backend Code
                  </span>
                  <div className="liquid-overlay"></div>
                </Link>
              )}
              {project?.fullstackCodeUrl && (
                <Link
                  className={`liquid-gradient-button`}
                  href={project?.fullstackCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="liquid-text">
                    <FaGithubSquare /> FullStack Code
                  </span>
                  <div className="liquid-overlay"></div>
                </Link>
              )}
            </div>
            {project?.user && (
              <div className={`ic-demoCredentials`}>
                <p>Demo Credentials</p>
                <div className={`ic-credentialItem`}>
                  <span className={`ic-credentialLabel`}>
                    <RiAdminFill /> / <IoIosMailOpen />:
                  </span>
                  <Copy data={project?.user} />
                </div>
                <div className={`ic-credentialItem`}>
                  <span className={`ic-credentialLabel`}>
                    <FaKey />:
                  </span>
                  <Copy data={project?.password} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
