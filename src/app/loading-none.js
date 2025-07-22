"use client";
import "./error.css";

export default function Loading() {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-graphic">
          <div className="error-orb"></div>
          <div className="error-pulse"></div>
          <div className="error-shards">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="error-shard"></div>
            ))}
          </div>
        </div>
        <h1 className="error-title">Loading...</h1>
        <p className="error-message">
          Please wait while we prepare your content.
        </p>
        <div className="error-actions">
          <div className="error-button primary" style={{ opacity: 0.5 }}>
            Loading
          </div>
          <div className="error-button secondary" style={{ opacity: 0.5 }}>
            Loading
          </div>
        </div>
      </div>
    </div>
  );
}