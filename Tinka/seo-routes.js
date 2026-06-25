import servicesDataList from "./src/pages/services/serviceData.js";
import { seoTreatmentRoutes } from "./src/pages/seo/seoPagesData.js";
import { getConditionHubs } from "./src/pages/conditions/conditionHubData.js";

export const BASE_URL = "https://tinkahealthservices.com";
export const BLOG_API_URL = "https://api.tinkahealthservices.com/api/blogs/30";
export const DEFAULT_IMAGE = `${BASE_URL}/images/logo/Tinka_health_logo.png`;

export const createBlogSlug = (title) =>
  String(title || "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();

export const staticRoutes = [
  {
    path: "",
    changefreq: "daily",
    priority: "1.0",
    title:
      "Psychiatric Provider MD, DC & VA | Tinka Health Services",
    description:
      "Medication management and mental health care in Maryland, DC, and Virginia with telehealth and insurance-friendly access.",
    keywords:
      "psychiatric provider maryland, psychiatric nurse practitioner maryland, pmhnp near me, mental health provider dc, psychiatric services virginia, medication management near me, telehealth psychiatry maryland, telehealth psychiatry dc, telehealth psychiatry virginia",
    h1: "Psychiatric care and medication management in MD, DC and VA",
  },
  {
    path: "/about",
    changefreq: "monthly",
    priority: "0.8",
    title: "About Tinka Health Services | Psychiatric Provider in MD, DC and VA",
    description:
      "Learn about Tinka Health Services, a psychiatric provider serving Maryland, DC, and Virginia with telehealth and medication management.",
    keywords:
      "psychiatric provider maryland, psychiatric provider washington dc, psychiatric provider virginia, medication management services, telehealth psychiatry appointments, accepting new patients",
    h1: "About Tinka Health Services",
  },
  {
    path: "/primary-preventive-care",
    changefreq: "monthly",
    priority: "0.8",
    title: "Primary Preventive Care | Tinka Health Services",
    description:
      "Primary preventive care services from Tinka Health Services help patients support long-term wellness with practical, patient-centered care.",
    keywords:
      "primary preventive care, preventive healthcare, wellness care, Tinka Health Services",
    h1: "Primary Preventive Care",
  },
  {
    path: "/meet-our-provider",
    changefreq: "monthly",
    priority: "0.8",
    title: "Meet Our Provider | Tinka Health Services",
    description:
      "Meet the psychiatric provider and care team behind Tinka Health Services, serving Maryland, Washington DC, and Virginia.",
    keywords:
      "psychiatric provider, mental health provider, Tinka Health Services provider",
    h1: "Meet Our Provider",
  },
  {
    path: "/blogs",
    changefreq: "weekly",
    priority: "0.8",
    title: "Mental Health Blog | Tinka Health Services",
    description:
      "Read mental health articles from Tinka Health Services about psychiatry, medication management, telehealth care, and behavioral health support.",
    keywords:
      "mental health blog, psychiatry blog, medication management, telehealth psychiatry",
    h1: "Mental Health Blog",
  },
  {
    path: "/policy",
    changefreq: "yearly",
    priority: "0.3",
    title: "Privacy Policy | Tinka Health Services",
    description:
      "Review the privacy policy and patient information practices for Tinka Health Services.",
    keywords: "privacy policy, patient privacy, Tinka Health Services policy",
    h1: "Privacy Policy",
  },
  {
    path: "/contact",
    changefreq: "weekly",
    priority: "0.9",
    title:
      "Contact Psychiatric Provider in MD, DC and VA | Tinka Health Services",
    description:
      "Contact Tinka Health Services to book telehealth psychiatry and medication management in Maryland, DC, and Virginia.",
    keywords:
      "contact psychiatric provider, telehealth psychiatry maryland, telehealth psychiatry dc, telehealth psychiatry virginia, medication management services, accepting new patients",
    h1: "Contact Tinka Health Services",
  },
  {
    path: "/referral",
    changefreq: "weekly",
    priority: "0.85",
    title: "Refer a Patient | Tinka Health Services",
    description:
      "Refer a patient to Tinka Health Services for psychiatric evaluation, medication management, therapy support, and telehealth care in MD, DC, and VA.",
    keywords:
      "refer a patient, psychiatry referral, mental health referral, medication management referral, psychiatric evaluation referral",
    h1: "Refer a Patient",
  },
  {
    path: "/search",
    changefreq: "monthly",
    priority: "0.55",
    title: "Search Tinka Health Services",
    description:
      "Search Tinka Health Services for mental health services, accepted insurance, locations, blog articles, and appointment information.",
    keywords:
      "search Tinka Health Services, mental health services search, psychiatry blog search, insurance search",
    h1: "Search Tinka Health Services",
  },
  {
    path: "/conditions",
    changefreq: "weekly",
    priority: "0.86",
    title: "Conditions We Support | Tinka Health Services",
    description:
      "Explore mental health conditions supported by Tinka Health Services, including evaluation, medication management, telehealth care, and insurance-friendly access.",
    keywords:
      "mental health conditions, psychiatric conditions, anxiety care, depression care, ADHD care, medication management",
    h1: "Find care by condition",
  },
  {
    path: "/booking",
    changefreq: "weekly",
    priority: "0.9",
    title: "Book an Appointment | Tinka Health Services",
    description:
      "Book a psychiatry appointment for medication management, psychiatric evaluation, and telehealth care in MD, DC, and VA.",
    keywords:
      "book psychiatry appointment, medication management appointment, telehealth psychiatry appointment, Klarity psychiatry, Grow Therapy psychiatry, SonderMind psychiatry, Rula psychiatry, Zocdoc psychiatry",
    h1: "Book an Appointment",
  },
  {
    path: "/services",
    changefreq: "weekly",
    priority: "0.9",
    title: "Mental Health Services in MD, DC and VA | Tinka Health Services",
    description:
      "Explore medication management, therapy support, telehealth psychiatry, and care for anxiety, depression, ADHD, PTSD, and more.",
    keywords:
      "mental health services maryland, mental health services washington dc, mental health services virginia, medication management services, telehealth psychiatry appointments, psychiatric provider near me",
    h1: "Mental Health Services",
  },
  {
    path: "/insurance-we-accept",
    changefreq: "weekly",
    priority: "0.9",
    title:
      "Psychiatrist Accepting Insurance in MD, DC & VA | Tinka Health",
    description:
      "See accepted insurance plans for mental health care, psychiatry, medication management, and telehealth in Maryland, DC, and Virginia.",
    keywords:
      "psychiatrist that accepts medicaid near me, psychiatrist that takes medicare, mental health insurance coverage, psychiatric insurance coverage, telehealth psychiatry insurance, carefirst psychiatrist maryland, kaiser psychiatrist dc",
    h1: "Insurance We Accept",
  },
  {
    path: "/maryland-psychiatrist",
    changefreq: "weekly",
    priority: "0.9",
    title:
      "Psychiatric Provider in Maryland | Tinka Health Services",
    description:
      "Find Maryland psychiatric care for anxiety, depression, ADHD, bipolar disorder, PTSD, and medication management with telehealth access.",
    keywords:
      "psychiatric provider in maryland, maryland psychiatrist accepting medicaid, telehealth psychiatry maryland, medication management maryland, maryland psychiatric nurse practitioner, psychiatrist accepting medicare maryland",
    h1: "Psychiatric Provider in Maryland",
  },
  {
    path: "/dc-psychiatrist",
    changefreq: "weekly",
    priority: "0.9",
    title:
      "Psychiatric Provider in Washington DC | Tinka Health",
    description:
      "Find Washington DC psychiatric care for anxiety, depression, ADHD, PTSD, and medication management with telehealth and insurance access.",
    keywords:
      "psychiatric provider in washington dc, dc medicaid psychiatrist, kaiser psychiatrist dc, telehealth psychiatry dc, amerihealth caritas dc mental health provider, medication management washington dc",
    h1: "Psychiatric Provider in Washington DC",
  },
  {
    path: "/virginia-psychiatrist",
    changefreq: "weekly",
    priority: "0.9",
    title:
      "Psychiatric Provider in Virginia | Tinka Health Services",
    description:
      "Find Virginia psychiatric care for anxiety, depression, ADHD, bipolar disorder, and medication management with telehealth access.",
    keywords:
      "psychiatric provider in virginia, telehealth psychiatry virginia, virginia medicaid psychiatrist, psychiatrist accepting medicare virginia, medication management virginia, mental health provider virginia",
    h1: "Psychiatric Provider in Virginia",
  },
  {
    path: "/psychiatric-provider-herndon-va",
    changefreq: "weekly",
    priority: "0.95",
    title:
      "Psychiatric Provider in Herndon, VA | Tinka Health",
    description:
      "Book psychiatric evaluations and medication management in Herndon, VA with telehealth psychiatry and accepted insurance plans.",
    keywords:
      "psychiatric provider Herndon VA, psychiatrist Herndon VA Medicaid, medication management Herndon VA, telehealth psychiatry Virginia, Virginia Medicaid psychiatrist, ADHD medication management Herndon, anxiety treatment Herndon VA, depression treatment Herndon VA",
    h1: "Psychiatric Provider in Herndon, VA",
    image:
      "https://tinkahealthservices.com/images/img_mental_health/hero/teletherapyimg.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name:
            "Psychiatric Provider in Herndon, VA | Medicaid & Telehealth | Tinka Health",
          url: "https://tinkahealthservices.com/psychiatric-provider-herndon-va",
          description:
            "Book psychiatric evaluations and medication management in Herndon, VA. Tinka Health offers telehealth psychiatry across Virginia and accepts Medicaid, Medicare, and major insurance.",
          isPartOf: {
            "@type": "WebSite",
            name: "Tinka Health Services",
            url: "https://tinkahealthservices.com",
          },
          about: {
            "@type": "MedicalSpecialty",
            name: "Psychiatry",
          },
        },
        {
          "@type": "MedicalClinic",
          "@id":
            "https://tinkahealthservices.com/psychiatric-provider-herndon-va#herndon-clinic",
          name: "Tinka Health Services - Herndon Psychiatry",
          url: "https://tinkahealthservices.com/psychiatric-provider-herndon-va",
          image:
            "https://tinkahealthservices.com/images/img_mental_health/hero/teletherapyimg.webp",
          telephone: "+1 571-349-8285",
          medicalSpecialty: "Psychiatry",
          address: {
            "@type": "PostalAddress",
            streetAddress: "585 Grove St, Suite 145",
            addressLocality: "Herndon",
            addressRegion: "VA",
            postalCode: "20170",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 38.9669109,
            longitude: -77.3802178,
          },
          areaServed: [
            { "@type": "City", name: "Herndon" },
            { "@type": "City", name: "Reston" },
            { "@type": "City", name: "Sterling" },
            { "@type": "City", name: "Fairfax" },
            { "@type": "State", name: "Virginia" },
          ],
          availableService: [
            { "@type": "MedicalService", name: "Psychiatric Evaluation" },
            { "@type": "MedicalService", name: "Medication Management" },
            { "@type": "MedicalService", name: "Telehealth Psychiatry" },
            { "@type": "MedicalService", name: "ADHD Medication Management" },
            { "@type": "MedicalService", name: "Anxiety Treatment" },
            { "@type": "MedicalService", name: "Depression Treatment" },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Are you accepting new psychiatry patients in Herndon, VA?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. Tinka Health Services is accepting new patients for psychiatric evaluations, medication management, and eligible telehealth psychiatry visits in Virginia. Appointment availability can change, so booking early is recommended.",
              },
            },
            {
              "@type": "Question",
              name: "Do you accept Virginia Medicaid, Medicare, and insurance?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Tinka Health Services accepts many insurance plans used by Virginia patients, including Medicaid (VA), Medicare, Aetna, Anthem, CareFirst, Cigna, Optum, Sentara Health Plan, Tricare, and VA Premier. Benefits should be verified before the first visit.",
              },
            },
            {
              "@type": "Question",
              name: "Can I book telehealth psychiatry if I live in Virginia?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Yes. Secure telehealth psychiatry may be available if you are located in Virginia at the time of your appointment and your plan allows virtual behavioral health care.",
              },
            },
            {
              "@type": "Question",
              name: "Do you provide ADHD medication management in Herndon?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Tinka Health Services provides psychiatric evaluation and medication management for ADHD and related attention concerns when clinically appropriate.",
              },
            },
            {
              "@type": "Question",
              name: "What mental health conditions do you treat?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Common concerns include anxiety, depression, ADHD, bipolar disorder, PTSD, insomnia, stress, burnout, mood concerns, and related behavioral health needs.",
              },
            },
          ],
        },
      ],
    },
  },
  {
    path: "/telehealth-psychiatry-md-dc-va",
    changefreq: "weekly",
    priority: "0.9",
    title:
      "Telehealth Psychiatry in MD, DC & VA | Tinka Health",
    description:
      "Get online psychiatric evaluations, medication management, and follow-up care from home in Maryland, DC, and Virginia.",
    keywords:
      "telehealth psychiatry maryland, telehealth psychiatry dc medicaid, telehealth psychiatry virginia, online psychiatric provider, virtual medication management, telehealth psychiatry covered by insurance",
    h1: "Telehealth Psychiatry in MD, DC and VA",
  },
  ...seoTreatmentRoutes,
];

export const normalizePath = (routePath) => {
  if (!routePath) return "";
  return routePath.startsWith("/") ? routePath : `/${routePath}`;
};

export const toAbsoluteUrl = (routePath) =>
  routePath === "" ? BASE_URL : `${BASE_URL}${normalizePath(routePath)}`;

export const stripHtml = (value) =>
  String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const truncate = (value, maxLength = 155) => {
  const text = stripHtml(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trim()}...`;
};

export const getServiceRoutes = () =>
  servicesDataList
    .filter((service) => service?.id)
    .map((service) => ({
      path: `/services/${service.id}`,
      changefreq: "weekly",
      priority: "0.8",
      title: `${service.name} | Tinka Health Services`,
      description:
        truncate(service.title1Des) ||
        `${service.name} services from Tinka Health Services.`,
      keywords: Array.isArray(service.keywords)
        ? service.keywords.join(", ")
        : service.keywords ||
          `${service.name}, medication management services, telehealth psychiatry appointments, psychiatric provider maryland, psychiatric provider washington dc, psychiatric provider virginia`,
      h1: service.name,
      image: service.image?.startsWith("http")
        ? service.image
        : service.image
          ? `${BASE_URL}${service.image}`
          : DEFAULT_IMAGE,
    }));

export const getConditionRoutes = () =>
  getConditionHubs()
    .filter((condition) => condition?.slug && condition?.title)
    .map((condition) => ({
      path: `/conditions/condition/${condition.slug}`,
      changefreq: "weekly",
      priority: "0.86",
      title:
        condition.seoTitle ||
        `${condition.title} Care | Tinka Health Services`,
      description:
        condition.metaDescription ||
        condition.summary ||
        `${condition.title} care information from Tinka Health Services.`,
      keywords: Array.isArray(condition.keywords)
        ? condition.keywords.join(", ")
        : condition.keywords ||
          `${condition.title}, psychiatric evaluation, medication management, telehealth psychiatry, Maryland, Washington DC, Virginia`,
      h1: condition.title,
    }));

export const getStaticAndServiceRoutes = () => [
  ...staticRoutes,
  ...getServiceRoutes(),
  ...getConditionRoutes(),
];
