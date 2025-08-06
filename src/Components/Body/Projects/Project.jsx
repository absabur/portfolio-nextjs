import "./project.css";
import React from "react";
import "./ProjectCard.css";
import { django, react, hcjs, djangoReact, mern, next } from "./data";
import SectionsHead from "../SectionsTop";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
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
                  <Link
                    href={`/${item.slug}`}
                    className={`card project`}
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
                  </Link>
                );
              })}
          </>
        </div>
      </div>
    </div>
  );
};

export default Project;
