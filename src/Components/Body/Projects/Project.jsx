import "./project.css";
import React from "react";
import "./ProjectCard.css";
import SectionsHead from "../SectionsTop";
import Link from "next/link";
import Image from "next/image";
import { AllProjects } from "@/serverAction";

const Project = async () => {
  const { projects } = await AllProjects();
  return (
    <div className="project-section" id="projects">
      <SectionsHead section="project" />
      <h1 className="projects-header">Projects</h1>
      <div className="all-projects">
        <div className="project2">
          <>
            {projects.map((item) => {
              return (
                <Link
                  href={`/project/${item.title.replace(/ /g, "__")}`}
                  className={`card project`}
                  key={item._id}
                >
                  <div className={`imageContainer`}>
                    <Image
                      src={item.images[0].url}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA4IDUnPjxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzUnIGZpbGw9JyNlMmU4ZjAnLz48L3N2Zz4="
                      className="image"
                    />
                    <div className={`overlay`}>
                      <div className={`badges`}>
                        {item.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx}>{tech}</span>
                        ))}
                        {item.technologies.length > 3 && (
                          <span>+{item.technologies.length - 3}</span>
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
