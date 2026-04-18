import fs from "fs";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import servicesDataList from "./src/pages/services/serviceData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = "https://api.tinkahealthservices.com/api/blogs";
const BASE_URL = "https://tinkahealthservices.com";
const SITEMAP_PATH = path.join(__dirname, "public", "sitemap.xml");

const staticRoutes = [
  { path: "", changefreq: "daily", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  {
    path: "/primary-preventive-care",
    changefreq: "monthly",
    priority: "0.8",
  },
  { path: "/meet-our-provider", changefreq: "monthly", priority: "0.8" },
  { path: "/blogs", changefreq: "weekly", priority: "0.8" },
  { path: "/policy", changefreq: "yearly", priority: "0.3" },
  { path: "/contact", changefreq: "weekly", priority: "0.9" },
  { path: "/booking", changefreq: "weekly", priority: "0.9" },
  { path: "/services", changefreq: "weekly", priority: "0.9" },
  { path: "/insurance-we-accept", changefreq: "weekly", priority: "0.9" },
  { path: "/maryland-psychiatrist", changefreq: "weekly", priority: "0.9" },
  { path: "/dc-psychiatrist", changefreq: "weekly", priority: "0.9" },
  { path: "/virginia-psychiatrist", changefreq: "weekly", priority: "0.9" },
  {
    path: "/telehealth-psychiatry-md-dc-va",
    changefreq: "weekly",
    priority: "0.9",
  },
];

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const normalizePath = (routePath) => {
  if (!routePath) return "";
  return routePath.startsWith("/") ? routePath : `/${routePath}`;
};

const toAbsoluteUrl = (routePath) =>
  routePath === "" ? BASE_URL : `${BASE_URL}${routePath}`;

const formatDate = (value) => {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString().split("T")[0];
  }
  return date.toISOString().split("T")[0];
};

const buildUrlNode = (
  routePath,
  lastmod,
  changefreq = "weekly",
  priority = "0.8",
) => `
  <url>
    <loc>${escapeXml(encodeURI(toAbsoluteUrl(routePath)))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

async function generateSitemap() {
  try {
    let blogs = [];
    try {
      const response = await axios.get(API_URL);
      if (Array.isArray(response.data)) {
        blogs = response.data;
      } else if (response.data && Array.isArray(response.data.blogs)) {
        blogs = response.data.blogs;
      } else if (response.data && Array.isArray(response.data.data)) {
        blogs = response.data.data;
      } else if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data.blogs)
      ) {
        blogs = response.data.data.blogs;
      }
    } catch (apiError) {
      console.warn(
        "Blog API unavailable during sitemap generation:",
        apiError.message,
      );
    }

    const uniqueRoutes = new Set();
    const allNodes = [];

    const addNode = (
      routePath,
      lastmod,
      changefreq = "weekly",
      priority = "0.8",
    ) => {
      const normalizedPath = normalizePath(routePath);
      if (uniqueRoutes.has(normalizedPath)) {
        return;
      }
      uniqueRoutes.add(normalizedPath);
      allNodes.push(
        buildUrlNode(normalizedPath, lastmod, changefreq, priority),
      );
    };

    staticRoutes.forEach((route) => {
      addNode(route.path, formatDate(), route.changefreq, route.priority);
    });

    servicesDataList.forEach((service) => {
      if (service?.id) {
        addNode(`/services/${service.id}`, formatDate(), "weekly", "0.8");
      }
    });

    blogs
      .filter((blog) => blog?.slug)
      .forEach((blog) => {
        addNode(
          `/blogs/${String(blog.slug).trim()}`,
          formatDate(
            blog.updated_at ||
              blog.updatedAt ||
              blog.created_at ||
              blog.createdAt,
          ),
          "weekly",
          "0.7",
        );
      });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allNodes.join("")}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemap, "utf8");
    console.log(
      `Sitemap successfully generated with ${allNodes.length} URLs at ${SITEMAP_PATH}`,
    );
  } catch (error) {
    console.error("Error generating sitemap:", error.message);
  }
}

generateSitemap();
