export const runtime = "edge";

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *
Allow: /

Sitemap: https://absabur.vercel.app/sitemap.xml`);
  res.end();
}
