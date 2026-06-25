import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiShield } from "react-icons/fi";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";
import PortableText from "./portableText";
import { createConditionSlug, getConditionHub } from "./conditionHubData";

const BASE_URL = "https://tinkahealthservices.com";

const textFromBlocks = (blocks = []) =>
  blocks
    .flatMap((block) => block?.children || [])
    .map((child) => child?.text || "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

const getSectionId = (section, index) =>
  createConditionSlug(section?.slug || section?.title || `section-${index + 1}`);

const getAbsoluteImage = (image) => {
  if (!image) return `${BASE_URL}/images/logo/Tinka_health_logo.png`;
  return image.startsWith("http") ? image : `${BASE_URL}${image}`;
};

const ConditionDetail = () => {
  const { slug } = useParams();
  const condition = getConditionHub(slug);

  if (!condition) {
    return (
      <main className="bg-[#f4f8fc] px-4 pb-16 pt-28 text-center text-[#06192f]">
        <h1 className="text-3xl font-extrabold">Condition page not found</h1>
        <Link
          to="/conditions"
          className="mt-5 inline-flex font-bold text-[#005ab0] hover:text-[#00427f]"
        >
          View all conditions
        </Link>
      </main>
    );
  }

  const canonicalUrl = `${BASE_URL}/conditions/condition/${condition.slug}`;
  const fallbackDescription =
    condition.summary ||
    textFromBlocks(condition.body).slice(0, 155) ||
    `${condition.title} care information from Tinka Health Services.`;
  const description = condition.metaDescription || fallbackDescription;
  const title =
    condition.seoTitle || `${condition.title} Care | Tinka Health Services`;
  const keywords = Array.isArray(condition.keywords)
    ? condition.keywords.join(", ")
    : condition.keywords ||
      `${condition.title}, psychiatric evaluation, medication management, telehealth psychiatry, Maryland, Washington DC, Virginia`;
  const sections = condition.sections || [];
  const ogImage = getAbsoluteImage(condition.image);

  return (
    <main className="bg-[#f4f8fc] text-[#06192f]">
      <CanonicalLink href={canonicalUrl} />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: title,
            url: canonicalUrl,
            description,
            about: {
              "@type": "MedicalCondition",
              name: condition.title,
            },
            publisher: {
              "@type": "MedicalOrganization",
              name: "Tinka Health Services",
              url: BASE_URL,
            },
          })}
        </script>
      </Helmet>

      <section className="bg-white px-4 py-16 pt-28 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            Condition guide
          </p>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.55fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
                {condition.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                {condition.summary || description}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <BookingLink className="inline-flex items-center justify-center gap-2 rounded-full bg-[#005ab0] px-6 py-4 font-bold text-white shadow-[0_16px_35px_rgba(0,90,176,0.22)] transition hover:bg-[#00427f]">
                  Book an Appointment
                  <FiArrowRight aria-hidden="true" />
                </BookingLink>
                <Link
                  to="/insurance-we-accept"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#9fc8ee] bg-white px-6 py-4 font-bold text-[#005ab0] shadow-sm transition hover:border-[#005ab0] hover:bg-[#f4f9fd]"
                >
                  <FiShield aria-hidden="true" />
                  Check Insurance
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#cfe3f6] bg-[#f8fbff] shadow-sm">
              <img
                src={condition.image}
                alt={condition.imageAlt}
                className="h-72 w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <nav
        aria-label={`${condition.title} topics`}
        className="sticky top-20 z-30 border-y border-[#d6e8f7] bg-white/95 px-4 py-4 backdrop-blur md:px-8 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
          {sections.map((section, index) => (
            <a
              key={getSectionId(section, index)}
              href={`#${getSectionId(section, index)}`}
              className="whitespace-nowrap rounded-full border border-[#cfe3f6] bg-[#f8fbff] px-4 py-2 text-sm font-bold text-[#005ab0] transition hover:border-[#005ab0] hover:bg-[#eaf5ff]"
            >
              {section.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-36 lg:self-start">
            <div className="overflow-hidden rounded-lg border border-[#cfe3f6] bg-white shadow-sm">
              <img
                src={condition.image}
                alt={condition.imageAlt}
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold">Care access</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Psychiatric evaluation, medication management, and eligible
                  telehealth care are available for patients across Maryland,
                  Washington DC, and Virginia.
                </p>
                <Link
                  to="/insurance-we-accept"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-[#005ab0] hover:text-[#00427f]"
                >
                  Check accepted insurance
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            {condition.body && (
              <article className="rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm md:p-8">
                <PortableText value={condition.body} />
              </article>
            )}

            {sections.map((section, index) => (
              <article
                id={getSectionId(section, index)}
                key={getSectionId(section, index)}
                className="scroll-mt-36 rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm md:p-8"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#005ab0]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
                  {section.title}
                </h2>
                {section.summary && (
                  <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                    {section.summary}
                  </p>
                )}

                <PortableText value={section.body} />

                {Array.isArray(section.bullets) && section.bullets.length > 0 && (
                  <ul className="mt-6 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 rounded-lg bg-[#f8fbff] p-4 leading-7 text-slate-700"
                      >
                        <FiCheckCircle
                          aria-hidden="true"
                          className="mt-1 h-5 w-5 shrink-0 text-[#005ab0]"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {Array.isArray(section.links) && section.links.length > 0 && (
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {section.links.map((link) => (
                      <TopicLink
                        key={`${section.title}-${link.label}`}
                        link={link}
                        sectionId={getSectionId(section, index)}
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const TopicLink = ({ link, sectionId }) => {
  const className =
    "group flex min-h-[74px] items-center justify-between gap-4 rounded-lg border border-[#d6e8f7] bg-[#f8fbff] px-4 py-3 font-bold text-[#06192f] transition hover:border-[#005ab0] hover:bg-[#eaf5ff]";

  if (link.href?.startsWith("/")) {
    return (
      <Link to={link.href} className={className}>
        <span>{link.label}</span>
        <FiArrowRight
          aria-hidden="true"
          className="shrink-0 text-[#005ab0] transition group-hover:translate-x-1"
        />
      </Link>
    );
  }

  return (
    <a href={`#${sectionId}`} className={className}>
      <span>{link.label}</span>
      <FiArrowRight
        aria-hidden="true"
        className="shrink-0 text-[#005ab0] transition group-hover:translate-x-1"
      />
    </a>
  );
};

export default ConditionDetail;
