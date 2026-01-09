import React from "react";
import "./Skills.css"; // Import your CSS styles
import SectionsHead from "../SectionsTop";
import { AllSkills } from "@/serverAction";
import SkillCard from "./SkillCard";
import Image from "next/image";

const SkillsSection = async () => {
  const { skills } = JSON.parse(JSON.stringify(await AllSkills()));

  return (
    <div>
      <SectionsHead section="skills" />
      <h2 className="skills-header">Skills</h2>
      <section className="skills-section" id="skills">
        <div className="container">
          <div className="skills-grid">
            {skills
              ?.sort((a, b) => a.order - b.order)
              ?.map((skill) => {
                if (skill.published)
                  return (
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
                          <Image
                            src={skill?.images?.url}
                            alt={skill?.name || "Skill icon"}
                            width={60} // Required: Set based on your design
                            height={60} // Required: Set based on your design
                            className="your-skill-icon-class"
                          />
                        </div>
                        <p className="skill-title">{skill?.name}</p>
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
                    </SkillCard>
                  );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
