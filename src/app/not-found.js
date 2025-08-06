// app/not-found.js
import Link from "next/link";
import "./notfound.css";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-graphic">
            <div className="not-found-orb"></div>
            <div className="not-found-pulse"></div>
            <div className="not-found-shards">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="not-found-shard"></div>
              ))}
            </div>
            <div className="not-found-number">404</div>
          </div>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-message">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="not-found-actions">
            <Link href="/" className="not-found-button primary">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
