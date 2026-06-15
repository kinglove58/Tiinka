import { memo } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiExternalLink, FiMapPin } from "react-icons/fi";
import { seoHeroImage, seoTreatmentPages } from "../seo/seoPagesData";

const psychologyTodayUrl =
  "https://www.psychologytoday.com/us/psychiatrists/seliat-dosunmu-columbia-md/1266303";
const googleBusinessUrl = "https://maps.app.goo.gl/RbYpWAe7gb4rnbfq5";

const SeoTreatmentCards = () => {
  return (
    <section
      aria-labelledby="seo-treatment-cards-heading"
      className="bg-[#f4f8fc] px-4 py-16 md:px-8 md:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            Find care by need
          </p>
          <h2
            id="seo-treatment-cards-heading"
            className="text-4xl font-extrabold leading-tight text-[#06192f] md:text-6xl"
          >
            The new standard for modern mental health care
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {seoTreatmentPages.map((page) => (
            <article
              key={page.id}
              className="group overflow-hidden rounded-lg border border-[#cfe3f6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-35px_rgba(0,90,176,0.55)]"
            >
              <Link to={page.path} className="block">
                <div className="aspect-[4/3] overflow-hidden bg-[#eaf5ff]">
                  <img
                    src={page.image || seoHeroImage}
                    alt={page.imageAlt || `${page.cardTitle} at Tinka Health Services`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#005ab0]">
                    {page.cardKeyword}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-[#06192f]">
                    {page.cardTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {page.cardDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#005ab0]">
                    Learn more
                    <FiArrowRight
                      aria-hidden="true"
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-[#cfe3f6] bg-white p-5 shadow-sm md:flex md:items-center md:justify-between md:gap-6 md:p-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#005ab0]">
              Ready to schedule?
            </p>
            <h3 className="mt-2 text-2xl font-bold leading-tight text-[#06192f]">
              Book through trusted provider profiles
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Use Psychology Today to request an appointment or open our Google
              Business profile for directions, reviews, and contact details.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
            <a
              href={psychologyTodayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#005ab0] px-6 py-4 text-base font-bold text-white shadow-[0_16px_35px_rgba(0,90,176,0.22)] transition hover:bg-[#00427f]"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black text-[#005ab0]">
                PT
              </span>
              Book on Psychology Today
              <FiExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#9fc8ee] bg-white px-6 py-4 text-base font-bold text-[#005ab0] shadow-sm transition hover:border-[#005ab0] hover:bg-[#f4f9fd]"
            >
              <FiMapPin aria-hidden="true" className="h-5 w-5" />
              Google Business Profile
              <FiExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SeoTreatmentCards);
