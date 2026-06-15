import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClipboard,
  FiHelpCircle,
  FiShield,
} from "react-icons/fi";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";
import {
  seoHeroImage,
  seoTreatmentPageById,
  seoTreatmentPages,
} from "./seoPagesData";

const BASE_URL = "https://tinkahealthservices.com";

const fallbackPage = seoTreatmentPages[0];

const getPageImage = (page) => page.image || seoHeroImage;

const buildStructuredData = (page) => {
  const url = `${BASE_URL}${page.path}`;
  const image = `${BASE_URL}${getPageImage(page)}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: page.metaTitle,
      url,
      description: page.metaDescription,
      image,
      about: {
        "@type": "MedicalCondition",
        name: page.condition,
      },
      audience: {
        "@type": "PeopleAudience",
        geographicArea: page.location,
      },
      isPartOf: {
        "@type": "WebSite",
        name: "Tinka Health Services",
        url: BASE_URL,
      },
      publisher: {
        "@type": "MedicalOrganization",
        name: "Tinka Health Services",
        url: BASE_URL,
        telephone: "+1 443-295-6600",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalService",
      name: page.h1,
      url,
      serviceType: page.condition,
      provider: {
        "@type": "MedicalOrganization",
        name: "Tinka Health Services",
        url: BASE_URL,
        telephone: "+1 443-295-6600",
      },
      areaServed: page.location,
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: url,
        servicePhone: "+1 443-295-6600",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
};

const SeoTreatmentPage = ({ pageId }) => {
  const page = seoTreatmentPageById[pageId] || fallbackPage;
  const canonicalUrl = `${BASE_URL}${page.path}`;
  const structuredData = buildStructuredData(page);
  const pageImage = getPageImage(page);

  return (
    <main className="bg-[#f4f8fc] pt-20 text-[#06192f]">
      <CanonicalLink href={canonicalUrl} />
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="keywords" content={page.keywords.join(", ")} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${BASE_URL}${pageImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.metaTitle} />
        <meta name="twitter:description" content={page.metaDescription} />
        <meta name="twitter:image" content={`${BASE_URL}${pageImage}`} />
        {structuredData.map((item, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(item)}
          </script>
        ))}
      </Helmet>

      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.03fr_0.97fr] md:px-8 md:py-20 lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
              {page.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              {page.heroLead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookingLink className="inline-flex items-center justify-center rounded-full bg-[#005ab0] px-7 py-4 text-base font-bold text-white shadow-[0_16px_35px_rgba(0,90,176,0.22)] hover:bg-[#00427f]">
                Book an Appointment
              </BookingLink>
              <Link
                to="/insurance-we-accept"
                className="inline-flex items-center justify-center rounded-full border border-[#9fc8ee] bg-white px-7 py-4 text-base font-bold text-[#005ab0] shadow-sm transition hover:border-[#005ab0] hover:bg-[#f4f9fd]"
              >
                Check Insurance
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-[#cfe3f6] bg-[#eaf5ff] shadow-[0_28px_70px_-45px_rgba(0,90,176,0.45)]">
              <img
                src={pageImage}
                alt={page.imageAlt || `${page.h1} with Tinka Health Services`}
                className="h-72 w-full object-cover md:h-[520px]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="mt-4 rounded-lg border border-[#d8e9f8] bg-white p-5 shadow-lg md:absolute md:-bottom-6 md:left-10 md:right-10 md:mt-0">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#005ab0]">
                Quick answer
              </p>
              <p className="mt-2 text-base font-semibold leading-7 text-slate-800">
                {page.quickAnswer}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fc] px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
              Clear care
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              {page.introTitle}
            </h2>
          </div>
          <div className="rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm md:p-8">
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {page.conversionBullets.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#d8e9f8] bg-[#f4f9fd] p-4 text-sm font-bold leading-6 text-[#06192f]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 md:px-8 md:pb-16 md:pt-20 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm">
            <FiClipboard aria-hidden="true" className="h-8 w-8 text-[#005ab0]" />
            <h2 className="mt-5 text-2xl font-bold">
              {page.servicesTitle || "What this service covers"}
            </h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-slate-700">
              {page.services.map((item) => (
                <li key={item} className="flex gap-3">
                  <FiCheckCircle
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-[#005ab0]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm">
            <FiHelpCircle aria-hidden="true" className="h-8 w-8 text-[#005ab0]" />
            <h2 className="mt-5 text-2xl font-bold">
              {page.concernsTitle || "Reasons patients reach out"}
            </h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-slate-700">
              {page.concerns.map((item) => (
                <li key={item} className="flex gap-3">
                  <FiCheckCircle
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-[#005ab0]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-[#cfe3f6] bg-[#005ab0] p-6 text-white shadow-sm">
            <FiShield aria-hidden="true" className="h-8 w-8" />
            <h2 className="mt-5 text-2xl font-bold">Insurance-friendly care</h2>
            <p className="mt-5 text-base leading-7 text-blue-50">
              Tinka Health Services accepts Medicaid, Medicare, and many major
              insurance plans across Maryland, Washington DC, and Virginia.
              Benefits should be verified before your appointment.
            </p>
            <Link
              to="/insurance-we-accept"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-[#005ab0]"
            >
              Check Insurance
              <FiArrowRight aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {page.contentSections.map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-[#cfe3f6] bg-[#f4f9fd] p-6 md:p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
                {section.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#06192f]">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
              What to expect
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              {page.processTitle || "A simple path from first appointment to follow-up care"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              {page.processIntro ||
                "The goal is to make care clear from the beginning: understand the concern, review treatment options, and create a follow-up plan that can be adjusted over time."}
            </p>
          </div>

          <div className="space-y-4">
            {page.process.map((step, index) => (
              <article
                key={step}
                className="rounded-lg border border-[#cfe3f6] bg-[#f4f9fd] p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#005ab0]">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-lg font-semibold leading-8 text-slate-800">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
              Common questions
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Answers before you book
            </h2>
          </div>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#06192f]">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#005ab0] px-4 py-14 text-white md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
              Ready for care?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Start with one clear appointment.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <BookingLink className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-[#005ab0] hover:bg-blue-50">
              Book an Appointment
            </BookingLink>
            <Link
              to="/insurance-we-accept"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              Check Insurance
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeoTreatmentPage;
