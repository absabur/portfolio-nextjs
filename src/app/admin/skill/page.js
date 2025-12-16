"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { revalidate } from "./action";
import "./css/skill.css";

const SkillList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/skills");
      if (!res.ok) throw new Error("Failed to fetch skills");
      const data = await res.json();
      setItems(data.skills.sort((a, b) => a.order - b.order) || []);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error fetching skills");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this skill?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/skills/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      await revalidate();
      toast.success("Deleted");
      fetchItems();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="skill-list-container">
      {/* Header with Title and Add Button */}
      <div className="list-header">
        <h1>Skills Management</h1>
        <Link
          href="/admin/skill/add"
          className="primary-btn action-btn-primary"
        >
          + Add New Skill
        </Link>
      </div>

      {/* List of Skills */}
      <ul className="skill-list">
        {items.map((it) => (
          <li key={it._id} className="skill-list-item">
            <div className="item-content">
              <div className="item-details">
                <div className="item-name">
                  {it.name}{" "}
                  <span style={{ color: "var(--color4)", fontSize: "0.9rem" }}>
                    ({it.type})
                  </span>
                </div>
                <div className="item-meta">
                  <span>
                    Proficiency: <strong>{it.proficiency}%</strong>
                  </span>
                  <span>
                    {" "}
                    • Order: <strong>{it.order || 0}</strong>
                  </span>
                  <span>
                    {" "}
                    • Published: <strong>{it.published ? "Yes" : "No"}</strong>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="item-actions">
                <Link
                  href={`/admin/skill/update/${it._id}`}
                  className="primary-btn action-btn-primary"
                  style={{ padding: "0.5rem 1rem" }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(it._id)}
                  disabled={loading}
                  className="primary-btn action-btn-danger"
                  style={{ padding: "0.5rem 1rem" }}
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
