export const runtime = "edge";

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *
Allow: /

Sitemap: https://absabur.pro/sitemap.xml`);
  res.end();
}
