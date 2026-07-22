const { getCliClient } = require("@sanity/cli");
const { createHash } = require("node:crypto");

const main = async () => {
const { default: servicesDataList } = await import(
  "../../Tinka/src/pages/services/serviceData.js"
);
const { getConditionImage } = await import(
  "../../Tinka/src/pages/conditions/conditionImageData.js"
);
const client = getCliClient({ apiVersion: "2025-06-16" });
const shouldApply = process.argv.includes("--apply");
const today = new Date().toISOString().slice(0, 10);

const preferredPathSlugs = {
  "Attention Deficit Hyperactivity Disorder": "add-adhd",
  "Obsessive Compulsive Disorder": "ocd",
  "Post Traumatic Stress Disorder": "ptsd",
  "Autism Spectrum Disorder": "autism",
};

const shortNames = {
  "Attention Deficit Hyperactivity Disorder": "ADHD",
  "Obsessive Compulsive Disorder": "OCD",
  "Post Traumatic Stress Disorder": "PTSD",
  "Opioid Medication Assistant Treatment": "Opioid MAT",
};

const createSlug = (value = "") =>
  String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const createDraftId = (baseId) => {
  const prefix = "drafts.";
  const fullId = `${prefix}${baseId}`;

  if (fullId.length <= 128) return fullId;

  const digest = createHash("sha1").update(baseId).digest("hex").slice(0, 10);
  const availableLength = 128 - prefix.length - digest.length - 1;
  const shortenedBase = baseId
    .slice(0, availableLength)
    .replace(/[-_.]+$/g, "");

  return `${prefix}${shortenedBase}-${digest}`;
};

const cleanText = (value = "") => String(value).replace(/\s+/g, " ").trim();

const truncate = (value, maxLength) => {
  const text = cleanText(value);
  if (text.length <= maxLength) return text;

  const shortened = text.slice(0, maxLength - 1);
  const boundary = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, boundary > maxLength * 0.7 ? boundary : undefined).trim()}.`;
};

const ensureMinLength = (value, fallback, minLength) => {
  const text = cleanText(value);
  return text.length >= minLength ? text : `${text} ${fallback}`.trim();
};

const block = (key, text, style = "normal") => ({
  _key: key,
  _type: "block",
  style,
  markDefs: [],
  children: [
    {
      _key: `${key}-span`,
      _type: "span",
      marks: [],
      text,
    },
  ],
});

const draftReference = (id, type) => ({
  _type: "reference",
  _ref: id,
  _weak: true,
  _strengthenOnPublish: { type },
});

const makeSummary = (service) =>
  truncate(
    ensureMinLength(
      service.title1Des || service.id_sub,
      `Learn about ${service.name}, possible symptoms, evaluation, and care options from Tinka Health Services.`,
      80,
    ),
    300,
  );

const makeMetaDescription = (name) =>
  truncate(
    `Learn about ${name} symptoms, evaluation, treatment, medication management, and telehealth care from Tinka Health Services in Maryland, DC, and Virginia.`,
    165,
  );

const articleBody = ({ articleTitle, conditionName, sectionTitle, summary }) => [
  block("intro-heading", `Understanding ${articleTitle}`, "h2"),
  block("intro-copy", summary),
  block("care-heading", "What to discuss with a psychiatric provider", "h2"),
  block(
    "care-copy",
    `This starter article is ready for clinical review and expansion in Sanity. Add condition-specific information about ${conditionName}, practical next steps, and the role of professional assessment before publishing it.`,
  ),
  block("next-heading", `Next steps for ${sectionTitle.toLowerCase()}`, "h2"),
  block(
    "next-copy",
    "Review symptoms, medical history, daily impact, treatment goals, and safety questions with a qualified healthcare professional. This page is educational and is not a diagnosis or emergency service.",
  ),
];

const sectionTemplates = (conditionName) => [
  {
    title: "Overview",
    slug: "overview",
    order: 10,
    summary: `Start with clear, practical information about ${conditionName} and how it may affect daily life.`,
    articles: [
      [`What Is ${conditionName}?`, `Learn the basics of ${conditionName}, how it may present, and why a professional evaluation can be useful.`],
      [`${conditionName} and Daily Life`, `Explore how ${conditionName} may affect routines, relationships, work, school, sleep, and overall well-being.`],
      [`When to Seek Help for ${conditionName}`, `Understand when symptoms or changes in daily functioning may be a reason to contact a qualified healthcare professional.`],
    ],
  },
  {
    title: "Symptoms",
    slug: "symptoms",
    order: 20,
    summary: `Review possible signs of ${conditionName} and the ways symptoms can differ from person to person.`,
    articles: [
      [`Common Signs and Symptoms of ${conditionName}`, `Review commonly discussed signs of ${conditionName} and why symptoms should be considered in context.`],
      [`How ${conditionName} Can Affect Daily Functioning`, `Learn how symptoms may influence concentration, mood, behavior, sleep, relationships, or responsibilities.`],
      [`${conditionName} Warning Signs`, `Learn which changes may call for timely professional support and when urgent help may be appropriate.`],
    ],
  },
  {
    title: "Diagnosis",
    slug: "diagnosis",
    order: 30,
    summary: `Learn how clinicians evaluate ${conditionName} and rule out other concerns that can cause similar symptoms.`,
    articles: [
      [`How ${conditionName} Is Evaluated`, `See what a careful evaluation may include, from symptoms and history to daily impact and possible overlapping conditions.`],
      [`Preparing for a ${conditionName} Evaluation`, `Prepare useful information about symptoms, medications, health history, sleep, stress, and treatment goals.`],
      [`Questions to Ask About ${conditionName}`, `Use practical questions to understand evaluation findings, care options, follow-up, and safety considerations.`],
    ],
  },
  {
    title: "Treatment",
    slug: "treatment",
    order: 40,
    summary: `Explore treatment and support options for ${conditionName}, based on individual needs and clinical assessment.`,
    articles: [
      [`${conditionName} Treatment Options`, `Learn how a care plan may combine education, therapy support, lifestyle strategies, medication, and follow-up when appropriate.`],
      [`Therapy and Practical Support for ${conditionName}`, `Explore skills and supports that may help patients manage symptoms and improve daily functioning.`],
      [`Creating a Care Plan for ${conditionName}`, `Understand how goals, preferences, symptoms, health history, and follow-up can shape an individualized care plan.`],
    ],
  },
  {
    title: "Medication Management",
    slug: "medication-management",
    order: 50,
    summary: `Understand the role of medication review, monitoring, and follow-up in ${conditionName} care when clinically appropriate.`,
    articles: [
      [`Medication Management for ${conditionName}`, `Learn what medication management may involve and why prescribing decisions require an individualized clinical assessment.`],
      [`What to Expect During Medication Follow-Up`, `Review the symptoms, benefits, side effects, adherence, and safety questions commonly discussed during follow-up.`],
      [`Medication Safety and Monitoring`, `Understand why medication lists, health changes, side effects, and regular communication matter during treatment.`],
    ],
  },
  {
    title: "Telehealth and Insurance",
    slug: "telehealth-insurance",
    order: 60,
    summary: `Learn how eligible patients may access ${conditionName} care through telehealth and insurance-supported services.`,
    articles: [
      [`Telehealth Care for ${conditionName} in Maryland, DC, and Virginia`, `Learn how eligible patients may receive psychiatric evaluation and follow-up care through convenient telehealth appointments.`],
      [`Insurance and Cost Questions for ${conditionName} Care`, `Review insurance verification, copays, deductibles, and other questions to ask before an appointment.`],
      [`Preparing for Your First ${conditionName} Appointment`, `Gather the information your care team may need so the first conversation can focus on symptoms, goals, and next steps.`],
    ],
  },
];

const buildDraftDocuments = (service) => {
  const conditionName = service.name;
  const displayName = shortNames[conditionName] || conditionName;
  const serviceSlug = createSlug(service.id || conditionName);
  const pathSlug = preferredPathSlugs[conditionName] || serviceSlug;
  const conditionId = `condition-${pathSlug}`;
  const conditionImage = getConditionImage(conditionName);
  const imageUrl =
    conditionImage?.src ||
    service.image ||
    (conditionName === "Bipolar Disorder"
      ? "/images/services/Bipolar_Disorder.jpg"
      : "/images/services/Mental_Health.jpg");
  const imageAlt =
    conditionImage?.alt ||
    service.imageAlt ||
    `${conditionName} psychiatric care and support`;
  const sections = sectionTemplates(conditionName);

  const condition = {
    _id: createDraftId(conditionId),
    _type: "condition",
    title: `${displayName} Care`,
    slug: { _type: "slug", current: serviceSlug },
    pathSlug: { _type: "slug", current: pathSlug },
    serviceSlug,
    summary: makeSummary(service),
    imageUrl,
    imageAlt,
    seoTitle: truncate(`${displayName} Care Guide | Tinka Health`, 60),
    metaDescription: makeMetaDescription(displayName),
    keywords: [
      displayName,
      `${displayName} symptoms`,
      `${displayName} evaluation`,
      `${displayName} treatment`,
      `${displayName} medication management`,
      "telehealth psychiatry",
      "Maryland",
      "Washington DC",
      "Virginia",
    ],
    body: [
      block("hub-heading", `Understanding ${displayName} care`, "h2"),
      block("hub-copy", makeSummary(service)),
      block("hub-review", "This hub is a draft. Review and expand each section and article before publishing the full condition cluster."),
    ],
    updatedAt: today,
  };

  const sectionDocuments = sections.map((section) => {
    const sectionId = `condition-section-${pathSlug}-${section.slug}`;

    return {
      _id: createDraftId(sectionId),
      _type: "conditionSection",
      title: section.title,
      slug: { _type: "slug", current: section.slug },
      condition: draftReference(conditionId, "condition"),
      summary: section.summary,
      imageUrl,
      imageAlt: `${conditionName} ${section.title.toLowerCase()} guide`,
      order: section.order,
      visibleCount: 3,
      updatedAt: today,
    };
  });

  const articleDocuments = sections.flatMap((section) => {
    const sectionId = `condition-section-${pathSlug}-${section.slug}`;

    return section.articles.map(([title, rawSummary], index) => {
      const slug = createSlug(title);
      const summary = truncate(rawSummary, 220);

      return {
        _id: createDraftId(`condition-article-${pathSlug}-${slug}`),
        _type: "conditionArticle",
        title,
        slug: { _type: "slug", current: slug },
        condition: draftReference(conditionId, "condition"),
        section: draftReference(sectionId, "conditionSection"),
        summary,
        imageUrl,
        imageAlt: `${title} - ${conditionName} care information`,
        seoTitle: truncate(`${title} | Tinka Health`, 60),
        metaDescription: truncate(
          `${summary} Get clear information from Tinka Health Services for patients in Maryland, DC, and Virginia.`,
          165,
        ),
        keywords: [
          displayName,
          title,
          `${displayName} care`,
          `${displayName} treatment`,
          "telehealth psychiatry",
        ],
        body: articleBody({
          articleTitle: title,
          conditionName: displayName,
          sectionTitle: section.title,
          summary,
        }),
        order: (index + 1) * 10,
        updatedAt: today,
      };
    });
  });

  return [condition, ...sectionDocuments, ...articleDocuments];
};

const existingConditions = await client.fetch(
  `*[_type == "condition"]{_id, "slug": slug.current, "pathSlug": pathSlug.current, serviceSlug}`,
  {},
  { perspective: "raw" },
);

const libraryStats = await client.fetch(
  `{
    "conditions": count(*[_type == "condition"]),
    "conditionDrafts": count(*[_type == "condition" && _id in path("drafts.**")]),
    "sections": count(*[_type == "conditionSection"]),
    "sectionDrafts": count(*[_type == "conditionSection" && _id in path("drafts.**")]),
    "articles": count(*[_type == "conditionArticle"]),
    "articleDrafts": count(*[_type == "conditionArticle" && _id in path("drafts.**")]),
    "draftsWithoutImage": count(*[
      _type in ["condition", "conditionSection", "conditionArticle"] &&
      _id in path("drafts.**") &&
      !defined(imageUrl) &&
      !defined(image.asset)
    ])
  }`,
  {},
  { perspective: "raw" },
);

const existingKeys = new Set(
  existingConditions.flatMap((condition) =>
    [condition._id, condition.slug, condition.pathSlug, condition.serviceSlug]
      .map((value) => createSlug(String(value || "").replace(/^drafts\./, "")))
      .filter(Boolean),
  ),
);

const missingServices = servicesDataList.filter((service) => {
  const serviceSlug = createSlug(service.id || service.name);
  const pathSlug = preferredPathSlugs[service.name] || serviceSlug;
  const candidates = [
    serviceSlug,
    pathSlug,
    createSlug(service.name),
    createSlug(`condition-${pathSlug}`),
  ];

  return !candidates.some((candidate) => existingKeys.has(candidate));
});

const documents = missingServices.flatMap(buildDraftDocuments);

console.log(
  `Found ${existingConditions.length} existing condition record(s). ${missingServices.length} condition hub(s) are missing.`,
);
console.log(
  `Current library: ${libraryStats.conditions} hubs (${libraryStats.conditionDrafts} drafts), ${libraryStats.sections} sections (${libraryStats.sectionDrafts} drafts), and ${libraryStats.articles} articles (${libraryStats.articleDrafts} drafts).`,
);
console.log(
  `Draft records without an image: ${libraryStats.draftsWithoutImage}.`,
);
console.log(
  `Prepared ${documents.length} draft documents: ${missingServices.length} hubs, ${missingServices.length * 6} sections, and ${missingServices.length * 18} articles.`,
);

if (!shouldApply) {
  console.log("Dry run only. Re-run with --apply to create the drafts.");
  process.exit(0);
}

const batchSize = 50;
let created = 0;

for (let index = 0; index < documents.length; index += batchSize) {
  const batch = documents.slice(index, index + batchSize);
  let transaction = client.transaction();

  batch.forEach((document) => {
    transaction = transaction.createIfNotExists(document);
  });

  await transaction.commit({ visibility: "async" });
  created += batch.length;
  console.log(`Processed ${created}/${documents.length} draft documents.`);
}

console.log(
  "Condition library seed completed. Existing records were preserved and no document was published.",
);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
