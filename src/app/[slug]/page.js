import React from "react";
import { FaKey, FaLink, FaGithubSquare, FaTimes } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import {
  django,
  react,
  hcjs,
  djangoReact,
  mern,
  next,
} from "@/Components/Body/Projects/data";
import "./ProjectCard.css";
import Copy from "@/Components/Body/Contact/Copy";
import Link from "next/link";
import { redirect } from "next/navigation";
import CloseButton from "./Close";

export default async function Page({ params }) {
  const { slug } = await params;
  const modalData = djangoReact
    .concat(mern, next, django, react, hcjs)
    .find((item) => item.slug === slug);

  if (!modalData) {
    redirect("/");
  }
  return <>{modalData && <ProjectModal modalData={modalData} />}</>;
}

const ProjectModal = ({ modalData }) => {
  return (
    <div className={`modalContent`}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h1 className="projects-header">Project</h1>
      </div>
      <CloseButton />

      <div className={`modalGrid`}>
        <div className={`modalImageContainer outside`}>
          <img
            src={modalData.image.src}
            alt={modalData.title}
            className={`modalImage`}
          />
        </div>

        <div className={`modalDetails`}>
          <h2>{modalData.title}</h2>

          <div className={`modalImageContainer inside`}>
            <img
              src={modalData.image.src}
              alt={modalData.title}
              className={`modalImage`}
            />
          </div>

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
  );
};

export async function generateStaticParams() {
  const allProjects = djangoReact
    .concat(mern, next, django, react, hcjs)
    .map((item) => item.slug);
  return allProjects.map((project) => ({
    slug: project,
  }));
}
