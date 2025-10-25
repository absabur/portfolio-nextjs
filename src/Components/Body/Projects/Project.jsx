import ProjectCard from "./ProjectCard";
import { AllProjects } from "../../../serverAction";
import SectionsHead from "../SectionsTop";
import AllProjectForAdmin from "./AllProjectForAdmin";

const Project = async () => {
  const { projects } = await AllProjects();

  // sanitize data here to solve mongose non-serializable object type data
  const safeProjects = JSON.parse(JSON.stringify(projects));

  return (
    <div className="project-section" id="projects">
      <SectionsHead section="project" />
      <h1 className="projects-header">Projects</h1>
      <div className="all-projects">
        <AllProjectForAdmin safeProjects={safeProjects}/>
        <div className="project2">
          {safeProjects
            ?.sort((a, b) => a.order - b.order)
            ?.map((item) => {
              if (item.published)
                return <ProjectCard key={item._id} project={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Project;
