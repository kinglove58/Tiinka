import fs from "fs";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import {
  BASE_URL,
  BLOG_API_URL,
  createBlogSlug,
  getConditionRoutes,
  getConditionTopicSeoRoutes,
  getServiceRoutes,
  staticRoutes,
  toAbsoluteUrl,
  normalizePath,
} from "./seo-routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.join(__dirname, "public", "sitemap.xml");

const unescapeXml = (value) =>
  String(value || "")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");

const readTag = (node, tagName) => {
  const match = node.match(new RegExp(`<${tagName}>([\\s\\S]*?)</${tagName}>`, "i"));
  return match ? unescapeXml(match[1].trim()) : "";
};

const readExistingBlogRoutes = () => {
  if (!fs.existsSync(SITEMAP_PATH)) {
    return [];
  }

  const sitemap = fs.readFileSync(SITEMAP_PATH, "utf8");
  const nodes = sitemap.match(/<url>[\s\S]*?<\/url>/g) || [];

  return nodes
    .map((node) => {
      const loc = readTag(node, "loc");
      try {
        const url = new URL(loc);
        const siteUrl = new URL(BASE_URL);
        if (url.hostname.replace(/^www\./, "") !== siteUrl.hostname) {
          return null;
        }
        if (!url.pathname.startsWith("/blogs/")) {
          return null;
        }
        return {
          path: decodeURI(url.pathname),
          lastmod: readTag(node, "lastmod"),
          changefreq: readTag(node, "changefreq") || "weekly",
          priority: readTag(node, "priority") || "0.7",
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean);
};

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

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
    let blogApiUnavailable = false;
    try {
      const response = await axios.get(BLOG_API_URL);
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
      blogApiUnavailable = true;
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

    getServiceRoutes().forEach((serviceRoute) => {
      addNode(
        serviceRoute.path,
        formatDate(),
        serviceRoute.changefreq,
        serviceRoute.priority,
      );
    });

    getConditionRoutes().forEach((conditionRoute) => {
      addNode(
        conditionRoute.path,
        formatDate(),
        conditionRoute.changefreq,
        conditionRoute.priority,
      );
    });

    getConditionTopicSeoRoutes().forEach((conditionTopicRoute) => {
      addNode(
        conditionTopicRoute.path,
        formatDate(),
        conditionTopicRoute.changefreq,
        conditionTopicRoute.priority,
      );
    });

    blogs
      .map((blog) => ({
        ...blog,
        slug: blog?.slug || createBlogSlug(blog?.title),
      }))
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

    if (blogApiUnavailable && blogs.length === 0) {
      const fallbackBlogRoutes = readExistingBlogRoutes();
      fallbackBlogRoutes.forEach((blogRoute) => {
        addNode(
          blogRoute.path,
          blogRoute.lastmod || formatDate(),
          blogRoute.changefreq,
          blogRoute.priority,
        );
      });

      if (fallbackBlogRoutes.length > 0) {
        console.warn(
          `Preserved ${fallbackBlogRoutes.length} blog URLs from the existing sitemap.`,
        );
      }
    }

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
