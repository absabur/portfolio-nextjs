"use client";
import SectionsHead from "../SectionsTop";
import "./Certifications.css";
import { FaAward } from "react-icons/fa";
import { certificationsData } from "./certificationsData";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <SectionsHead section="certifications" />
      <h1 className="certifications-header">Certifications</h1>
      <div className="certs-container">
        {certificationsData.map((c) => (
          <article key={c.id} className="cert-card">
            <div className="cert-card-left">
              <div className="cert-icon">
                <img
                  width={40}
                  style={{ borderRadius: "4px", objectFit: "contain" }}
                  src={c.logo}
                  alt={`${c.issuer} logo`}
                />
              </div>
              <div className="cert-meta">
                <h3 className="cert-title">{c.title}</h3>
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
