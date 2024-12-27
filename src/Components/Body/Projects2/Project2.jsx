import { FaExternalLinkAlt, FaGithubSquare, FaKey } from "react-icons/fa";
import Copy from "../Contact/Copy";
import { RiAdminFill } from "react-icons/ri";
import { IoIosMailOpen } from "react-icons/io";

import "./project.css";

import { django, react, hcjs, djangoReact, mern, next } from "./data";
import SectionsHead from "../SectionsTop";
import Link from "next/link";

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
                  <div className={`project`} key={index}>
                    <div className="project-image">
                      <img src={item.image.src} alt={item.title} />
                    </div>
                    <h3 className="project-name">{item.title}</h3>
                    <div className="project-content">
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
                          <div style={{width: "100%", margin: "10px 0"}}>
                            <Copy
                              data={item.admin}
                              icon={
                                <>
                                  <RiAdminFill /> / <IoIosMailOpen />
                                </>
                              }
                            />
                            <Copy data={item.password} icon={<FaKey />} />
                          </div>
                        </>
                      )}

                      {/* <p>{item.description}</p> */}
                      {item.github.frontend ? (
                        <div className="project-links">
                          <div>
                            <Link target="_blank"
                              className="button1 social-link"
                              href={item.github.frontend}
                            >
                              <FaGithubSquare /> React
                            </Link>
                            <Link target="_blank"
                              className="button1 social-link"
                              href={item.github.backend}
                            >
                              <FaGithubSquare /> {item.node ? "Node" : "Django"}
                            </Link>
                          </div>
                          <Link target="_blank" className="button2 social-link" href={item.url}>
                            <FaExternalLinkAlt /> Live
                          </Link>
                        </div>
                      ) : (
                        <div className="project-links single-github">
                          <Link target="_blank"
                            className="button1 social-link"
                            href={item.github}
                          >
                            <FaGithubSquare /> Github
                          </Link>
                          <Link target="_blank" className="button2 social-link" href={item.url}>
                            <FaExternalLinkAlt /> Live
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </>
        </div>
      </div>
    </div>
  );
};

export default Project2;
