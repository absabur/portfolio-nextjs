"use client";
import React, { useState } from "react";

const SkillCard = ({ children, skill }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(true)}>
      {open && (
        <div
          className="skill-modal-overlay"
          onClick={(e) => {
            setOpen(false);
            e.stopPropagation();
          }}
        >
          <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setOpen(false)}>
              &times;
            </button>
            <div className="modal-content">
              <div className="modal-header">
                <img src={skill.images.url} alt={skill.name} />
                <h3>{skill.name}</h3>
              </div>
              <div className="modal-body">
                <p>{skill.description}</p>
                <div className="modal-progress">
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                  <span>{skill.proficiency}% Proficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default SkillCard;
