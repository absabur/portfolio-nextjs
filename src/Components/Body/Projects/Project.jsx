import ProjectCard from "./ProjectCard";
import { AllProjects } from "../../../serverAction";

const Project = async () => {
  const { projects } = await AllProjects();

  // sanitize data here to solve mongose non-serializable object type data
  const safeProjects = JSON.parse(JSON.stringify(projects));

  return (
    <div className="project-section" id="projects">
      <h1 className="projects-header">Projects</h1>
      <div className="all-projects">
        <div className="project2">
          {safeProjects.map((item) => (
            <ProjectCard key={item._id} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
