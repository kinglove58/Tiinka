export const SEO_BRAND = "Tinka Health";
export const DEFAULT_META_FALLBACK =
  "Learn about symptoms, treatment options, medication management, telehealth access, and insurance-friendly care with Tinka Health.";

const TITLE_MAX_LENGTH = 60;
const META_MIN_LENGTH = 110;
const META_MAX_LENGTH = 160;

const termReplacements = [
  [/Attention Deficit Hyperactivity Disorder/gi, "ADHD"],
  [/Obsessive[-\s]+Compulsive Disorder/gi, "OCD"],
  [/Post[-\s]+Traumatic Stress Disorder/gi, "PTSD"],
  [/Opioid Medication Assistant Treatment/gi, "Opioid MAT"],
  [/Opioid Medication Assisted Treatment/gi, "Opioid MAT"],
];

export const normalizeWhitespace = (value = "") =>
  String(value || "")
    .replace(/â€™/g, "'")
    .replace(/â€˜/g, "'")
    .replace(/â€œ|â€/g, '"')
    .replace(/â€“|â€”/g, "-")
    .replace(/â€¦/g, "...")
    .replace(/\s+/g, " ")
    .trim();

export const stripHtmlText = (value = "") =>
  normalizeWhitespace(String(value || "").replace(/<[^>]*>/g, " "));

const removeExistingBrand = (value = "") =>
  normalizeWhitespace(value)
    .replace(/\s*\|\s*Tinka Health Services Blog\s*$/i, "")
    .replace(/\s*\|\s*Tinka Health Services\s*$/i, "")
    .replace(/\s*\|\s*Tinka Health\s*$/i, "");

const applyTermReplacements = (value = "") =>
  termReplacements.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    value,
  );

const trimAtWord = (value = "", maxLength = 155) => {
  const text = normalizeWhitespace(value);
  if (text.length <= maxLength) return text;

  const slice = text.slice(0, maxLength + 1);
  const lastSpace = slice.lastIndexOf(" ");
  const trimmed =
    lastSpace > Math.floor(maxLength * 0.62)
      ? slice.slice(0, lastSpace)
      : text.slice(0, maxLength);

  const cleaned = normalizeWhitespace(trimmed.replace(/[,:;/-]+$/g, ""));
  if (cleaned.length <= maxLength) return cleaned;

  return normalizeWhitespace(cleaned.slice(0, maxLength).replace(/[,:;/-]+$/g, ""));
};

const endAsSentence = (value = "", maxLength = META_MAX_LENGTH) => {
  let text = trimAtWord(value, maxLength);
  if (!text) return text;
  if (/[.!?]$/.test(text)) return text;
  if (text.length >= maxLength) {
    text = trimAtWord(text, maxLength - 1);
  }
  return `${text.replace(/[,:;/-]+$/g, "")}.`;
};

export const buildBrandedSeoTitle = (
  title = "",
  { brand = SEO_BRAND, maxLength = TITLE_MAX_LENGTH } = {},
) => {
  const suffix = ` | ${brand}`;
  const maxCoreLength = Math.max(20, maxLength - suffix.length);
  const core = trimAtWord(
    applyTermReplacements(removeExistingBrand(title || "Mental Health Care")),
    maxCoreLength,
  );

  return `${core}${suffix}`;
};

export const normalizeMetaDescription = (
  value = "",
  fallback = DEFAULT_META_FALLBACK,
  { minLength = META_MIN_LENGTH, maxLength = META_MAX_LENGTH } = {},
) => {
  const primary = stripHtmlText(value);
  const backup = stripHtmlText(fallback || DEFAULT_META_FALLBACK);
  let description = primary || backup;

  if (description.length < minLength && backup && backup !== description) {
    description = `${description} ${backup}`;
  }

  if (description.length < minLength) {
    description = `${description} Tinka Health supports evaluation, treatment planning, medication management, and telehealth care when appropriate.`;
  }

  return endAsSentence(description, maxLength);
};

const slugify = (value = "") =>
  String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getConditionKey = (condition = {}) =>
  slugify(
    condition.pathSlug ||
      condition.slug ||
      condition.service?.id ||
      condition.title,
  );

const conditionNameOverrides = {
  "attention-deficit-hyperactivity-disorder": "ADHD",
  "add-adhd": "ADHD",
  ocd: "OCD",
  "obsessive-compulsive-disorder": "OCD",
  ptsd: "PTSD",
  "post-traumatic-stress-disorder": "PTSD",
  "opioid-medication-assistant-treatment": "opioid MAT",
  "autism-spectrum-disorder": "autism",
  autism: "autism",
};

const titleConditionOverrides = {
  ...conditionNameOverrides,
  "opioid-medication-assistant-treatment": "Opioid MAT",
  autism: "Autism",
  "autism-spectrum-disorder": "Autism",
};

const getConditionName = (condition = {}, titleCase = false) => {
  const key = getConditionKey(condition);
  const overrides = titleCase ? titleConditionOverrides : conditionNameOverrides;
  return overrides[key] || applyTermReplacements(condition.title || "mental health");
};

const lowerFirst = (value = "") => {
  const text = normalizeWhitespace(value);
  if (/^(ADHD|OCD|PTSD)\b/.test(text)) return text;
  return text.charAt(0).toLowerCase() + text.slice(1);
};

export const buildConditionTopicSeoTitle = (topic = {}, condition = {}) => {
  const rawTitle = topic.seoTitle || topic.title || "Mental Health Topic";
  const conditionTitle = condition.title || "";
  let core = applyTermReplacements(removeExistingBrand(rawTitle));

  if (conditionTitle) {
    const escapedCondition = conditionTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    core = core.replace(new RegExp(`\\s*\\|\\s*${escapedCondition}\\s*$`, "i"), "");
  }

  return buildBrandedSeoTitle(core);
};

export const buildConditionTopicMetaDescription = (topic = {}, condition = {}) => {
  const conditionName = getConditionName(condition);
  const titleCondition = getConditionName(condition, true);
  const title = normalizeWhitespace(topic.title || "");
  const key = slugify(topic.slug || title);
  const lowerTitle = title.toLowerCase();

  if (topic.metaDescription) {
    return normalizeMetaDescription(
      topic.metaDescription,
      topic.summary || DEFAULT_META_FALLBACK,
    );
  }

  let description = "";

  if (getConditionKey(condition) === "medication-management") {
    if (/signs|symptoms|warning/.test(key)) {
      description =
        "Review signs you may need psychiatric medication management, including side effects, limited benefit, safety concerns, and follow-up needs.";
    } else if (/what-is/.test(key)) {
      description =
        "Learn what psychiatric medication management includes, from medication review and monitoring to side-effect checks and follow-up care.";
    } else if (/telehealth/.test(key)) {
      description =
        "Learn how telehealth medication management can support psychiatric medication review, monitoring, side-effect checks, and follow-up care.";
    } else {
      description =
        "Learn how psychiatric medication management supports medication review, monitoring, side-effect checks, and ongoing follow-up care.";
    }
  } else if (/what-is/.test(key) || lowerTitle.startsWith("what is")) {
    description = `Learn what ${conditionName} is, common symptoms, treatment options, and when psychiatric support or medication management may help.`;
  } else if (/signs-and-symptoms|symptoms/.test(key)) {
    description = `Review common ${conditionName} signs and symptoms, how they can affect daily life, and when professional mental health support may help.`;
  } else if (/warning-signs/.test(key)) {
    description = `Learn warning signs of ${conditionName}, when symptoms may need attention, and how Tinka Health can help with next steps.`;
  } else if (/daily-life/.test(key)) {
    description = `Understand how ${conditionName} can affect work, school, relationships, sleep, and daily routines, plus when care may help.`;
  } else if (/treatment-options/.test(key)) {
    description = `Explore ${titleCondition} treatment options, including evaluation, therapy support, medication management, and follow-up care.`;
  } else if (/medication-management/.test(key)) {
    description = `Learn how medication management for ${conditionName} may work, including review, monitoring, side effects, and follow-up care.`;
  } else if (/telehealth/.test(key)) {
    description = `Learn how telehealth care for ${conditionName} can support evaluation, medication management, and follow-up visits when appropriate.`;
  } else if (/when-to-seek-help/.test(key)) {
    description = `Know when to seek help for ${conditionName}, what symptoms to watch for, and how to start mental health care with Tinka Health.`;
  } else {
    description = `Learn about ${lowerFirst(title)} for ${conditionName}, including symptoms, treatment options, and care access with Tinka Health.`;
  }

  return normalizeMetaDescription(description, topic.summary);
};

export const buildBlogSeoTitle = (title = "Mental Health Article") =>
  buildBrandedSeoTitle(title || "Mental Health Article");

export const buildBlogMetaDescription = (blog = {}) => {
  const plainBody = stripHtmlText(blog.body || "");
  return normalizeMetaDescription(
    blog.excerpt || plainBody,
    "Read this mental health article from Tinka Health about psychiatry, medication management, telehealth care, and behavioral health support.",
  );
};
