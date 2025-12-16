"use client";
import SectionsHead from "../SectionsTop";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

import Link from "next/link";
import { useEffect, useState } from "react";

const Experience = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/experiences");
        if (!res.ok) throw new Error("Failed to fetch experiences");
        const data = await res.json();
        setItems((data.experiences || []).filter((e) => e.is_active));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <SectionsHead section="experience" />
      <h1 className="experience-header">Experience</h1>
      <div className="experience-timeline">
        <VerticalTimeline>
          {items.map((exp) => (
            <VerticalTimelineElement
              key={exp._id}
              date={exp.duration}
              iconStyle={{
                background: "var(--color1)",
                color: "var(--color3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <img
                  width={30}
                  style={{ borderRadius: "4px", objectFit: "contain" }}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                />
              }
              contentArrowStyle={{ borderRight: "20px solid var(--color2)" }}
              contentStyle={{
                background:
                  "linear-gradient(90deg, var(--color1-opacity-15), var(--color5-opacity-15))",
                color: "var(--color4)",
                borderRadius: "16px",
                borderLeft: "var(--color1) 5px solid",
                borderRight: "var(--color5) 5px solid",
              }}
            >
              <h3 className="exp-position">{exp.role}</h3>
              <h4 className="exp-company">
                <Link target="_blank" href={exp.companyUrl}>
                  {exp.company}
                </Link>
                , <span className="exp-location">{exp.location}</span>
              </h4>
              <p className="exp-desc">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
