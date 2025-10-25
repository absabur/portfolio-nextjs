"use client";
import { useAuth } from "@/Components/AuthContextProvider";
import React from "react";
import SkillCard from "./SkillCard";
import ProtectedButton from "@/Components/ProtectedButton";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const AllSkillForAdmin = ({ skills }) => {
  const { admin } = useAuth();
  if (!admin) return null;
  return (
    <div style={{ marginBottom: "20px" }} className="skills-grid">
      {skills
        ?.sort((a, b) => a.order - b.order)
        ?.map((skill) => (
          <SkillCard key={skill._id} skill={JSON.parse(JSON.stringify(skill))}>
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
              <ProtectedButton>
                <Link
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                    color: "var(--color5)",
                  }}
                  href={`/admin/skill/update/${skill._id}`}
                >
                  <FaEdit />
                </Link>
              </ProtectedButton>
              <div className="skill-icon">
                <img src={skill?.images?.url} alt={skill?.name} />
              </div>
              <h3 className="skill-title">{skill?.name}</h3>
              <div className="skill-progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill?.proficiency}%` }}
                ></div>
                <span className="percentage">{skill?.proficiency}%</span>
              </div>
            </div>
          </SkillCard>
        ))}
    </div>
  );
};

export default AllSkillForAdmin;
