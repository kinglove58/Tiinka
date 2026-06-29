import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronDown,
  FiShield,
} from "react-icons/fi";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";
import PortableText from "./portableText";
import { getPortableTextHeadings } from "./portableTextUtils";
import {
  getConditionHubPath,
  getConditionTopic,
  getConditionTopicPath,
} from "./conditionHubData";

const BASE_URL = "https://tinkahealthservices.com";
const INITIAL_TOC_ITEMS = 4;

const getAbsoluteImage = (image) => {
  if (!image) return `${BASE_URL}/images/logo/Tinka_health_logo.png`;
  return image.startsWith("http") ? image : `${BASE_URL}${image}`;
};

const ConditionTopic = () => {
  const { slug, topicSlug } = useParams();
  const result = getConditionTopic(slug, topicSlug);

  if (!result) {
    return (
      <main className="bg-[#f4f8fc] px-4 pb-16 pt-28 text-center text-[#06192f]">
        <h1 className="text-3xl font-extrabold">Topic page not found</h1>
        <Link
          to="/conditions"
          className="mt-5 inline-flex font-bold text-[#005ab0] hover:text-[#00427f]"
        >
          View all conditions
        </Link>
      </main>
    );
  }

  const { condition, section, topic } = result;
  const canonicalUrl = `${BASE_URL}${getConditionTopicPath(condition, topic)}`;
  const title =
    topic.seoTitle || `${topic.title} | ${condition.title} | Tinka Health`;
  const description =
    topic.metaDescription ||
    topic.summary ||
    `${topic.title} information from Tinka Health Services.`;
  const keywords = Array.isArray(topic.keywords)
    ? topic.keywords.join(", ")
    : topic.keywords ||
      `${topic.title}, ${condition.title}, psychiatric evaluation, medication management, telehealth psychiatry`;
  const image = getAbsoluteImage(topic.image || condition.image);
  const articleToc = [
    { id: "article-title", level: 1, text: topic.title },
    ...getPortableTextHeadings(topic.body, {
      skipFirstHeadingText: topic.title,
    }),
  ];

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
        <meta property="og:image" content={image} />
      </Helmet>

      <section className="bg-white px-4 py-14 pt-28 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <Link
            to={getConditionHubPath(condition)}
            className="inline-flex items-center gap-2 font-bold text-[#005ab0] hover:text-[#00427f]"
          >
            <FiArrowLeft aria-hidden="true" />
            Back to {condition.title}
          </Link>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            {section.title}
          </p>
          <h1
            id="article-title"
            className="mt-3 scroll-mt-32 text-4xl font-extrabold leading-tight md:text-6xl"
          >
            {topic.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            {topic.summary || description}
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
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm md:p-9">
            <ArticleTableOfContents items={articleToc} />
            <PortableText
              value={topic.body}
              skipFirstHeadingText={topic.title}
            />
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-lg border border-[#cfe3f6] bg-white shadow-sm">
              <img
                src={topic.image || condition.image}
                alt={topic.imageAlt || condition.imageAlt}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold">More on {condition.title}</h2>
                <div className="mt-4 grid gap-3">
                  {condition.sections.slice(0, 4).map((item) => (
                    <Link
                      key={item.slug}
                      to={`${getConditionHubPath(condition)}#${item.slug}`}
                      className="font-bold text-[#005ab0] hover:text-[#00427f]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

const ArticleTableOfContents = ({ items = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = items.filter((item) => item?.id && item?.text);

  if (visibleItems.length <= 1) return null;

  const hasMoreItems = visibleItems.length > INITIAL_TOC_ITEMS;
  const shownItems = isExpanded
    ? visibleItems
    : visibleItems.slice(0, INITIAL_TOC_ITEMS);

  return (
    <nav
      aria-label="Article table of contents"
      className="mb-10 rounded-lg bg-[#f5f5f4] p-3 sm:p-4"
    >
      <ol id="article-toc-list" className="flex flex-wrap gap-2 sm:gap-3">
        {shownItems.map((item) => (
          <li key={item.id} className="min-w-0">
            <a
              href={`#${item.id}`}
              className="block rounded-md bg-white px-3.5 py-3 text-base font-semibold leading-6 text-[#06192f] shadow-sm transition hover:bg-[#eaf5ff] hover:text-[#005ab0] focus:outline-none focus:ring-2 focus:ring-[#005ab0] sm:px-4 sm:text-lg"
            >
              {item.text}
            </a>
          </li>
        ))}
        {hasMoreItems && (
          <li>
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              className="inline-flex items-center gap-3 rounded-md bg-white px-3.5 py-3 text-base font-semibold leading-6 text-[#06192f] shadow-sm transition hover:bg-[#eaf5ff] hover:text-[#005ab0] focus:outline-none focus:ring-2 focus:ring-[#005ab0] sm:px-4 sm:text-lg"
              aria-expanded={isExpanded}
              aria-controls="article-toc-list"
            >
              {isExpanded ? "Show fewer" : "More topics"}
              <FiChevronDown
                aria-hidden="true"
                className={`h-5 w-5 text-[#005ab0] transition ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default ConditionTopic;
