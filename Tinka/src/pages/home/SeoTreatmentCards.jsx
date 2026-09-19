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

       
      </div>
    </section>
  );
};

export default memo(SeoTreatmentCards);
