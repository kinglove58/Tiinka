import servicesDataList from "../services/serviceData.js";
import { sanityConditions } from "../../generated/sanityConditions.js";

const preferredPathSlugs = {
  "Attention Deficit Hyperactivity Disorder": "add-adhd",
  "Obsessive Compulsive Disorder": "ocd",
  "Post Traumatic Stress Disorder": "ptsd",
  "Autism Spectrum Disorder": "autism",
};

export const createConditionSlug = (value = "") => {
  if (value == null) return "";

  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const stripText = (value = "") =>
  String(value).replace(/\s+/g, " ").trim();

const truncateText = (value = "", maxLength = 155) => {
  const text = stripText(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trim()}...`;
};

const toPortableParagraph = (text) =>
  text
    ? [
        {
          _type: "block",
          style: "normal",
          children: [{ _type: "span", text }],
        },
      ]
    : [];

const getPathSlug = (service, sanity) =>
  createConditionSlug(
    sanity?.pathSlug ||
      preferredPathSlugs[service.name] ||
      sanity?.slug ||
      service.name,
  );

export const getConditionHubPath = (condition) =>
  `/${condition.pathSlug}/default.htm`;

export const getConditionTopicPath = (condition, topic) =>
  `/${condition.pathSlug}/${topic.slug}.htm`;

const makeTopic = ({ title, summary, body, href, order }) => ({
  title,
  label: title,
  slug: createConditionSlug(title),
  summary,
  body: body?.length ? body : toPortableParagraph(summary),
  href,
  order,
});

const normalizeTopic = (topic, fallbackSummary) => {
  const title = topic?.title || topic?.label || "Topic";

  return {
    ...topic,
    title,
    label: title,
    slug: createConditionSlug(topic?.slug || title),
    summary: topic?.summary || fallbackSummary || "",
    body: topic?.body?.length
      ? topic.body
      : toPortableParagraph(topic?.summary || fallbackSummary || ""),
    order: Number.isFinite(topic?.order) ? topic.order : 9999,
  };
};

const sortByOrderThenTitle = (items = []) =>
  [...items].sort((a, b) => {
    const orderA = Number.isFinite(a?.order) ? a.order : 9999;
    const orderB = Number.isFinite(b?.order) ? b.order : 9999;

    if (orderA !== orderB) return orderA - orderB;
    return String(a?.title || "").localeCompare(String(b?.title || ""));
  });

const buildFallbackSections = (service) => [
  {
    title: `${service.name} overview`,
    slug: "overview",
    order: 10,
    visibleCount: 5,
    summary:
      service.title1Des ||
      service.id_sub ||
      `Learn what ${service.name} can look like and when psychiatric support may help.`,
    topics: [
      makeTopic({
        title: `What is ${service.name}?`,
        summary:
          service.title1Des ||
          `Learn the basics of ${service.name}, common symptoms, and when care may help.`,
      }),
      makeTopic({
        title: `${service.name} signs and symptoms`,
        summary:
          service.title2Des ||
          `Review signs and symptoms that may suggest ${service.name} is affecting daily life.`,
      }),
      makeTopic({
        title: `When to seek help for ${service.name}`,
        summary:
          "Consider reaching out when symptoms affect work, school, relationships, sleep, safety, or daily routines.",
      }),
    ],
  },
  {
    title: "Symptoms and daily impact",
    slug: "symptoms-daily-impact",
    order: 20,
    visibleCount: 5,
    summary:
      service.title2Des ||
      `${service.name} can affect mood, focus, sleep, relationships, work, or daily routines. A careful evaluation helps clarify what is happening and what kind of support fits.`,
    bullets: service.title2List || [],
    topics: [
      makeTopic({
        title: `${service.name} symptoms`,
        summary:
          service.title2Des ||
          `Understand the symptoms commonly discussed in ${service.name} care.`,
      }),
      makeTopic({
        title: `${service.name} in daily life`,
        summary:
          "Symptoms can show up differently at home, work, school, and in relationships.",
      }),
      makeTopic({
        title: `${service.name} warning signs`,
        summary:
          "Warning signs can help patients and families know when professional support is appropriate.",
      }),
    ],
  },
  {
    title: "Treatment and medication options",
    slug: "treatment-medication-options",
    order: 30,
    visibleCount: 5,
    summary:
      service.title3Des ||
      `Treatment for ${service.name} may include psychiatric evaluation, medication management, therapy support, and ongoing follow-up when clinically appropriate.`,
    bullets: service.title3List || [],
    topics: [
      makeTopic({
        title: `${service.name} treatment options`,
        summary:
          service.title3Des ||
          `Learn how treatment for ${service.name} may be planned and monitored.`,
      }),
      makeTopic({
        title: `${service.name} medication management`,
        summary:
          "Medication management includes review, monitoring, adjustment, and follow-up when medicine is clinically appropriate.",
      }),
      makeTopic({
        title: `Telehealth care for ${service.name}`,
        summary:
          "Eligible patients may be able to receive psychiatric evaluation and follow-up care by telehealth.",
      }),
    ],
  },
  {
    title: "Access care with Tinka Health Services",
    slug: "care-access",
    order: 40,
    visibleCount: 5,
    summary:
      "Tinka Health Services supports eligible patients across Maryland, Washington DC, and Virginia with psychiatric evaluation, medication management, telehealth appointments, and insurance verification before care begins.",
    topics: [
      makeTopic({
        title: "Book an appointment",
        summary:
          "Start with a clear appointment request so the care team can help you with next steps.",
        href: "/booking",
      }),
      makeTopic({
        title: "Check insurance",
        summary:
          "Review accepted insurance plans and prepare for benefit verification before your first visit.",
        href: "/insurance-we-accept",
      }),
    ],
  },
];

const getSanityKeys = (condition = {}) =>
  [
    condition.slug,
    condition.pathSlug,
    condition.title,
    condition.serviceSlug,
  ].map(createConditionSlug).filter(Boolean);

const sanityBySlug = sanityConditions.reduce((lookup, condition) => {
  getSanityKeys(condition).forEach((key) => {
    if (!lookup.has(key)) {
      lookup.set(key, condition);
    }
  });

  return lookup;
}, new Map());

const normalizeSections = (conditionTitle, sections = []) =>
  sortByOrderThenTitle(sections).map((section) => {
    const title = section?.title || `${conditionTitle} topics`;
    const sectionSlug = createConditionSlug(section?.slug || title);
    const rawTopics =
      Array.isArray(section?.topics) && section.topics.length > 0
        ? section.topics
        : section?.links || [];

    const normalizedTopics = rawTopics.map((topic, index) =>
      normalizeTopic(
        {
          ...topic,
          order: Number.isFinite(topic?.order) ? topic.order : index,
        },
        section?.summary,
      ),
    );

    return {
      ...section,
      title,
      slug: sectionSlug,
      visibleCount: Number.isFinite(section?.visibleCount)
        ? section.visibleCount
        : 5,
      topics: sortByOrderThenTitle(normalizedTopics),
    };
  });

const getMatchingSanityForService = (service) => {
  const legacySlug = createConditionSlug(service.id);
  const nameSlug = createConditionSlug(service.name);
  const preferredSlug = createConditionSlug(preferredPathSlugs[service.name]);
  const exactMatch = sanityBySlug.get(legacySlug) || sanityBySlug.get(nameSlug);

  if (exactMatch) {
    return { sanity: exactMatch, pathOnly: false };
  }

  if (preferredSlug && sanityBySlug.has(preferredSlug)) {
    return { sanity: sanityBySlug.get(preferredSlug), pathOnly: true };
  }

  return { sanity: null, pathOnly: false };
};

const buildServiceCondition = (service) => {
  const legacySlug = createConditionSlug(service.id);
  const { sanity, pathOnly } = getMatchingSanityForService(service);
  const hubSanity = pathOnly ? null : sanity;
  const title = hubSanity?.title || service.name;
  const summary =
    hubSanity?.summary ||
    service.id_sub ||
    truncateText(service.title1Des, 220);
  const pathSlug = getPathSlug(service, sanity);
  const sections =
    Array.isArray(sanity?.sections) && sanity.sections.length > 0
      ? normalizeSections(title, sanity.sections)
      : normalizeSections(title, buildFallbackSections(service));

  return {
    ...sanity,
    service,
    slug: legacySlug,
    pathSlug,
    aliases: [
      legacySlug,
      pathSlug,
      createConditionSlug(service.name),
      createConditionSlug(hubSanity?.slug),
      createConditionSlug(hubSanity?.pathSlug),
    ].filter(Boolean),
    title,
    summary,
    seoTitle: hubSanity?.seoTitle || `${title} Care Guide | Tinka Health`,
    metaDescription:
      hubSanity?.metaDescription ||
      truncateText(
        service.title1Des ||
          `${title} care information from Tinka Health Services.`,
      ),
    keywords:
      hubSanity?.keywords || [
        title,
        `${title} treatment`,
        `${title} medication management`,
        "telehealth psychiatry",
        "Maryland",
        "Washington DC",
        "Virginia",
      ],
    image: hubSanity?.image || service.image || "/images/logo/Tinka_health_logo.png",
    imageAlt:
      hubSanity?.imageAlt || service.imageAlt || `${title} care guide`,
    sections,
    body: hubSanity?.body,
  };
};

const buildSanityOnlyCondition = (sanity) => {
  const title = sanity?.title || "Condition";
  const slug = createConditionSlug(sanity?.slug || title);
  const pathSlug = createConditionSlug(sanity?.pathSlug || slug);
  const sections = normalizeSections(title, sanity?.sections || []);

  return {
    ...sanity,
    slug,
    pathSlug,
    aliases: [slug, pathSlug, createConditionSlug(title)].filter(Boolean),
    title,
    summary:
      sanity?.summary ||
      `${title} care information from Tinka Health Services.`,
    seoTitle: sanity?.seoTitle || `${title} Care Guide | Tinka Health`,
    metaDescription:
      sanity?.metaDescription ||
      `${title} care information from Tinka Health Services.`,
    keywords:
      sanity?.keywords || [
        title,
        `${title} treatment`,
        `${title} medication management`,
        "telehealth psychiatry",
      ],
    image: sanity?.image || "/images/logo/Tinka_health_logo.png",
    imageAlt: sanity?.imageAlt || `${title} care guide`,
    sections,
    body: sanity?.body,
  };
};

export const getConditionHubs = () => {
  const serviceHubs = servicesDataList
    .filter((service) => service?.id && service?.name)
    .map(buildServiceCondition);

  const usedAliases = new Set(
    serviceHubs.flatMap((condition) => condition.aliases || []),
  );
  const usedPathSlugs = new Set(
    serviceHubs.map((condition) => createConditionSlug(condition.pathSlug)),
  );
  const sanityOnlyHubs = sanityConditions
    .filter((sanity) => {
      const slug = createConditionSlug(sanity?.slug || sanity?.title);
      const pathSlug = createConditionSlug(sanity?.pathSlug || slug);

      return (
        slug &&
        !usedAliases.has(slug) &&
        !usedPathSlugs.has(pathSlug)
      );
    })
    .map(buildSanityOnlyCondition);

  return [...serviceHubs, ...sanityOnlyHubs];
};

export const getConditionHub = (slug) => {
  const normalizedSlug = createConditionSlug(slug);
  return getConditionHubs().find((condition) =>
    condition.aliases.includes(normalizedSlug),
  );
};

export const getConditionTopic = (conditionSlug, topicSlug) => {
  const condition = getConditionHub(conditionSlug);
  const normalizedTopicSlug = createConditionSlug(topicSlug);

  if (!condition) return null;

  for (const section of condition.sections) {
    const topic = section.topics?.find(
      (item) => createConditionSlug(item.slug) === normalizedTopicSlug,
    );

    if (topic) {
      return { condition, section, topic };
    }
  }

  return null;
};

export const getConditionTopicRoutes = () =>
  getConditionHubs().flatMap((condition) =>
    condition.sections.flatMap((section) =>
      (section.topics || [])
        .filter((topic) => !topic.href)
        .map((topic) => ({ condition, section, topic })),
    ),
  );
