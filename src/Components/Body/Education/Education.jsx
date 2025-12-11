"use client";
import "./Education.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { PiGraduationCapFill } from "react-icons/pi";
import SectionsHead from "../SectionsTop";

const educations = [
  {
    id: 1,
    degree: "BSC (HONS) in Mathematics",
    institution: "Govt Azizul Haque College, National University, Bangladesh",
    duration: "2020 - Present",
    description:
      "Specializing in advanced mathematics and statistical analysis",
    icon: (
      <img
        width={30}
        style={{ borderRadius: "4px", objectFit: "contain" }}
        src="/azizul.jpg"
        alt={`logo`}
      />
    ),
    color: "#4f46e5",
  },
  {
    id: 2,
    degree: "Diploma in Computer Science and Technology",
    institution: "Bogra Polytechnic Institute, Bangladesh",
    duration: "2018 - 2020",
    description: "Focused on software development and computer systems",
    icon: (
      <img
        width={30}
        style={{ borderRadius: "4px", objectFit: "contain" }}
        src="/bpi.jpg"
        alt={`logo`}
      />
    ),
    color: "#10b981",
  },
  {
    id: 3,
    degree: "HSC in Science",
    institution: "Govt Shah Sultan College, Bogra",
    duration: "2016 - 2018",
    description:
      "Higher secondary education with physics, chemistry, and mathematics",
    icon: (
      <img
        width={30}
        style={{ borderRadius: "4px", objectFit: "contain" }}
        src="/gssc.jpg"
        alt={`logo`}
      />
    ),
    color: "#f59e0b",
  },
  {
    id: 4,
    degree: "SSC in Science",
    institution: "Mortuzapur High School, Dupchanchis, Bogra",
    duration: "2014 - 2016",
    description: "Secondary school certificate with science concentration",
    icon: (
      <img
        width={30}
        style={{ borderRadius: "4px", objectFit: "contain" }}
        src="/mhs.jpg"
        alt={`logo`}
      />
    ),
    color: "#ec4899",
  },
];

const Education = () => {
  return (
    <div className="education-section" id="education">
      <SectionsHead section="education" />
      <h1 className="education-header">Education</h1>

      <div className="educations">
        <VerticalTimeline>
          {educations.map((education, i) => (
            <Element key={i} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

const Element = ({ education }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background:
        "linear-gradient(90deg, var(--color1-opacity-15), var(--color5-opacity-15))",
      color: "var(--color4)",
      borderLeft: "var(--color1) 5px solid",
      borderRight: "var(--color5) 5px solid",
      borderRadius: "20px",
    }}
    contentArrowStyle={{ borderRight: "20px solid var(--color2)" }}
    date={education.duration}
    iconStyle={{
      background: "var(--color3)",
      color: "var(--color1)",
      fontSize: "1.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    icon={education.icon}
  >
    <h3 className="vertical-timeline-element-title h-3">{education.degree}</h3>
    <p className="vertical-timeline-element-subtitle h-4">
      {education.institution}
    </p>
    <p className="vertical-timeline-element-subtitle exp-desc">
      {education.description}
    </p>
  </VerticalTimelineElement>
);

export default Education;
