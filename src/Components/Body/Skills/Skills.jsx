"use client";
import React, { useState } from "react";
import { skillsData } from "./skillsData";
import "./Skills.css"; // Import your CSS styles
import SectionsHead from "../SectionsTop";
import Image from "next/image";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Categorize skills
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "frontend") {
      return [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Next.js",
        "Bootstrap",
        "SASS",
        "Tailwind CSS",
      ].includes(skill.title);
    }
    if (activeCategory === "backend") {
      return [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Python",
        "Django",
        "MySQL",
      ].includes(skill.title);
    }
    if (activeCategory === "tools") {
      return [
        "GitHub",
        "Git",
        "AWS",
        "Docker",
        "Firebase",
        "Postman",
        "Cloudinary",
        "Selenium",
        "Beautiful Soup",
      ].includes(skill.title);
    }
    return true;
  });

  return (
    <div>
      <SectionsHead section="skills" />
      <h1 className="skills-header">Skills</h1>
      <section className="skills-section" id="skills">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filteredSkills.map((skill) => (
              <div
                key={`${skill.id}-${skill.title}`}
                className="skill-card"
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="skill-icon">
                  <img src={skill.image} alt={skill.title}/>
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <div className="skill-progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.parcentage}%` }}
                  ></div>
                  <span className="percentage">{skill.parcentage}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Skill Detail Modal */}
          {selectedSkill && (
            <div
              className="skill-modal-overlay"
              onClick={() => setSelectedSkill(null)}
            >
              <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
                <button
                  className="close-modal"
                  onClick={() => setSelectedSkill(null)}
                >
                  &times;
                </button>
                <div className="modal-content">
                  <div className="modal-header">
                    <img
                      src={selectedSkill.image}
                      alt={selectedSkill.title}
                    />
                    <h3>{selectedSkill.title}</h3>
                  </div>
                  <div className="modal-body">
                    <p>{selectedSkill.description}</p>
                    <div className="modal-progress">
                      <div className="progress-container">
                        <div
                          className="progress-bar"
                          style={{ width: `${selectedSkill.parcentage}%` }}
                        ></div>
                      </div>
                      <span>{selectedSkill.parcentage}% Proficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
