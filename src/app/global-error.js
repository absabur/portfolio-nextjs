"use client";
import Link from "next/link";
import "./error.css";
import "./globals.css";

export default function GlobalError({ error }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="design-bg">
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
              <h1 className="error-title">Oops! Something went wrong</h1>
              <p className="error-message">
                We encountered an unexpected error. Please try again or contact
                support if the problem persists.
              </p>
              <div className="error-actions">
                <button
                  onClick={() => reset()}
                  className="error-button primary"
                >
                  Try Again
                </button>
                <Link href="/" className="error-button secondary">
                  Return Home
                </Link>
              </div>
              {error.digest && (
                <div className="error-details">
                  <details>
                    <summary>Error Details</summary>
                    <code>{error.message}</code>
                    <p className="error-digest">Error digest: {error.digest}</p>
                  </details>
                </div>
              )}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
