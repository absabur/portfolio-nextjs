import React from "react";
import { FaKey, FaLink, FaGithubSquare, FaTimes, FaEdit } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";
import "./ProjectCard.css";
import Copy from "@/Components/Body/Contact/Copy";
import { redirect } from "next/navigation";
import CloseButton from "./Close";
import { AllProjects, GetProjectByTitle } from "@/serverAction";
import ProtectedButton from "@/Components/ProtectedButton";
import Link from "next/link";

export const dynamic = "force-static";

export default async function Page({ params }) {
  const { slug } = await params;
  const { project } = await GetProjectByTitle(slug.replace(/__/g, " "));

  if (!project) {
    redirect("/");
  }
  return <>{project && <ProjectModal project={project} />}</>;
}

const ProjectModal = ({ project }) => {
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
            src={project.images[0].url}
            alt={project.title}
            className={`modalImage`}
          />
        </div>

        <div className={`modalDetails`}>
          <ProtectedButton>
            <Link
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                color: "var(--color5)",
              }}
              href={`/admin/project/update/${project._id}`}
            >
              <FaEdit />
            </Link>
          </ProtectedButton>
          <h2>{project.title}</h2>

          <div className={`modalImageContainer inside`}>
            <img
              src={project.images[0].url}
              alt={project.title}
              className={`modalImage`}
            />
          </div>

          <div className={`techStack`}>
            {project.technologies.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </div>

          <div className={`section`}>
            <h3>Description</h3>
            <p>{project.description}</p>
          </div>

          <div className={`buttonGroup`}>
            <a
              className={`neon-glow-button`}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="neon-text">
                <FaLink /> Live Demo
              </span>
              <span className="neon-border"></span>
            </a>
            {project.frontendCodeUrl && (
              <a
                className={`liquid-gradient-button`}
                href={project.frontendCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="liquid-text">
                  <FaGithubSquare /> Frontend Code
                </span>
                <div className="liquid-overlay"></div>
              </a>
            )}
            {project.backendCodeUrl && (
              <a
                className={`liquid-gradient-button`}
                href={project.backendCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="liquid-text">
                  <FaGithubSquare /> Backend Code
                </span>
                <div className="liquid-overlay"></div>
              </a>
            )}
            {project.fullstackCodeUrl && (
              <a
                className={`liquid-gradient-button`}
                href={project.fullstackCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="liquid-text">
                  <FaGithubSquare /> FullStack
                </span>
                <div className="liquid-overlay"></div>
              </a>
            )}
          </div>
          {project.user && (
            <div className={`demoCredentials`}>
              <h3>Demo Credentials</h3>
              <div className={`credentialItem`}>
                <span className={`credentialLabel`}>
                  <RiAdminFill /> / <IoIosMailOpen />:
                </span>
                <Copy data={project.user} />
              </div>
              <div className={`credentialItem`}>
                <span className={`credentialLabel`}>
                  <FaKey />:
                </span>
                <Copy data={project.password} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const { projects } = await AllProjects();
  return projects.map((project) => ({
    slug: project.title.replace(/ /g, "__"),
  }));
}
