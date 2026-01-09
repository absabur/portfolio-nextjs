"use client";
import SectionsHead from "../SectionsTop";
import "./Certifications.css";
import { FaAward } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

const Certifications = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/certifications");
        if (!res.ok) throw new Error("Failed to fetch certifications");
        const data = await res.json();
        setItems((data.certifications || []).filter((c) => c.is_active));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="certifications" className="certifications-section">
      <SectionsHead section="certifications" />
      <h2 className="certifications-header">Certifications</h2>
      <div className="certs-container">
        {items.map((c) => (
          <article key={c._id} className="cert-card">
            <div className="cert-card-left">
              <div className="cert-icon">
                <Image
                  src={c.logo}
                  alt={`${c.issuer} logo`}
                  width={40}
                  height={40} // Added height to satisfy Next.js requirements
                  style={{
                    borderRadius: "4px",
                    objectFit: "contain",
                  }}
                  // Optional: adds a blurry placeholder while loading if you have the dimensions
                  // placeholder="blur"
                />
              </div>
              <div className="cert-meta">
                <p className="cert-title">{c.title}</p>
                <p className="cert-issuer">
                  {c.issuer} • {c.date}
                </p>
              </div>
            </div>
            <div className="cert-card-right">
              <p className="cert-desc">{c.description}</p>
              <div className="cert-links">
                <a href={c.url} target="_blank" rel="noreferrer">
                  Verify
                </a>
                <span className="credential-id">{c.credentialId}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
