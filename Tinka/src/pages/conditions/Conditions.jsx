import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import CanonicalLink from "../../components/CanonicalLink";
import { sanityConditions } from "../../generated/sanityConditions";

const canonicalUrl = "https://tinkahealthservices.com/conditions";

const Conditions = () => (
  <main className="bg-[#f4f8fc] px-4 pb-16 pt-28 text-[#06192f] md:px-8 lg:px-12">
    <CanonicalLink href={canonicalUrl} />
    <Helmet>
      <title>Conditions We Support | Tinka Health Services</title>
      <meta
        name="description"
        content="Explore mental health conditions supported by Tinka Health Services, including evaluation, medication management, telehealth care, and insurance-friendly access."
      />
      <meta
        name="keywords"
        content="mental health conditions, psychiatric conditions, anxiety care, depression care, ADHD care, medication management"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Conditions We Support | Tinka Health Services"
      />
      <meta
        property="og:description"
        content="Explore mental health conditions supported by Tinka Health Services across Maryland, DC, and Virginia."
      />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>

    <section className="mx-auto max-w-7xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
        Conditions
      </p>
      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
        Find care by condition
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 md:text-lg">
        Review condition-specific care pages for psychiatric evaluation,
        medication management, therapy support, telehealth access, and insurance
        guidance.
      </p>

      {sanityConditions.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sanityConditions.map((condition) => (
            <article
              key={condition._id || condition.slug}
              className="flex min-h-[220px] flex-col rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#eaf5ff] text-[#005ab0]">
                <FiSearch aria-hidden="true" className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#06192f]">
                {condition.title}
              </h2>
              <p className="mt-3 flex-1 leading-7 text-slate-700">
                {condition.summary ||
                  condition.metaDescription ||
                  "Learn about care options from Tinka Health Services."}
              </p>
              <Link
                to={`/conditions/condition/${condition.slug}`}
                className="mt-5 inline-flex items-center gap-2 font-bold text-[#005ab0] transition hover:text-[#00427f]"
              >
                Learn more
                <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Condition pages are being prepared</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            The website is ready for Sanity-powered condition pages. Once
            condition content is published in Sanity and the site rebuilds,
            those pages will appear here.
          </p>
        </div>
      )}
    </section>
  </main>
);

export default Conditions;
