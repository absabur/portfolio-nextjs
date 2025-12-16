"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { revalidate } from "./action";
import "./css/certification.css"

const ListCerts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/certifications");
      if (!res.ok) throw new Error("Failed to fetch certifications");
      const data = await res.json();
      setItems(data.certifications || []);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error fetching certifications");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this certification? This action cannot be undone.")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/certifications/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      await revalidate();
      toast.success("Certification deleted successfully.");
      fetchItems();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cert-list-container">
      {/* Header and Add Button */}
      <div className="cert-list-header">
        <h1 className="cert-list-title">Certifications Management</h1>
        <Link href="/admin/certifications/add" className="cert-list-btn cert-list-btn-primary">
          + Add Certification
        </Link>
      </div>

      {/* List */}
      <ul className="cert-list-items">
        {items.length === 0 ? (
          <li className="cert-list-empty-state">No certifications found.</li>
        ) : (
          items.map((it) => (
            <li key={it._id} className="cert-list-item">
              <div className="cert-list-item-details">
                <strong className="cert-list-title-text">{it.title}</strong>
                <span className="cert-list-issuer"> by {it.issuer}</span>
                
                <div className="cert-list-item-meta">
                  <span>Date: {it.date}</span>
                  <span>&bull;</span>
                  <span>Order: {it.order || 0}</span>
                  <span className={`cert-list-status-badge ${it.is_active ? 'cert-list-status-active' : 'cert-list-status-inactive'}`}>
                    Active: {it.is_active ? "Yes" : "No"}
                  </span>
                </div>
                
                <p className="cert-list-item-description">{it.description}</p>
              </div>

              {/* Actions */}
              <div className="cert-list-item-actions">
                <Link 
                  href={`/admin/certifications/${it._id}`} 
                  className="cert-list-btn cert-list-btn-secondary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(it._id)}
                  disabled={loading}
                  className="cert-list-btn cert-list-btn-danger"
                >
                  {loading ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListCerts;