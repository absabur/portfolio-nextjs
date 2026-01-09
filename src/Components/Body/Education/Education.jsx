"use client";
import "./Education.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import SectionsHead from "../SectionsTop";

import { useEffect, useState } from "react";
import Image from "next/image";

const Education = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/education");
        if (!res.ok) throw new Error("Failed to fetch education");
        const data = await res.json();
        setItems((data.educations || []).filter((e) => e.is_active));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="education-section" id="education">
      <SectionsHead section="education" />
      <h2 className="education-header">Education</h2>

      <div className="educations">
        <VerticalTimeline>
          {items.map((education, i) => (
            <Element key={education._id || i} education={education} />
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
    icon={
      <Image
        src={education.icon}
        alt={`${education.school || "School"} logo`} // Improved accessibility
        width={30}
        height={30} // Next.js requires height to prevent Layout Shift
        style={{
          borderRadius: "4px",
          objectFit: "contain",
        }}
      />
    }
  >
    <p className="vertical-timeline-element-title h-3">{education.degree}</p>
    <p className="vertical-timeline-element-subtitle h-4">
      {education.institution}
    </p>
    <p className="vertical-timeline-element-subtitle exp-desc">
      {education.description}
    </p>
  </VerticalTimelineElement>
);

export default Education;
