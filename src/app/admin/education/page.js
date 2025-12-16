"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { revalidate } from "./action";
import "./css/education.css";

const ListEdu = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/education");
      if (!res.ok) throw new Error("Failed to fetch education records");
      const data = await res.json();
      setItems(data.educations || []);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error fetching education records");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (
      !confirm(
        "Are you sure you want to delete this education record? This action cannot be undone."
      )
    )
      return;
    setLoading(true);
    try {
      const res = await fetch(`/api/education/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      await revalidate();
      toast.success("Education record deleted successfully.");
      fetchItems();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edu-list-container">
      {/* Header and Add Button */}
      <div className="edu-list-header">
        <h1 className="edu-list-title">Education Management</h1>
        <Link
          href="/admin/education/add"
          className="edu-list-btn edu-list-btn-primary"
        >
          + Add Education
        </Link>
      </div>

      {/* List */}
      <ul className="edu-list-items">
        {items.length === 0 ? (
          <li className="edu-list-empty-state">No education records found.</li>
        ) : (
          items.map((it) => (
            <li key={it._id} className="edu-list-item">
              <div className="edu-list-item-details">
                <strong className="edu-list-degree-text">{it.degree}</strong>
                <span className="edu-list-institution">
                  {" "}
                  at {it.institution}
                </span>

                <div className="edu-list-item-meta">
                  <span>Duration: {it.duration}</span>
                  <span
                    className={`edu-list-status-badge ${
                      it.is_active
                        ? "edu-list-status-active"
                        : "edu-list-status-inactive"
                    }`}
                  >
                    Active: {it.is_active ? "Yes" : "No"}
                  </span>
                </div>

                <p className="edu-list-item-description">{it.description}</p>
              </div>

              {/* Actions */}
              <div className="edu-list-item-actions">
                <Link
                  href={`/admin/education/${it._id}`}
                  className="edu-list-btn edu-list-btn-secondary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(it._id)}
                  disabled={loading}
                  className="edu-list-btn edu-list-btn-danger"
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

export default ListEdu;
