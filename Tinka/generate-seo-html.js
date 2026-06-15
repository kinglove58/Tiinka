import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import {
  BASE_URL,
  BLOG_API_URL,
  createBlogSlug,
  DEFAULT_IMAGE,
  getStaticAndServiceRoutes,
  stripHtml,
  toAbsoluteUrl,
  truncate,
} from "./seo-routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, "dist");
const INDEX_PATH = path.join(DIST_DIR, "index.html");
const SEO_PAGES_DIR = path.join(DIST_DIR, "seo-pages");
const NOT_FOUND_PATH = path.join(DIST_DIR, "404.html");

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const escapeAttribute = (value) =>
  escapeHtml(value).replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const escapeRegExp = (value) =>
  String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const upsertTag = (html, regex, tag) => {
  if (regex.test(html)) {
    return html.replace(regex, tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
};

const upsertMetaName = (html, name, content) =>
  upsertTag(
    html,
    new RegExp(`<meta\\s+name=["']${escapeRegExp(name)}["'][^>]*>`, "i"),
    `<meta name="${escapeAttribute(name)}" content="${escapeAttribute(content)}" />`,
  );

const upsertMetaProperty = (html, property, content) =>
  upsertTag(
    html,
    new RegExp(
      `<meta\\s+property=["']${escapeRegExp(property)}["'][^>]*>`,
      "i",
    ),
    `<meta property="${escapeAttribute(property)}" content="${escapeAttribute(content)}" />`,
  );

const routeToSeoFilePath = (routePath) => {
  const cleanPath = routePath.replace(/^\/+/, "");
  return path.join(SEO_PAGES_DIR, `${cleanPath}.html`);
};

const buildStructuredData = (route) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: route.title,
  url: toAbsoluteUrl(route.path),
  description: route.description,
  isPartOf: {
    "@type": "WebSite",
    name: "Tinka Health Services",
    url: BASE_URL,
  },
  publisher: {
    "@type": "MedicalOrganization",
    name: "Tinka Health Services",
    url: BASE_URL,
    logo: DEFAULT_IMAGE,
  },
});

const buildNoScriptContent = (route) => `
    <noscript>
      <main>
        <h1>${escapeHtml(route.h1 || route.title)}</h1>
        <p>${escapeHtml(route.description)}</p>
        <p><a href="${escapeAttribute(toAbsoluteUrl(route.path))}">${escapeHtml(toAbsoluteUrl(route.path))}</a></p>
      </main>
    </noscript>`;

const applySeo = (template, route) => {
  const canonicalUrl = toAbsoluteUrl(route.path);
  const image = route.image || DEFAULT_IMAGE;
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = upsertMetaName(html, "description", route.description);
  html = upsertMetaName(html, "keywords", route.keywords || "");
  html = upsertMetaName(html, "robots", route.robots || "index,follow");
  html = upsertTag(
    html,
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
  );

  html = upsertMetaProperty(html, "og:type", route.ogType || "website");
  html = upsertMetaProperty(html, "og:site_name", "Tinka Health Services");
  html = upsertMetaProperty(html, "og:title", route.title);
  html = upsertMetaProperty(html, "og:description", route.description);
  html = upsertMetaProperty(html, "og:url", canonicalUrl);
  html = upsertMetaProperty(html, "og:image", image);
  html = upsertMetaName(html, "twitter:card", "summary_large_image");
  html = upsertMetaName(html, "twitter:title", route.title);
  html = upsertMetaName(html, "twitter:description", route.description);
  html = upsertMetaName(html, "twitter:image", image);

  const structuredData = JSON.stringify(
    route.structuredData || buildStructuredData(route),
  ).replace(/</g, "\\u003c");
  html = html.replace(
    /<!-- SEO_STRUCTURED_DATA_START -->[\s\S]*?<!-- SEO_STRUCTURED_DATA_END -->\n?/,
    "",
  );
  html = html.replace(
    "</head>",
    `    <!-- SEO_STRUCTURED_DATA_START -->\n    <script type="application/ld+json">${structuredData}</script>\n    <!-- SEO_STRUCTURED_DATA_END -->\n  </head>`,
  );

  html = html.replace(
    /<noscript>\s*<main>[\s\S]*?<\/main>\s*<\/noscript>/i,
    "",
  );
  html = html.replace('<div id="root"></div>', `<div id="root"></div>${buildNoScriptContent(route)}`);

  return html;
};

const extractBlogs = async () => {
  try {
    const response = await axios.get(BLOG_API_URL);
    const data = response.data;
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.blogs)) return data.blogs;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.data?.blogs)) return data.data.blogs;
  } catch (error) {
    console.warn("Blog API unavailable during SEO HTML generation:", error.message);
  }
  return [];
};

const getBlogRoutes = async () => {
  const blogs = await extractBlogs();
  return blogs
    .map((blog) => ({
      ...blog,
      slug: blog?.slug || createBlogSlug(blog?.title),
    }))
    .filter((blog) => blog?.slug)
    .map((blog) => {
      const plainBody = stripHtml(blog.body);
      const description =
        blog.excerpt ||
        (plainBody
          ? truncate(plainBody)
          : "Read this mental health article from Tinka Health Services.");
      const image = blog.image
        ? `https://api.tinkahealthservices.com${blog.image}`
        : DEFAULT_IMAGE;

      return {
        path: `/blogs/${String(blog.slug).trim()}`,
        title: `${blog.title || "Mental Health Article"} | Tinka Health Services Blog`,
        description,
        keywords: Array.isArray(blog.keywords)
          ? blog.keywords.join(", ")
          : blog.keywords ||
            "mental health blog, psychiatry, medication management, telehealth psychiatry, maryland, washington dc, virginia",
        h1: blog.title || "Mental Health Article",
        image,
        ogType: "article",
      };
    });
};

const getRoutes = async () => {
  const routes = [...getStaticAndServiceRoutes(), ...(await getBlogRoutes())];
  const seen = new Set();
  return routes.filter((route) => {
    if (seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });
};

const writeRouteHtml = (route, html) => {
  if (route.path === "") {
    fs.writeFileSync(INDEX_PATH, html, "utf8");
    return;
  }

  const filePath = routeToSeoFilePath(route.path);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, "utf8");
};

const writeNotFoundHtml = (template) => {
  const notFoundRoute = {
    path: "/404",
    title: "Page Not Found | Tinka Health Services",
    description:
      "The requested page could not be found on Tinka Health Services.",
    keywords: "404, page not found",
    robots: "noindex,nofollow",
    h1: "Page Not Found",
  };
  fs.writeFileSync(NOT_FOUND_PATH, applySeo(template, notFoundRoute), "utf8");
};

async function generateSeoHtml() {
  if (!fs.existsSync(INDEX_PATH)) {
    throw new Error("dist/index.html was not found. Run this after vite build.");
  }

  const template = fs.readFileSync(INDEX_PATH, "utf8");
  const routes = await getRoutes();

  fs.rmSync(SEO_PAGES_DIR, { recursive: true, force: true });
  routes.forEach((route) => writeRouteHtml(route, applySeo(template, route)));
  writeNotFoundHtml(template);

  console.log(`Generated SEO HTML for ${routes.length} indexable routes.`);
}

generateSeoHtml().catch((error) => {
  console.error("Error generating SEO HTML:", error.message);
  throw error;
});
