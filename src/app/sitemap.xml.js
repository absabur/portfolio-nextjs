import { promises as fs } from "fs";
import path from "path";

export const runtime = "edge";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "sitemap.xml");
  const fileContents = await fs.readFile(filePath, "utf8");

  res.setHeader("Content-Type", "application/xml");
  res.write(fileContents);
  res.end();
}
