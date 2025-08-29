import React from "react";
import "./project.css";
import "./ProjectCard.css";
import SectionsHead from "../SectionsTop";
import { AllProjects } from "../../../serverAction";
import ProjectCard from "./ProjectCard";

const Project = async () => {
  const { projects } = await AllProjects();
  return (
    <div className="project-section" id="projects">
      <SectionsHead section="project" />
      <h1 className="projects-header">Projects</h1>
      <div className="all-projects">
        <div className="project2">
          {projects.map((item) => (
            <ProjectCard key={item._id} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
