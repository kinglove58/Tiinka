import fs from "fs";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = "https://api.tinkahealthservices.com/api/blogs";
const BASE_URL = "https://tinkahealthservices.com/";
const SITEMAP_PATH = path.join(__dirname, "public", "sitemap.xml");

async function generateSitemap() {
  try {
    // Fetch blog posts from the API
    const response = await axios.get(API_URL);
    console.log(
      "API response received:",
      JSON.stringify(response.data, null, 2)
    ); // Log the full API response in a readable format

    let blogs = [];
    if (Array.isArray(response.data)) {
      blogs = response.data;
    } else if (response.data && Array.isArray(response.data.blogs)) {
      blogs = response.data.blogs;
    } else {
      console.error(
        "Unexpected API response structure:",
        JSON.stringify(response.data, null, 2)
      ); // Log the response structure
      throw new Error("Invalid data format: blogs is not an array or missing");
    }

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogs
  .map(
    (blog) => `
  <url>
    <loc>${BASE_URL}/blog/${blog.slug}</loc>
    <lastmod>${new Date(blog.updatedAt).toISOString()}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

    // Write sitemap to /public/sitemap.xml
    fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");
    console.log(`Sitemap successfully generated at ${SITEMAP_PATH}`);
  } catch (error) {
    console.error("Error generating sitemap:", error.message);
  }
}

generateSitemap();
