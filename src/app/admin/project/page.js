"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { revalidate } from "./action";
import "./css/project.css";

const ProjectList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/projects");
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      setItems(data.projects.sort((a, b) => a.order - b.order) || []);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error fetching projects");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this project? This action cannot be undone.")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      await revalidate();
      toast.success("Project deleted successfully.");
      fetchItems();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="project-list-list-container">
      {/* Header and Add Button */}
      <div className="project-list-header">
        <h1 className="project-list-title">Project Management</h1>
        <Link
          href="/admin/project/add"
          className="project-list-btn project-list-btn-primary"
        >
          + Add New Project
        </Link>
      </div>

      {/* List */}
      <ul className="project-list-items">
        {items.length === 0 ? (
          <li className="project-list-empty-state">No projects found.</li>
        ) : (
          items.map((it) => (
            <li key={it._id} className="project-list-item">
              <div className="project-list-item-details">
                <strong className="project-list-item-title">{it.title}</strong>
                <div className="project-list-item-meta">
                  <span>
                    Order:{" "}
                    <span className="project-list-meta-value">
                      {it.order || 0}
                    </span>
                  </span>
                  <span
                    className={`project-list-status-badge ${
                      it.published
                        ? "project-list-status-published"
                        : "project-list-status-draft"
                    }`}
                  >
                    Published: {it.published ? "Yes" : "No"}
                  </span>
                </div>
                <p className="project-list-item-description">
                  {it.description}
                </p>
              </div>

              {/* Actions */}
              <div className="project-list-item-actions">
                <Link
                  href={`/admin/project/update/${it._id}`}
                  className="project-list-btn project-list-btn-secondary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(it._id)}
                  disabled={loading}
                  className="project-list-btn project-list-btn-danger"
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProjectList;
