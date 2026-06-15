import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BookingModal from "../../components/BookingModal";
import CanonicalLink from "../../components/CanonicalLink";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";

const DEFAULT_SIDE_RAIL_LINKS = [
  {
    to: "/maryland-psychiatrist",
    label: "Maryland Psychiatry",
  },
  {
    to: "/dc-psychiatrist",
    label: "Washington DC Psychiatry",
  },
  {
    to: "/virginia-psychiatrist",
    label: "Virginia Psychiatry",
  },
  {
    to: "/psychiatric-provider-herndon-va",
    label: "Herndon, VA Psychiatry",
  },
  {
    to: "/telehealth-psychiatry-md-dc-va",
    label: "Telehealth Psychiatry",
  },
];

const normalizeParagraphs = (content) => {
  if (!content) return [];
  return Array.isArray(content) ? content : [content];
};

function ServiceStylePage({
  canonicalUrl,
  currentPath,
  metaTitle,
  metaDescription,
  keywords,
  heroTitle,
  heroSubtitle,
  heroImage = "/images/services/Mental_Health.jpg",
  heroImageAlt = "Adult psychiatry consultation with mental health professional",
  intro,
  ctaText,
  callHref,
  callText,
  sectionOne,
  sectionTwo,
  sideRailTitle = "Coverage & Location Pages",
  sideRailLinks = DEFAULT_SIDE_RAIL_LINKS,
  sideRailButton = {
    to: "/insurance-we-accept",
    label: "Insurance We Accept",
  },
  structuredData = [],
}) {
  const [showModal, setShowModal] = useState(false);
  const hrRef = useRef(null);
  const secondDivRef = useRef(null);

  useEffect(() => {
    if (hrRef.current && secondDivRef.current) {
      hrRef.current.style.height = `${secondDivRef.current.offsetHeight}px`;
    }
  }, []);

  const keywordContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;
  const absoluteImage = heroImage.startsWith("http")
    ? heroImage
    : `https://tinkahealthservices.com${heroImage}`;

  return (
    <div className="pt-20">
      <CanonicalLink href={canonicalUrl} />
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {keywordContent && <meta name="keywords" content={keywordContent} />}
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={absoluteImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={absoluteImage} />
        {structuredData.map((item, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(item)}
          </script>
        ))}
      </Helmet>

      <ScrollAnimationWrapper>
        <div
          className="relative flex min-h-[50vh] flex-col justify-center space-y-7 bg-blue-800 bg-cover bg-center bg-no-repeat px-4 py-6 md:px-16"
          style={{
            backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.8)), url('${heroImage}')`,
          }}
        >
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-0"
            loading="lazy"
          />
          <h1 className="relative z-10 text-4xl font-bold text-white md:text-6xl">
            {heroTitle}
          </h1>
          <p className="relative z-10 text-lg font-semibold text-white md:text-xl">
            {heroSubtitle}
          </p>
        </div>

        <div className="flex min-h-full flex-col items-start justify-between gap-10 px-4 py-16 md:px-16 lg:flex-row">
          <div className="w-full lg:w-[70%]">
            <div>
              <h2 className="mb-10 text-4xl font-bold capitalize text-blue-800">
                {intro.title}
              </h2>
              <div className="mb-10 space-y-5">
                {normalizeParagraphs(intro.description).map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-xl font-semibold text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="rounded-lg bg-blue-500 px-6 py-2 text-white transition duration-300 hover:bg-blue-600"
              >
                {ctaText}
              </button>

              <div className="mt-4 flex flex-wrap gap-3">
                {callHref && callText && (
                  <a
                    href={callHref}
                    className="rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-700"
                  >
                    {callText}
                  </a>
                )}
              </div>

              <BookingModal
                show={showModal}
                onClose={() => setShowModal(false)}
              />
            </div>

            <div className="mt-16">
              <h3 className="mb-8 text-2xl font-bold text-blue-800">
                {sectionOne.title}
              </h3>
              <div className="mb-10 space-y-5">
                {normalizeParagraphs(sectionOne.description).map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-xl font-semibold text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-x-7 gap-y-4 md:grid-cols-2">
                {sectionOne.items.map((item) => (
                  <div key={item} className="flex w-full items-start gap-4">
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-800" />
                    <li className="list-none text-lg font-semibold text-gray-700">
                      {item}
                    </li>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h3 className="mb-8 text-2xl font-bold text-blue-800">
                {sectionTwo.title}
              </h3>
              <div className="mb-10 space-y-5">
                {normalizeParagraphs(sectionTwo.description).map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-xl font-semibold text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {sectionTwo.items.map((item) => (
                  <div key={item} className="flex w-full items-start gap-4">
                    <div className="mt-2 h-2 w-2 rounded-full bg-blue-800" />
                    <li className="list-none text-lg font-semibold text-gray-700">
                      {item}
                    </li>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-full w-full items-start gap-12 lg:w-[20%]">
            <hr ref={hrRef} className="hidden h-full w-1 bg-gray-400 lg:block" />
            <div ref={secondDivRef} className="h-full w-full">
              <h2 className="mb-4 text-2xl font-bold text-blue-800">
                {sideRailTitle}
              </h2>
              <div className="space-y-2">
                {sideRailLinks.map((item) => (
                  <div key={item.to} className="group">
                    <Link
                      to={item.to}
                      className={`block w-full rounded-lg px-4 py-3 transition-all duration-300 ease-in-out ${
                        item.to === currentPath
                          ? "border-2 border-blue-600 bg-blue-100 text-blue-800 shadow-md"
                          : "border-2 border-transparent hover:border-gray-300 hover:bg-gray-100 hover:shadow-sm"
                      }`}
                    >
                      <p
                        className={`font-semibold transition-colors duration-300 ${
                          item.to === currentPath
                            ? "text-blue-800"
                            : "text-gray-700 group-hover:text-blue-700"
                        }`}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </div>
                ))}
                {sideRailButton && (
                  <div className="mt-4">
                    <Link
                      to={sideRailButton.to}
                      className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg"
                    >
                      {sideRailButton.label}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}

export default ServiceStylePage;
