"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { revalidate } from "./action";
import "./css/experience.css";

const ExperienceList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/experiences");
      if (!res.ok) throw new Error("Failed to fetch experiences");
      const data = await res.json();
      setItems(data.experiences || []);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error fetching experiences");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (
      !confirm(
        "Are you sure you want to delete this experience? This cannot be undone."
      )
    )
      return;
    setLoading(true);
    try {
      const res = await fetch(`/api/experiences/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await revalidate();
      toast.success("Experience deleted successfully.");
      fetchItems();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="experience-list-container">
      {/* Header and Add Button */}
      <div className="experience-list-header">
        <h1 className="experience-list-title">Experience Timeline</h1>
        <Link
          href="/admin/experience/add"
          className="experience-list-btn experience-list-btn-primary"
        >
          + Add Experience
        </Link>
      </div>

      {/* List */}
      <ul className="experience-list-items">
        {items.length === 0 ? (
          <li className="experience-list-empty-state">
            No experience entries found.
          </li>
        ) : (
          items.map((it) => (
            <li key={it._id} className="experience-list-item">
              <div className="experience-list-item-details">
                <strong className="experience-list-role">{it.role}</strong>
                <em className="experience-list-company"> @ {it.company}</em>

                <div className="experience-list-item-meta">
                  <span>{it.duration}</span>
                  <span>&bull;</span>
                  <span>{it.location}</span>
                  <span
                    className={`experience-list-status-badge ${
                      it.is_active
                        ? "experience-list-status-active"
                        : "experience-list-status-inactive"
                    }`}
                  >
                    Active: {it.is_active ? "Yes" : "No"}
                  </span>
                </div>

                <p className="experience-list-item-description">
                  {it.description}
                </p>
              </div>

              {/* Actions */}
              <div className="experience-list-item-actions">
                <Link
                  href={`/admin/experience/${it._id}`}
                  className="experience-list-btn experience-list-btn-secondary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(it._id)}
                  disabled={loading}
                  className="experience-list-btn experience-list-btn-danger"
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

export default ExperienceList;
