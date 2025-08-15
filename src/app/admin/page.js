"use client";
import { FaPlus } from "react-icons/fa6";
import "./admin.css";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="links-container">
        <Link href="/admin/project/add" className="dashboard-card">
          <FaPlus fontSize={30} />
          <h2>Add Project</h2>
          <p>Create a new project in the system</p>
        </Link>
        <Link href="/admin/skill/add" className="dashboard-card">
          <FaPlus fontSize={30} />
          <h2>Add Skill</h2>
          <p>Add a new skill to your profile</p>
        </Link>
      </div>
    </div>
  );
}
