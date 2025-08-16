"use client";
import React, { useState } from "react";
import { FaKey, FaLink, FaGithubSquare } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import "./ProjectCard.css";
import "./project?.css";
import Copy from "@/Components/Body/Contact/Copy";
import CloseButton from "./Close";
import Overlay from "./Overlay";
import { AllProjects } from "@/serverAction";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    return (
      <ProjectModal project={project} isOpen={isOpen} setIsOpen={setIsOpen} />
    );
  } else {
    return (
      <div className={`card project`} onClick={() => setIsOpen(true)}>
        <div className={`imageContainer`}>
          <Image
            src={project?.images[0].url}
            alt={project?.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA4IDUnPjxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzUnIGZpbGw9JyNlMmU4ZjAnLz48L3N2Zz4="
            className="image"
          />
          <div className={`overlay`}>
            <div className={`badges`}>
              {project?.technologies.slice(0, 3).map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
              {project?.technologies.length > 3 && (
                <span>+{project?.technologies.length - 3}</span>
              )}
            </div>
          </div>
        </div>
        <div className={`info`}>
          <h3>{project?.title}</h3>
          <div className={`cta`}>View Details →</div>
        </div>
      </div>
    );
  }
}

const ProjectModal = ({ project, setIsOpen }) => {
  return (
    <Overlay setIsOpen={setIsOpen}>
      <CloseButton setIsOpen={setIsOpen} />

      <div className={`ic-modalGrid`}>
        <div className={`ic-modalImageContainer`}>
          <img
            src={project?.images[0].url}
            alt={project?.title}
            className={`ic-modalImage`}
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
            <h3>Description</h3>
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
              <h3>Demo Credentials</h3>
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
    </Overlay>
  );
};

export async function generateStaticParams() {
  const { projects } = await AllProjects();
  return projects.map((project) => ({
    slug: project?.title.replace(/ /g, "__"),
  }));
}
