import { memo } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { seoHeroImage, seoTreatmentPages } from "../seo/seoPagesData";

const featuredServices = [
  [
    "adhd-virginia",
    "ADHD Treatment & Medication Management",
    "Evaluation and personalized support for attention, focus and daily functioning.",
  ],
  [
    "anxiety-md",
    "Anxiety Psychiatry",
    "Explore care for ongoing worry, panic and anxiety symptoms.",
  ],
  [
    "bipolar-treatment",
    "Bipolar Disorder Treatment",
    "Personalized treatment and follow-up for mood stability.",
  ],
  [
    "psychiatric-evaluation-md",
    "Psychiatric Evaluation",
    "Discuss your symptoms, history and goals with a psychiatric provider.",
  ],
].map(([id, cardTitle, cardDescription]) => ({
  ...seoTreatmentPages.find((page) => page.id === id),
  cardTitle,
  cardDescription,
}));

const SeoTreatmentCards = () => {
  return (
    <section
      aria-labelledby="seo-treatment-cards-heading"
      className="home-section bg-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="seo-treatment-cards-heading" className="home-heading">
            Care for what you&apos;re going through
          </h2>
          <p className="home-copy mx-auto">
            Personalized psychiatric care for a wide range of mental and
            emotional health needs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((page) => (
            <article
              key={page.id}
              className="group overflow-hidden rounded-lg border border-[#cfe3f6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-35px_rgba(0,90,176,0.55)]"
            >
              <Link to={page.path} className="block">
                <div className="aspect-[4/3] overflow-hidden bg-[#eaf5ff]">
                  <img
                    src={page.image || seoHeroImage}
                    alt={
                      page.imageAlt ||
                      `${page.cardTitle} at Tinka Health Services`
                    }
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mt-3 text-xl font-bold leading-tight text-[#06192f]">
                    {page.cardTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {page.cardDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#005ab0]">
                    Learn More
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
