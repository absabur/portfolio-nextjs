"use client";
import "./project.css";
import React, { useState } from "react";
import "./ProjectCard.css";
import { FaKey, FaLink, FaGithubSquare, FaTimes } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import Copy from "../Contact/Copy";
import { django, react, hcjs, djangoReact, mern, next } from "./data";
import SectionsHead from "../SectionsTop";

const Project = () => {
  const [modalData, setModalData] = useState({});

  return (
    <div className="project-section" id="projects">
      <SectionsHead section="project" />
      <h1 className="projects-header">Projects</h1>
      <div className="all-projects">
        <div className="project2">
          <>
            {djangoReact.concat(mern, next, django, react, hcjs).map((item, index) => {
              return (
                <div
                  className={`card project`}
                  onClick={() => setModalData(item)}
                  key={item.url}
                >
                  <div className={`imageContainer`}>
                    <img
                      src={item.image.src}
                      alt={item.title}
                      className={`image`}
                    />
                    <div className={`overlay`}>
                      <div className={`badges`}>
                        {item.techStack.slice(0, 3).map((tech, idx) => (
                          <span key={idx}>{tech}</span>
                        ))}
                        {item.techStack.length > 3 && (
                          <span>+{item.techStack.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`info`}>
                    <h3>{item.title}</h3>
                    <div className={`cta`}>View Details →</div>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      </div>
      {modalData?.title && (
        <div className={`modalOverlay`} onClick={() => setModalData({})}>
          <div className={`modalContent`} onClick={(e) => e.stopPropagation()}>
            <button className={`closeButton`} onClick={() => setModalData({})}>
              <FaTimes />
            </button>

            <div className={`modalGrid`}>
              <div className={`modalImageContainer`}>
                <img
                  src={modalData.image.src}
                  alt={modalData.title}
                  className={`modalImage`}
                />
              </div>

              <div className={`modalDetails`}>
                <h2>{modalData.title}</h2>

                <div className={`techStack`}>
                  {modalData.techStack.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>

                <div className={`section`}>
                  <h3>Description</h3>
                  <p>{modalData.description}</p>
                </div>

                {modalData.features && modalData.features.length > 0 && (
                  <div className={`section`}>
                    <h3>Key Features</h3>
                    <ul>
                      {features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={`buttonGroup`}>
                  <a
                    className={`neon-glow-button`}
                    href={modalData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="neon-text">
                      <FaLink /> Live Demo
                    </span>
                    <span className="neon-border"></span>
                  </a>
                  {modalData.github.frontend && (
                    <a
                      className={`liquid-gradient-button`}
                      href={modalData.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="liquid-text">
                        <FaGithubSquare /> Frontend Code
                      </span>
                      <div className="liquid-overlay"></div>
                    </a>
                  )}
                  {modalData.github.backend && (
                    <a
                      className={`liquid-gradient-button`}
                      href={modalData.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="liquid-text">
                        <FaGithubSquare /> Backend Code
                      </span>
                      <div className="liquid-overlay"></div>
                    </a>
                  )}
                </div>
                {modalData.admin && (
                  <div className={`demoCredentials`}>
                    <h3>Demo Credentials</h3>
                    <div className={`credentialItem`}>
                      <span className={`credentialLabel`}>
                        <RiAdminFill /> / <IoIosMailOpen />:
                      </span>
                      <Copy data={modalData.admin} />
                    </div>
                    <div className={`credentialItem`}>
                      <span className={`credentialLabel`}>
                        <FaKey />:
                      </span>
                      <Copy data={modalData.password} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
