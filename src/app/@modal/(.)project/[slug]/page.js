import React from "react";
import { FaKey, FaLink, FaGithubSquare, FaTimes, FaEdit } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import "./ProjectCard.css";
import Copy from "@/Components/Body/Contact/Copy";
import CloseButton from "./Close";
import Overlay from "./Overlay";
import { redirect } from "next/navigation";
import { AllProjects, GetProjectByTitle } from "@/serverAction";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;
  const { project } = await GetProjectByTitle(slug.replace(/__/g, " "));

  if (!project) {
    redirect("/");
  }
  return <>{project && <ProjectModal project={project} />}</>;
}

export const dynamic = "force-static";

const ProjectModal = ({ project }) => {
  return (
    <Overlay>
      <CloseButton />

      <div className={`ic-modalGrid`}>
        <div className={`ic-modalImageContainer`}>
          <img
            src={project.images[0].url}
            alt={project.title}
            className={`ic-modalImage`}
          />
        </div>

        <div className={`ic-modalDetails`}>
          <h2>{project.title}</h2>

          <div className={`ic-techStack`}>
            {project.technologies.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </div>

          <div className={`ic-section`}>
            <h3>Description</h3>
            <p>{project.description}</p>
          </div>

          <div className={`ic-buttonGroup`}>
            <Link
              className={`neon-glow-button`}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="neon-text">
                <FaLink /> Live Demo
              </span>
              <span className="neon-border"></span>
            </Link>
            {project.frontendCodeUrl && (
              <Link
                className={`liquid-gradient-button`}
                href={project.frontendCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="liquid-text">
                  <FaGithubSquare /> Frontend Code
                </span>
                <div className="liquid-overlay"></div>
              </Link>
            )}
            {project.backendCodeUrl && (
              <Link
                className={`liquid-gradient-button`}
                href={project.backendCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="liquid-text">
                  <FaGithubSquare /> Backend Code
                </span>
                <div className="liquid-overlay"></div>
              </Link>
            )}
            {project.fullstackCodeUrl && (
              <Link
                className={`liquid-gradient-button`}
                href={project.fullstackCodeUrl}
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
          {project.user && (
            <div className={`ic-demoCredentials`}>
              <h3>Demo Credentials</h3>
              <div className={`ic-credentialItem`}>
                <span className={`ic-credentialLabel`}>
                  <RiAdminFill /> / <IoIosMailOpen />:
                </span>
                <Copy data={project.user} />
              </div>
              <div className={`ic-credentialItem`}>
                <span className={`ic-credentialLabel`}>
                  <FaKey />:
                </span>
                <Copy data={project.password} />
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
    slug: project.title.replace(/ /g, "__"),
  }));
}
