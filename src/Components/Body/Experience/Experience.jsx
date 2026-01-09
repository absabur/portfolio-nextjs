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
import Image from "next/image";

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
      <h2 className="experience-header">Experience</h2>
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
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={30}
                  height={30} // Next.js requires height to maintain aspect ratio/prevent layout shift
                  style={{ borderRadius: "4px", objectFit: "contain" }}
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
              <p className="exp-position">{exp.role}</p>
              <p className="exp-company">
                <Link target="_blank" href={exp.companyUrl}>
                  {exp.company}
                </Link>
                , <span className="exp-location">{exp.location}</span>
              </p>
              <p className="exp-desc">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
