import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiShield } from "react-icons/fi";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";
import { sanityConditions } from "../../generated/sanityConditions";
import PortableText from "./portableText";

const BASE_URL = "https://tinkahealthservices.com";

const textFromBlocks = (blocks = []) =>
  blocks
    .flatMap((block) => block?.children || [])
    .map((child) => child?.text || "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

const ConditionDetail = () => {
  const { slug } = useParams();
  const condition = sanityConditions.find((item) => item.slug === slug);

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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_0.55fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
              Condition care
            </p>
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

          <aside className="rounded-lg border border-[#cfe3f6] bg-[#f8fbff] p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Care access</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Tinka Health Services supports eligible patients across Maryland,
              Washington DC, and Virginia with convenient telehealth visits,
              psychiatric evaluations, medication management, and insurance
              verification before care begins.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <article className="mx-auto max-w-4xl rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm md:p-9">
          <PortableText value={condition.body} />
        </article>
      </section>
    </main>
  );
};

export default ConditionDetail;
