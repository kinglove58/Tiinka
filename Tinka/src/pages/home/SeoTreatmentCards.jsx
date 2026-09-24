import { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import serviceData from "../services/serviceData";

const featuredServices = [
  [
    "Attention-Deficit-Hyperactivity-Disorder",
    "ADHD Evaluation",
    "Evaluation and personalized support for attention, focus and daily functioning.",
  ],
  [
    "Depression",
    "Depression",
    "Support for depression with treatment tailored to your symptoms and goals.",
  ],
  [
    "Anxiety",
    "Anxiety",
    "Explore care for ongoing worry, panic and anxiety symptoms.",
  ],
  [
    "Bipolar-Disorder",
    "Bipolar Disorder",
    "Personalized treatment and follow-up for mood stability.",
  ],
  [
    "Medication-Management",
    "Psychiatric Medication Management",
    "Review treatment benefits, side effects and ongoing medication needs.",
  ],
  [
    "Addiction-Treatment",
    "Addiction Treatment",
    "Compassionate treatment and ongoing support for substance use and recovery.",
  ],
  [
    "Weight-Loss-Management",
    "Weight Loss Management",
    "Personalized medical care and practical support for your weight management goals.",
  ],
  [
    "Schizophrenia",
    "Schizophrenia",
    "Individualized psychiatric care and ongoing support for daily life.",
  ],
].map(([id, cardTitle, cardDescription]) => {
  const service = serviceData.find((item) => item.id === id);
  return {
    ...service,
    path: service.path || `/services/${id}`,
    cardTitle,
    cardDescription,
  };
});

const SeoTreatmentCards = () => {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  useEffect(() => {
    const track = trackRef.current;
    const update = () =>
      setEdges({
        start: track.scrollLeft <= 1,
        end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2,
      });
    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);
  const scrollCards = (direction) => {
    const track = trackRef.current;
    const card = track.querySelector("article");
    const step = card.getBoundingClientRect().width + 20;
    track.scrollBy({
      left: direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };
  return (
    <section
      aria-labelledby="seo-treatment-cards-heading"
      className="home-section bg-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="seo-treatment-cards-heading"
            className="text-xl font-bold text-[#06192f] md:text-2xl"
          >
            Tinka Health Services Specializes In:
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-700 md:text-base">
            Compassionate, personalized care designed to support your mental
            health, emotional well-being, and weight management goals.
          </p>
        </div>

        <div className="mt-3 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Previous services"
            title="Previous services"
            aria-controls="home-service-cards"
            disabled={edges.start}
            onClick={() => scrollCards(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#005ab0] text-[#005ab0] hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <FiChevronLeft aria-hidden="true" className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next services"
            title="Next services"
            aria-controls="home-service-cards"
            disabled={edges.end}
            onClick={() => scrollCards(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#005ab0] text-[#005ab0] hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <FiChevronRight aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div
          ref={trackRef}
          id="home-service-cards"
          role="region"
          aria-label="Treatment services"
          tabIndex={0}
          className="mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-5 pt-2"
        >
          {featuredServices.map((page) => (
            <article
              key={page.id}
              className="group w-[88%] shrink-0 snap-start overflow-hidden rounded-lg border border-[#cfe3f6] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-35px_rgba(0,90,176,0.55)] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-60px)/4)] xl:w-[calc((100%-100px)/6)]"
            >
              <Link to={page.path} className="block">
                <div className="aspect-[4/3] overflow-hidden bg-[#eaf5ff]">
                  <img
                    src={page.image}
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
        <div className="mt-2 flex justify-center">
          <Link
            to="/services"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#005ab0] px-5 py-2 font-bold text-[#005ab0] transition hover:bg-blue-50"
          >
            View More
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(SeoTreatmentCards);
