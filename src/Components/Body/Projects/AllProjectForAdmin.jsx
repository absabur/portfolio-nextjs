"use client";
import { useAuth } from "@/Components/AuthContextProvider";
import React from "react";
import ProjectCard from "./ProjectCard";

const AllProjectForAdmin = ({ safeProjects }) => {
  const { admin } = useAuth();
  if (!admin) return null;
  return (
    <div style={{marginBottom: "15px"}} className="project2">
      {safeProjects
        ?.sort((a, b) => a.order - b.order)
        ?.map((item) => (
          <ProjectCard key={item._id} project={item} />
        ))}
    </div>
  );
};

export default AllProjectForAdmin;
