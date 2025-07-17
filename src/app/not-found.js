// app/not-found.js
import Link from "next/link";
import Head from "next/head";
import "./notfound.css"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
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
            The page you're looking for doesn't exist or has been moved.
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