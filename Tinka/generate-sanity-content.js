import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GENERATED_DIR = path.join(__dirname, "src", "generated");
const CONDITIONS_PATH = path.join(GENERATED_DIR, "sanityConditions.js");

const {
  SANITY_PROJECT_ID,
  SANITY_DATASET = "production",
  SANITY_API_VERSION = "2025-06-16",
  SANITY_READ_TOKEN,
} = process.env;

const conditionQuery = `*[_type == "condition" && defined(slug.current)] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  "pathSlug": pathSlug.current,
  summary,
  seoTitle,
  metaDescription,
  keywords,
  body,
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
      "image": image.asset->url,
      href
    },
    links[]{
      label,
      "slug": coalesce(slug.current, slug),
      summary,
      href
    }
  },
  "image": image.asset->url,
  "updatedAt": coalesce(updatedAt, _updatedAt)
}`;

const writeConditions = (conditions) => {
  fs.mkdirSync(GENERATED_DIR, { recursive: true });
  const serialized = JSON.stringify(conditions, null, 2).replace(/</g, "\\u003c");
  fs.writeFileSync(
    CONDITIONS_PATH,
    `export const sanityConditions = ${serialized};\n`,
    "utf8",
  );
};

const fetchConditions = async () => {
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
  url.searchParams.set("query", conditionQuery);

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
  writeConditions(Array.isArray(data.result) ? data.result : []);
  console.log(
    `Generated ${Array.isArray(data.result) ? data.result.length : 0} Sanity condition pages.`,
  );
};

fetchConditions().catch((error) => {
  console.warn("Sanity content generation failed:", error.message);
  writeConditions([]);
});
