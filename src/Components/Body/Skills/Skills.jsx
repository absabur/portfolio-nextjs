import React from "react";
import "./Skills.css"; // Import your CSS styles
import SectionsHead from "../SectionsTop";
import { AllSkills } from "@/serverAction";
import SkillCard from "./SkillCard";
import AllSkillForAdmin from "./AllSkillForAdmin";

const SkillsSection = async () => {
  const { skills } = JSON.parse(JSON.stringify(await AllSkills()));

  return (
    <div>
      <SectionsHead section="skills" />
      <h1 className="skills-header">Skills</h1>
      <section className="skills-section" id="skills">
        <div className="container">
          <AllSkillForAdmin skills={skills} />
          <div className="skills-grid">
            {skills
              ?.sort((a, b) => a.order - b.order)
              ?.map((skill) => {
                if (skill.published)
                  <SkillCard
                    key={skill._id}
                    skill={JSON.parse(JSON.stringify(skill))}
                  >
                    <div className="skill-card">
                      <p
                        className="skill-type"
                        style={{
                          backgroundColor:
                            skill.type == "Frontend"
                              ? "var(--color5)"
                              : skill.type == "Backend"
                              ? "var(--color1)"
                              : "var(--color1)",
                        }}
                      >
                        {skill.type}
                      </p>
                      <div className="skill-icon">
                        <img src={skill?.images?.url} alt={skill?.name} />
                      </div>
                      <h3 className="skill-title">{skill?.name}</h3>
                      <div className="skill-progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${skill?.proficiency}%` }}
                        ></div>
                        <span className="percentage">
                          {skill?.proficiency}%
                        </span>
                      </div>
                    </div>
                  </SkillCard>;
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
