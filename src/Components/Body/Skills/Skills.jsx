'use client'
import "./Skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Others from "./Others";

import { Tooltip } from "react-tooltip";
import SectionsHead from "../SectionsTop";

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <SectionsHead section="skills"/>
      <h1 className="skills-header">Skills</h1>
      <div className="all-skills">
        <div className="each-skills">
          <Frontend />
        </div>
        <div className="each-skills">
          <Backend />
        </div>
        <div style={{marginBottom: 0}} className="each-skills">
          <Others />
        </div>
      </div>

      <Tooltip
        id="skill"
        style={{
          textAlign: "center",
          width: "250px",
          backgroundColor: "var(--color2)",
          boxShadow: "0 0 2px var(--color3)",
          color: "var(--color3)",
          fontWeight: 600,
          fontSize: "16px",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Skills;
