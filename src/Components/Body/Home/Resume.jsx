'use client'
import  { useEffect, useRef } from "react";
import "./Resume.css";

import { MdPhoneIphone } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { FaDownload } from "react-icons/fa";
import { Modal, ModalFooter } from "reactstrap";
import ReactToPrint from "react-to-print";

const Image =
  "https://res.cloudinary.com/dh96uxb54/image/upload/v1714625498/skills/me_fmuyx1.png";
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
              <div className="background">
                {/* <div className="shape1">
                  <svg
                    id="wave"
                    style={{
                      transform: "rotate(180deg)",
                      transition: " 0.3s",
                    }}
                    viewBox="0 0 1440 490"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="sw-gradient-0"
                        x1="0"
                        x2="0"
                        y1="1"
                        y2="0"
                      >
                        <stop stop-color="var(--color1)" offset="0%"></stop>
                        <stop stop-color="white" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      style={{ transform: "translate(0, 0px)", opacity: 1 }}
                      fill="url(#sw-gradient-0)"
                      d="M0,147L24,130.7C48,114,96,82,144,98C192,114,240,180,288,228.7C336,278,384,310,432,294C480,278,528,212,576,171.5C624,131,672,114,720,130.7C768,147,816,196,864,187.8C912,180,960,114,1008,130.7C1056,147,1104,245,1152,285.8C1200,327,1248,310,1296,261.3C1344,212,1392,131,1440,114.3C1488,98,1536,147,1584,147C1632,147,1680,98,1728,65.3C1776,33,1824,16,1872,81.7C1920,147,1968,294,2016,318.5C2064,343,2112,245,2160,245C2208,245,2256,343,2304,367.5C2352,392,2400,343,2448,310.3C2496,278,2544,261,2592,269.5C2640,278,2688,310,2736,269.5C2784,229,2832,114,2880,130.7C2928,147,2976,294,3024,367.5C3072,441,3120,441,3168,367.5C3216,294,3264,147,3312,73.5C3360,0,3408,0,3432,0L3456,0L3456,490L3432,490C3408,490,3360,490,3312,490C3264,490,3216,490,3168,490C3120,490,3072,490,3024,490C2976,490,2928,490,2880,490C2832,490,2784,490,2736,490C2688,490,2640,490,2592,490C2544,490,2496,490,2448,490C2400,490,2352,490,2304,490C2256,490,2208,490,2160,490C2112,490,2064,490,2016,490C1968,490,1920,490,1872,490C1824,490,1776,490,1728,490C1680,490,1632,490,1584,490C1536,490,1488,490,1440,490C1392,490,1344,490,1296,490C1248,490,1200,490,1152,490C1104,490,1056,490,1008,490C960,490,912,490,864,490C816,490,768,490,720,490C672,490,624,490,576,490C528,490,480,490,432,490C384,490,336,490,288,490C240,490,192,490,144,490C96,490,48,490,24,490L0,490Z"
                    ></path>
                  </svg>
                </div>
                <div className="shape2">
                  <svg
                    id="wave"
                    style={{ transform: "rotate(0deg)", transition: "0.3s" }}
                    viewBox="0 0 1440 490"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="sw-gradient-0"
                        x1="0"
                        x2="0"
                        y1="1"
                        y2="0"
                      >
                        <stop stop-color="var(--color1)" offset="0%"></stop>
                        <stop stop-color="gray" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      style={{ transform: "translate(0, 0px)", opacity: 1 }}
                      fill="url(#sw-gradient-0)"
                      d="M0,147L26.7,130.7C53.3,114,107,82,160,98C213.3,114,267,180,320,228.7C373.3,278,427,310,480,294C533.3,278,587,212,640,171.5C693.3,131,747,114,800,130.7C853.3,147,907,196,960,187.8C1013.3,180,1067,114,1120,130.7C1173.3,147,1227,245,1280,285.8C1333.3,327,1387,310,1440,261.3C1493.3,212,1547,131,1600,114.3C1653.3,98,1707,147,1760,147C1813.3,147,1867,98,1920,65.3C1973.3,33,2027,16,2080,81.7C2133.3,147,2187,294,2240,318.5C2293.3,343,2347,245,2400,245C2453.3,245,2507,343,2560,367.5C2613.3,392,2667,343,2720,310.3C2773.3,278,2827,261,2880,269.5C2933.3,278,2987,310,3040,269.5C3093.3,229,3147,114,3200,130.7C3253.3,147,3307,294,3360,367.5C3413.3,441,3467,441,3520,367.5C3573.3,294,3627,147,3680,73.5C3733.3,0,3787,0,3813,0L3840,0L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"
                    ></path>
                  </svg>
                </div>
                <div className="shape3">
                  <svg
                    id="wave"
                    style={{
                      transform: "rotate(180deg)",
                      transition: "0.3s",
                    }}
                    viewBox="0 0 1440 410"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="sw-gradient-0"
                        x1="0"
                        x2="0"
                        y1="1"
                        y2="0"
                      >
                        <stop
                          stop-color="rgba(243, 106, 62, 1)"
                          offset="0%"
                        ></stop>
                        <stop
                          stop-color="rgba(255, 179, 11, 1)"
                          offset="100%"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      style={{ transform: "translate(0, 0px)", opacity: 1 }}
                      fill="url(#sw-gradient-0)"
                      d="M0,123L80,109.3C160,96,320,68,480,82C640,96,800,150,960,191.3C1120,232,1280,260,1440,246C1600,232,1760,178,1920,143.5C2080,109,2240,96,2400,109.3C2560,123,2720,164,2880,157.2C3040,150,3200,96,3360,109.3C3520,123,3680,205,3840,239.2C4000,273,4160,260,4320,218.7C4480,178,4640,109,4800,95.7C4960,82,5120,123,5280,123C5440,123,5600,82,5760,54.7C5920,27,6080,14,6240,68.3C6400,123,6560,246,6720,266.5C6880,287,7040,205,7200,205C7360,205,7520,287,7680,307.5C7840,328,8000,287,8160,259.7C8320,232,8480,219,8640,225.5C8800,232,8960,260,9120,225.5C9280,191,9440,96,9600,109.3C9760,123,9920,246,10080,307.5C10240,369,10400,369,10560,307.5C10720,246,10880,123,11040,61.5C11200,0,11360,0,11440,0L11520,0L11520,410L11440,410C11360,410,11200,410,11040,410C10880,410,10720,410,10560,410C10400,410,10240,410,10080,410C9920,410,9760,410,9600,410C9440,410,9280,410,9120,410C8960,410,8800,410,8640,410C8480,410,8320,410,8160,410C8000,410,7840,410,7680,410C7520,410,7360,410,7200,410C7040,410,6880,410,6720,410C6560,410,6400,410,6240,410C6080,410,5920,410,5760,410C5600,410,5440,410,5280,410C5120,410,4960,410,4800,410C4640,410,4480,410,4320,410C4160,410,4000,410,3840,410C3680,410,3520,410,3360,410C3200,410,3040,410,2880,410C2720,410,2560,410,2400,410C2240,410,2080,410,1920,410C1760,410,1600,410,1440,410C1280,410,1120,410,960,410C800,410,640,410,480,410C320,410,160,410,80,410L0,410Z"
                    ></path>
                  </svg>
                </div>
                <div className="shape4">
                  <svg
                    id="wave"
                    style={{ transform: "rotate(0deg)", transition: "0.3s" }}
                    viewBox="0 0 1440 410"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="sw-gradient-0"
                        x1="0"
                        x2="0"
                        y1="1"
                        y2="0"
                      >
                        <stop
                          stop-color="rgba(243, 106, 62, 1)"
                          offset="0%"
                        ></stop>
                        <stop
                          stop-color="rgba(255, 179, 11, 1)"
                          offset="100%"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      style={{ transform: "translate(0, 0px)", opacity: 1 }}
                      fill="url(#sw-gradient-0)"
                      d="M0,123L80,109.3C160,96,320,68,480,82C640,96,800,150,960,191.3C1120,232,1280,260,1440,246C1600,232,1760,178,1920,143.5C2080,109,2240,96,2400,109.3C2560,123,2720,164,2880,157.2C3040,150,3200,96,3360,109.3C3520,123,3680,205,3840,239.2C4000,273,4160,260,4320,218.7C4480,178,4640,109,4800,95.7C4960,82,5120,123,5280,123C5440,123,5600,82,5760,54.7C5920,27,6080,14,6240,68.3C6400,123,6560,246,6720,266.5C6880,287,7040,205,7200,205C7360,205,7520,287,7680,307.5C7840,328,8000,287,8160,259.7C8320,232,8480,219,8640,225.5C8800,232,8960,260,9120,225.5C9280,191,9440,96,9600,109.3C9760,123,9920,246,10080,307.5C10240,369,10400,369,10560,307.5C10720,246,10880,123,11040,61.5C11200,0,11360,0,11440,0L11520,0L11520,410L11440,410C11360,410,11200,410,11040,410C10880,410,10720,410,10560,410C10400,410,10240,410,10080,410C9920,410,9760,410,9600,410C9440,410,9280,410,9120,410C8960,410,8800,410,8640,410C8480,410,8320,410,8160,410C8000,410,7840,410,7680,410C7520,410,7360,410,7200,410C7040,410,6880,410,6720,410C6560,410,6400,410,6240,410C6080,410,5920,410,5760,410C5600,410,5440,410,5280,410C5120,410,4960,410,4800,410C4640,410,4480,410,4320,410C4160,410,4000,410,3840,410C3680,410,3520,410,3360,410C3200,410,3040,410,2880,410C2720,410,2560,410,2400,410C2240,410,2080,410,1920,410C1760,410,1600,410,1440,410C1280,410,1120,410,960,410C800,410,640,410,480,410C320,410,160,410,80,410L0,410Z"
                    ></path>
                  </svg>
                </div> */}
              </div>
              <div className="resume-content">
                <div className="resume-side-section">
                  <div className="resume-image">
                    <img src={Image} alt="" />
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
                      style={{ margin: "20px auto 10px auto" }}
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
                        <a href="mailto:abdussabursayam@gmail.com">
                          abdussabursayam@gmail.com
                        </a>
                      </div>
                      <div className="resume-portfolio">
                        <TbWorldWww />
                        <a href="https://absabur.vercel.app">
                          https://absabur.vercel.app
                        </a>
                      </div>
                      <img src={qrcode} alt="" width={180} className="mt-2" />
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
                      I&apos;m a self-taught full-stack developer skilled in
                      JavaScript (MERN stack) and Python (Django). Currently I
                      am pursuing a BSc in <span>Mathematics</span> while also
                      studying for a diploma in{" "}
                      <span>Computer Science and Technology</span>.
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
