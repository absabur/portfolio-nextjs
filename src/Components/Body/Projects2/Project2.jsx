import "./project.css";

import { django, react, hcjs, djangoReact, mern, next } from "./data";
import SectionsHead from "../SectionsTop";
import FancyProjectCard from "@/Components/Body/Projects2/FancyProjectCard";

const Project2 = () => {
  return (
    <div className="project-section" id="projects">
      <SectionsHead section="project" />
      <h1 className="projects-header">Projects</h1>
      <div className="all-projects">
        <div className="project2">
          <>
            {djangoReact
              .concat(mern, next, django, react, hcjs)
              .map((item, index) => {
                return (
                  <FancyProjectCard
                    key={index}
                    title={item.title}
                    image={item.image}
                    liveUrl={item.url}
                    frontendUrl={item.github.frontend}
                    backendUrl={item.github.backend}
                    demoUser={item.admin}
                    demoPass={item.password}
                    techStack={item.techStack}
                  />
                );
              })}
          </>
        </div>
      </div>
    </div>
  );
};

export default Project2;