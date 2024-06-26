'use client'
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
    degree: "BSC (HONS) in Mathematics",
    institute: "Govt Azizul Haque College, National University, Bangladesh",
    duration: "2020-present",
  },
  {
    degree: "Diploma in Computer Science and Technology",
    institute: "Bogra Polytechnic Institute, Bangladesh",
    duration: "2021-present",
  },
  {
    degree: "HSC in Science",
    institute: "Govt Shah Sultan College, Bogra",
    duration: "2018-2020",
  },
  {
    degree: "SSC in Science",
    institute: "Mortuzapur High School, Dupchanchia, Bogra",
    duration: "2016-2018",
  },
];

const Education = () => {
  return (
    <div className="education-section" id="education">
      <SectionsHead section="education"/>
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
        "linear-gradient(to right, black, var(--color3), var(--color2))",
      color: "var(--color4)",
    }}
    contentArrowStyle={{ borderRight: "17px solid  var(--color2)" }}
    date={education.duration}
    iconStyle={{ background: "var(--color3)", color: "var(--color1)" }}
    icon={<PiGraduationCapFill />}
  >
    <h3 className="vertical-timeline-element-title h-3">{education.degree}</h3>
    <h4 className="vertical-timeline-element-subtitle h-4">
      {education.institute}
    </h4>
  </VerticalTimelineElement>
);

export default Education;
