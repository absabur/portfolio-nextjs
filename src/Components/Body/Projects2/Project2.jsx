'use client'
import  React, { useState } from "react";
import { FaExternalLinkAlt, FaGithubSquare, FaKey } from "react-icons/fa";
import Copy from "../Contact/Copy";
import { RiAdminFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";

import "./project.css";

import { django, react, hcjs, djangoReact, mern, next } from "./data";
import SectionsHead from "../SectionsTop";

const Project2 = () => {
  const [currentProject, setCurrentProject] = useState("all");

  const scrollToProjects = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="project-section" id="projects">
      <SectionsHead section="project"/>
      <h1 className="projects-header">Projects</h1>

      <div
        className="switch-project"
        
        
      >
        {[
          { value: "all", title: "All" },
          { value: "djangoReact", title: "Django + React" },
          { value: "mern", title: "MERN" },
          { value: "next", title: "Next Js" },
          { value: "django", title: "Django" },
          { value: "react", title: "React" },
          // { value: "hcjs", title: "Vanila Js" },
        ].map((item) => (
          <div
            key={item.value}
            className={`${
              currentProject === item.value && "current"
            } switch-tab`}
            onClick={() => {
              setCurrentProject(item.value);
              scrollToProjects();
            }}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="project2">
        {[
          { value: "all", array: djangoReact.concat(mern, next, django, react, hcjs) },
          { value: "djangoReact", array: djangoReact },
          { value: "mern", array: mern },
          { value: "next", array: next },
          { value: "django", array: django },
          { value: "react", array: react },
          // { value: "hcjs", array: hcjs },
        ].map((item) => (
          <React.Fragment key={item.value}>
            {currentProject === item.value &&
              item.array.map((project, index) => {
                return <ProjectCard key={index} index={index} item={project} />;
              })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Project2;

const ProjectCard = ({ index, item }) => {
  const [linkClick, setLinkClick] = useState(null);
  const [rotateDirection, setRotationDirection] = useState(null);
  const [top, setTop] = useState({ index: null, top: 0 });
  
  const clicked = (index, url, direction) => {
    setRotationDirection(direction);
    setLinkClick(index);
    setTimeout(() => {
      window.open(url, "_blank");
      setTimeout(() => {
        setLinkClick(null);
        setRotationDirection(null);
      }, 500);
    }, 300);
  };
  return (
    <div
      onMouseLeave={() => setTop({ index: null, top: 0 })}
      className={`project ${
        linkClick === index &&
        (rotateDirection === "left"
          ? "left-click"
          : rotateDirection === "right"
          ? "right-click"
          : rotateDirection === "bottom"
          ? "bottom-click"
          : null)
      }`}
      key={index}
    >
      <div
        className="project-image"
        onMouseEnter={(event) =>
          setTop({ top: event.target.clientHeight, index: index })
        }
        style={{
          top: top.index === index ? -top.top + 250 + "px" : 0,
        }}
      >
        <img src={item.image} alt={item.title} />
      </div>
      <h3 className="project-name">{item.title}</h3>
      <div className="project-content">
        {/* <p>{item.description}</p> */}
        {item.admin && (
          <>
            <h4
              style={{
                color: "var(--color2)",
                textDecoration: "underline",
              }}
            >
              Demo Account
            </h4>
            <Copy
              data={item.admin}
              icon={
                <>
                  <RiAdminFill /> / <IoIosMailOpen />
                </>
              }
            />
            <Copy data={item.password} icon={<FaKey />} />
          </>
        )}
        {item.github.frontend ? (
          <div className="project-links">
            <div>
              <button
                
                className="button1 social-link"
                onClick={() => clicked(index, item.github.frontend, "left")}
              >
                <FaGithubSquare /> React
              </button>
              <button
                
                className="button1 social-link"
                onClick={() => clicked(index, item.github.backend, "right")}
              >
                <FaGithubSquare /> {item.node ? "Node" : "Django"}
              </button>
            </div>
            <button
              
              
              className="button2 social-link"
              onClick={() => clicked(index, item.url, "bottom")}
            >
              <FaExternalLinkAlt /> Live
            </button>
          </div>
        ) : (
          <div className="project-links single-github">
            <button
              
              
              className="button1 social-link"
              onClick={() => clicked(index, item.github, "left")}
            >
              <FaGithubSquare /> Github
            </button>
            <button
              
              
              className="button2 social-link"
              onClick={() => clicked(index, item.url, "right")}
            >
              <FaExternalLinkAlt /> Live
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
