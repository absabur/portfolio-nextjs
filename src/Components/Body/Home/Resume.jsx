'use client'
import  { useEffect, useRef } from "react";
import "./Resume.css";

import { MdPhoneIphone } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { FaDownload } from "react-icons/fa";
import ReactToPrint from "react-to-print";

import MyImage from '@/Images/me.png'

const qrcode =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625510/skills/urlqrcode_yypete.png";

const html =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625449/skills/html_qajuk8.png";
const css =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625421/skills/css_hhue7h.svg";
const js =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625451/skills/javascript_xgvfto.svg";
const react =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625482/skills/react_mhmvyt.svg";
const next =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625466/skills/nextJS_or0pmc.svg";
const bootstrap =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625413/skills/bootstrap_ksxbwb.svg";
const tailwind =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625490/skills/tailwind_kufng4.svg";
const redux =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714626072/skills/redux-icon_ue61qp.webp";

const node =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625469/skills/node_jyqdtm.svg";
const express =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714626220/skills/expressjs_logo_icon_169185_ghdpth.png";
const mongodb =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625458/skills/mongoDB_ea6d5z.svg";
const Postgres =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625474/skills/Postgres_ai4xpa.png";
const python =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625478/skills/python_iyap2d.svg";
const django =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625426/skills/django_becgqc.svg";
const mysql =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625461/skills/mysql_himvkh.svg";

const github =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625443/skills/github_pminzk.svg";
const git =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625440/skills/git_llwsgw.png";
const aws =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625412/skills/aws_ijn8rp.svg";
const docker =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625432/skills/docker_xxtk77.svg";
const firebase =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625437/skills/firebase_evvrec.svg";
const postman =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625476/skills/postman_pis8fy.svg";
const cloudinary =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625415/skills/cloudinary_lkerxb.jpg";
const sass =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625493/skills/sass_uyvoi6.png";

const frontend = [
  {
    id: 1,
    title: html,
    parcentage: 95,
    description:
      "HTML is the standard markup language for describing the structure of a document written in a markup language such as HTML.",
  },
  {
    id: 2,
    title: css,
    parcentage: 90,
    description:
      "CSS is a style sheet language used to describe the presentation of a document written in a markup language such as HTML.",
  },
  {
    id: 3,
    title: js,
    parcentage: 85,
    description:
      "JavaScript is a high-level, interpreted, object-oriented programming language. It is a scripting language that conforms to the ECMAScript specification.",
  },
  {
    id: 4,
    title: react,
    parcentage: 90,
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 8,
    title: redux,
    parcentage: 90,
    description:
      "Redux is a library for managing state in a Redux application.",
  },
  {
    id: 5,
    title: next,
    parcentage: 40,
    description:
      "Next.js is a JavaScript framework for building single-page applications.",
  },
  {
    id: 6,
    title: bootstrap,
    parcentage: 70,
    description:
      "Bootstrap is a front-end framework for developing responsive, mobile first projects on the web.",
  },
  {
    id: 7,
    title: tailwind,
    parcentage: 40,
    description:
      "Tailwind CSS is a utility-first CSS framework with a focus on speed and accessibility.",
  },
  {
    id: 7,
    title: sass,
    parcentage: 70,
    description:
      "Sass is a CSS framework for developing responsive, mobile first projects on the web.",
  },
  {
    id: 1,
    title: node,
    parcentage: 85,
    description:
      "Node.js is a JavaScript runtime environment that runs on the server side.",
  },
  {
    id: 2,
    title: express,
    parcentage: 80,
    description:
      "Express.js is a Node.js framework for building web applications.",
  },
  {
    id: 3,
    title: mongodb,
    parcentage: 80,
    description:
      "MongoDB is a document-oriented database that stores and organizes data.",
  },
  {
    id: 4,
    title: Postgres,
    parcentage: 60,
    description:
      "PostgreSQL is a relational database management system that stores and organizes data.",
  },
  {
    id: 5,
    title: python,
    parcentage: 85,
    description:
      "Python is a high-level, interpreted, object-oriented programming language. It is a scripting language that conforms to the ECMAScript specification.",
  },
  {
    id: 6,
    title: django,
    parcentage: 75,
    description:
      "Django is an open source web framework for creating web applications.",
  },
  {
    id: 7,
    title: mysql,
    parcentage: 70,
    description:
      "MySQL is a relational database management system that stores and organizes data.",
  },
  {
    id: 1,
    title: github,
    parcentage: 85,
    description:
      "GitHub is a web-based platform used for version control and collaboration on software development projects. It utilizes the Git version control system, allowing developers to track changes in their code, collaborate with others, and manage their projects efficiently.",
  },
  {
    id: 2,
    title: git,
    parcentage: 85,
    description:
      "Git is a distributed version control system used for version control and collaboration on software development projects. It utilizes the Git version control system, allowing developers to track changes in their code, collaborate with others, and manage their projects efficiently.",
  },
  {
    id: 3,
    title: aws,
    parcentage: 25,
    description:
      "Amazon Web Services (AWS) is a cloud computing platform that enables developers to build, deploy, and manage applications on the cloud.",
  },
  {
    id: 4,
    title: docker,
    parcentage: 20,
    description:
      "Docker is an open-source application container platform that enables developers to build, deploy, and manage applications on the cloud.",
  },
  {
    id: 5,
    title: firebase,
    parcentage: 30,
    description:
      "Firebase is a cloud-based platform that enables developers to build, deploy, and manage applications on the cloud.",
  },
  {
    id: 6,
    title: postman,
    parcentage: 90,
    description:
      "Postman is a free and open-source API testing tool that enables developers to build, deploy, and manage applications on the cloud.",
  },
  {
    id: 7,
    title: cloudinary,
    parcentage: 95,
    description:
      "Cloudinary is a cloud-based platform that enables developers to build, deploy, and manage applications on the cloud.",
  },
];

const education = [
  {
    duration: "2021-current",
    subject: "Computer Science and Technology",
    degree: "Diploma",
    institute: "Bogra Polytechnic Institute",
  },
  {
    duration: "2020-current",
    subject: "Depertment of Mathematics",
    degree: "BSc (HONS)",
    institute: "Govt. Azizul Haque College",
  },
  {
    duration: "2018-2020",
    subject: "Science",
    degree: "HSC",
    institute: "Govt Shah Sultan College",
  },
];
const Resume = ({ modal, toggle }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowY = '';
    };
  }, [modal]);
  

  return (
      <div className={`${modal ? "open-modal": "close-modal"} modal-resume`}>
        <div className="inner-resume">
        <div className="preview-border">
          <div className="resume-parent" ref={componentRef}>
            <div className="resume">
              <div className="resume-content">
                <div className="resume-side-section">
                  <div className="resume-image">
                    <img src={MyImage.src} alt="" />
                  </div>
                  <div className="resume-sidebar-content">
                    <h4 className="resume-skills-header">Skills</h4>
                    <div className="resume-skills">
                      {frontend.map((item, index) => {
                        return (
                          <div key={index} className="skill">
                            <div
                              className="resume-percent"
                              style={{ width: item.parcentage + "%" }}
                            ></div>
                            <div className="skill-image">
                              <img src={item.title} alt={item.title} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <h4
                      className="resume-skills-header"
                      style={{ margin: "20px auto 0 auto" }}
                    >
                      Contact Info
                    </h4>
                    <div className="resume-skills">
                      <div className="resume-phone">
                        <MdPhoneIphone />
                        <a href="tel:+8801773277050">+8801773277050</a>
                      </div>
                      <div className="resume-email">
                        <IoIosMailOpen />
                        <a href="mailto:absabur929@gmail.com">
                          absabur929@gmail.com
                        </a>
                      </div>
                      <div className="resume-portfolio">
                        <TbWorldWww />
                        <a href="https://absabur.vercel.app">
                          https://absabur.vercel.app
                        </a>
                      </div>
                      <img style={{padding: "10px 0"}} src='/qrcode_absabur.vercel.app.png' alt="" width={180} className="mt-2" />
                    </div>
                  </div>
                </div>
                <div className="resume-main-section">
                  <h1 className="resume-name">Md Abdus Sabur</h1>
                  <div className="resume-section">
                    <h3 className="resume-section-header">
                      Fulstack Web Developer
                    </h3>
                    <p className="resume-para">
                    I am Md Abdus Sabur, Expert in JavaScript (MERN Stack) & Python (Django). Specializing in front-end and back-end development with React.js, Next.js, Redux, Django, MongoDB, MySQL, PostgreSQL, SQLite, Selenium, REST APIs, and Django REST Framework.
                    </p>
                    <p className="resume-para">
                      In addition to my programming endeavors, I am a certified{" "}
                      <span>electrician</span>, equipped with extensive
                      knowledge in <span>computer hardware</span> and{" "}
                      <span>electrical </span>
                      work. My pursuit of <span>advanced mathematics</span> as a
                      student further strengthens my analytical skills and
                      problem-solving abilities.
                    </p>
                  </div>
                  <div className="resume-section">
                    <h3 className="resume-section-header">Education</h3>
                    {education.map((edu, index) => (
                      <div key={index} className="resume-edu">
                        {[
                          { heading: "Qualification", data: edu.degree },
                          { heading: "Year", data: edu.duration },
                          { heading: "Subject", data: edu.subject },
                          {
                            heading: "Institute",
                            data: `${edu.institute}, Bangladesh`,
                          },
                        ].map((item) => (
                          <div
                            key={item.heading}
                            className="resume-edu-content"
                          >
                            <span className="resume-edu-th">
                              {item.heading}
                            </span>
                            <span>: {item.data}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="resume-section">
                    <h3 className="resume-section-header">Want to join as</h3>
                    <ul>
                      <li>Fulstack (MERN) Developer</li>
                      <li>
                        Frontend (JavaScript {"-"} React.Js, Next.Js) Developer.
                      </li>
                      <li>
                        Backend (JavaScript - Node.Js, Express.Js) Developer
                      </li>
                      <li>Backend (Python - Django) Developer</li>
                    </ul>
                  </div>
                  <div className="resume-section">
                    <h3 className="resume-section-header">Address</h3>
                    <p className="resume-address">
                      Present: Johurul Nagar, Bogura Sadar, Bogura, Bangladesh
                      (5800)
                    </p>
                    <p className="resume-address">
                      Parmanent: Boria, Zianagar, Dupchanchia, Bogura,
                      Bangladesh (5880)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
            <button
              className="button1 social-link"
              style={{
                border: "1px solid var(--color3)",
                color: "var(--color3)",
              }}
              onClick={toggle}
            >
              <RxCross2 /> Cancel
            </button>
            <ReactToPrint
              trigger={() => (
                <button
                  onClick={toggle}
                  className="button2 social-link"
                  style={{
                    border: "1px solid var(--color3)",
                    color: "var(--color3)",
                  }}
                >
                  <FaDownload /> Download Resume
                </button>
              )}
              content={() => componentRef.current}
            />
        </div>
        </div>
      </div>
  );
};

export default Resume;
