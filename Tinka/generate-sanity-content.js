/* global process */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GENERATED_DIR = path.join(__dirname, "src", "generated");
const CONDITIONS_PATH = path.join(GENERATED_DIR, "sanityConditions.js");
const LOCAL_ENV_PATH = path.join(__dirname, ".env");

const loadLocalEnv = () => {
  if (!fs.existsSync(LOCAL_ENV_PATH)) return;

  const envText = fs.readFileSync(LOCAL_ENV_PATH, "utf8");

  envText.split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#") || !line.includes("=")) {
      return;
    }

    const [rawKey, ...valueParts] = line.split("=");
    const key = rawKey.trim();

    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key) || process.env[key]) {
      return;
    }

    let value = valueParts.join("=").trim();
    const isQuoted =
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"));

    if (isQuoted) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  });
};

loadLocalEnv();

const {
  SANITY_PROJECT_ID,
  SANITY_DATASET = "production",
  SANITY_API_VERSION = "2025-06-16",
  SANITY_READ_TOKEN,
} = process.env;

const contentQuery = `{
  "conditions": *[_type == "condition" && defined(slug.current)] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    "pathSlug": pathSlug.current,
    serviceSlug,
    summary,
    seoTitle,
    metaDescription,
    keywords,
    sections[]{
      title,
      "slug": coalesce(slug.current, slug),
      summary,
      body,
      bullets,
      topics[]{
        title,
        "slug": slug.current,
        summary,
        seoTitle,
        metaDescription,
        keywords,
        body,
        "image": coalesce(imageUrl, image.asset->url),
        imageAlt,
        href
      },
      links[]{
        label,
        "slug": coalesce(slug.current, slug),
        summary,
        href
      }
    },
    "image": coalesce(imageUrl, image.asset->url),
    imageAlt,
    "updatedAt": coalesce(updatedAt, _updatedAt)
  },
  "sections": *[_type == "conditionSection" && defined(slug.current) && defined(condition->_id)] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    "image": coalesce(imageUrl, image.asset->url),
    imageAlt,
    order,
    visibleCount,
    "conditionId": condition->_id,
    "conditionSlug": condition->slug.current,
    "updatedAt": coalesce(updatedAt, _updatedAt)
  },
  "articles": *[_type == "conditionArticle" && defined(slug.current) && defined(condition->_id) && defined(section->_id)] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    seoTitle,
    metaDescription,
    keywords,
    body,
    "image": coalesce(imageUrl, image.asset->url),
    imageAlt,
    order,
    "conditionId": condition->_id,
    "conditionSlug": condition->slug.current,
    "sectionId": section->_id,
    "sectionSlug": section->slug.current,
    "updatedAt": coalesce(updatedAt, _updatedAt)
  }
}`;

const createSlug = (value = "") =>
  String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const sortByOrderThenTitle = (items = []) =>
  [...items].sort((a, b) => {
    const orderA = Number.isFinite(a?.order) ? a.order : 9999;
    const orderB = Number.isFinite(b?.order) ? b.order : 9999;

    if (orderA !== orderB) return orderA - orderB;
    return String(a?.title || "").localeCompare(String(b?.title || ""));
  });

const normalizeTopic = (topic = {}) => ({
  ...topic,
  title: topic.title || topic.label || "Topic",
  label: topic.title || topic.label || "Topic",
  slug: createSlug(topic.slug || topic.title || topic.label),
});

const normalizeLegacySection = (section = {}) => {
  const rawTopics =
    Array.isArray(section.topics) && section.topics.length > 0
      ? section.topics
      : section.links || [];

  return {
    ...section,
    title: section.title || "Overview",
    slug: createSlug(section.slug || section.title || "overview"),
    visibleCount: section.visibleCount || 5,
    topics: rawTopics.map(normalizeTopic),
  };
};

const buildGroupedConditions = ({ conditions = [], sections = [], articles = [] }) =>
  conditions.map((condition) => {
    const sectionDocs = sortByOrderThenTitle(
      sections.filter((section) => section.conditionId === condition._id),
    );

    const groupedSections =
      sectionDocs.length > 0
        ? sectionDocs.map((section) => ({
            ...section,
            slug: createSlug(section.slug || section.title),
            visibleCount: section.visibleCount || 5,
            topics: sortByOrderThenTitle(
              articles.filter((article) => article.sectionId === section._id),
            ).map(normalizeTopic),
          }))
        : (condition.sections || []).map(normalizeLegacySection);

    return {
      ...condition,
      slug: createSlug(condition.slug || condition.title),
      pathSlug: createSlug(condition.pathSlug || condition.slug || condition.title),
      sections: groupedSections,
    };
  });

const writeConditions = (conditions, sections = [], articles = []) => {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
  const serializedConditions = JSON.stringify(conditions, null, 2).replace(
    /</g,
    "\\u003c",
  );
  const serializedSections = JSON.stringify(sections, null, 2).replace(
    /</g,
    "\\u003c",
  );
  const serializedArticles = JSON.stringify(articles, null, 2).replace(
    /</g,
    "\\u003c",
  );

  fs.writeFileSync(
    CONDITIONS_PATH,
    [
      `export const sanityConditions = ${serializedConditions};`,
      `export const sanityConditionSections = ${serializedSections};`,
      `export const sanityConditionArticles = ${serializedArticles};`,
      "",
    ].join("\n"),
    "utf8",
  );
};

const fetchContent = async () => {
  if (!SANITY_PROJECT_ID) {
    console.warn(
      "SANITY_PROJECT_ID is not set. Generated empty Sanity condition data.",
    );
    writeConditions([]);
    return;
  }

  const host = SANITY_READ_TOKEN
    ? `${SANITY_PROJECT_ID}.api.sanity.io`
    : `${SANITY_PROJECT_ID}.apicdn.sanity.io`;
  const url = new URL(
    `https://${host}/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`,
  );
  url.searchParams.set("query", contentQuery);

  const response = await fetch(url, {
    headers: SANITY_READ_TOKEN
      ? { Authorization: `Bearer ${SANITY_READ_TOKEN}` }
      : undefined,
  });

  if (!response.ok) {
    throw new Error(
      `Sanity request failed with ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();
  const result = data.result || {};
  const conditions = Array.isArray(result.conditions) ? result.conditions : [];
  const sections = Array.isArray(result.sections) ? result.sections : [];
  const articles = Array.isArray(result.articles) ? result.articles : [];
  const groupedConditions = buildGroupedConditions({
    conditions,
    sections,
    articles,
  });

  writeConditions(groupedConditions, sections, articles);
  console.log(
    `Generated ${groupedConditions.length} Sanity condition hubs, ${sections.length} sections, and ${articles.length} articles.`,
  );
};

fetchContent().catch((error) => {
  console.warn("Sanity content generation failed:", error.message);
  writeConditions([]);
});
