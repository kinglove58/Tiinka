import servicesDataList from "../services/serviceData.js";
import { sanityConditions } from "../../generated/sanityConditions.js";

export const createConditionSlug = (value = "") =>
  String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const stripText = (value = "") =>
  String(value).replace(/\s+/g, " ").trim();

const truncateText = (value = "", maxLength = 155) => {
  const text = stripText(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trim()}...`;
};

const makeTopic = (label) => ({
  label,
  slug: createConditionSlug(label),
});

const buildFallbackSections = (service) => [
  {
    title: `${service.name} overview`,
    slug: "overview",
    summary:
      service.title1Des ||
      service.id_sub ||
      `Learn what ${service.name} can look like and when psychiatric support may help.`,
    links: [
      makeTopic(`What is ${service.name}?`),
      makeTopic(`${service.name} signs and symptoms`),
      makeTopic(`When to seek help for ${service.name}`),
    ],
  },
  {
    title: "Symptoms and daily impact",
    slug: "symptoms-daily-impact",
    summary:
      service.title2Des ||
      `${service.name} can affect mood, focus, sleep, relationships, work, or daily routines. A careful evaluation helps clarify what is happening and what kind of support fits.`,
    bullets: service.title2List || [],
    links: [
      makeTopic(`${service.name} symptoms`),
      makeTopic(`${service.name} in daily life`),
      makeTopic(`${service.name} warning signs`),
    ],
  },
  {
    title: "Treatment and medication options",
    slug: "treatment-medication-options",
    summary:
      service.title3Des ||
      `Treatment for ${service.name} may include psychiatric evaluation, medication management, therapy support, and ongoing follow-up when clinically appropriate.`,
    bullets: service.title3List || [],
    links: [
      makeTopic(`${service.name} treatment options`),
      makeTopic(`${service.name} medication management`),
      makeTopic(`Telehealth care for ${service.name}`),
    ],
  },
  {
    title: "Access care with Tinka Health Services",
    slug: "care-access",
    summary:
      "Tinka Health Services supports eligible patients across Maryland, Washington DC, and Virginia with psychiatric evaluation, medication management, telehealth appointments, and insurance verification before care begins.",
    links: [
      {
        label: "Book an appointment",
        slug: "book-appointment",
        href: "/booking",
      },
      {
        label: "Check insurance",
        slug: "check-insurance",
        href: "/insurance-we-accept",
      },
    ],
  },
];

const sanityBySlug = new Map(
  sanityConditions
    .filter((condition) => condition?.slug)
    .map((condition) => [createConditionSlug(condition.slug), condition]),
);

export const getConditionHubs = () =>
  servicesDataList
    .filter((service) => service?.id && service?.name)
    .map((service) => {
      const slug = createConditionSlug(service.id);
      const sanity =
        sanityBySlug.get(slug) ||
        sanityBySlug.get(createConditionSlug(service.name));
      const title = sanity?.title || service.name;
      const summary =
        sanity?.summary ||
        service.id_sub ||
        truncateText(service.title1Des, 220);

      return {
        ...sanity,
        service,
        slug,
        title,
        summary,
        seoTitle: sanity?.seoTitle || `${title} Care Guide | Tinka Health`,
        metaDescription:
          sanity?.metaDescription ||
          truncateText(
            service.title1Des ||
              `${title} care information from Tinka Health Services.`,
          ),
        keywords:
          sanity?.keywords || [
            title,
            `${title} treatment`,
            `${title} medication management`,
            "telehealth psychiatry",
            "Maryland",
            "Washington DC",
            "Virginia",
          ],
        image: sanity?.image || service.image || "/images/logo/Tinka_health_logo.png",
        imageAlt: service.imageAlt || `${title} care guide`,
        sections:
          Array.isArray(sanity?.sections) && sanity.sections.length > 0
            ? sanity.sections
            : buildFallbackSections(service),
        body: sanity?.body,
      };
    });

export const getConditionHub = (slug) =>
  getConditionHubs().find(
    (condition) => condition.slug === createConditionSlug(slug),
  );
