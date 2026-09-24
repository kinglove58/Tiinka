import { memo, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const benefits = [
  {
    title: "Accessible",
    description:
      "Virtual and flexible care options designed to make getting support easier.",
    image: "/images/seo/online-psychiatrist-virginia.webp",
    imageAlt: "A woman speaking with a care provider by video from home",
  },
  {
    title: "Personalized",
    description:
      "Care plans shaped around your symptoms, concerns and treatment goals.",
    image: "/images/seo/medication-management-dc.webp",
    imageAlt: "A provider and patient discussing a personalized care plan",
  },
  {
    title: "Continuous",
    description:
      "Support from your initial evaluation through ongoing treatment and follow-up.",
    image: "/images/seo/psychiatric-evaluation-md.webp",
    imageAlt: "A patient talking with a provider during a follow-up consultation",
  },
];

const ChooseUs = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      className="home-section bg-[#f4f8fc]"
      aria-labelledby="home-why-heading"
    >
      <div className="home-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="home-eyebrow flex justify-center">Why Tinka Health</p>
          <h2 id="home-why-heading" className="home-heading">
            Mental health care built around your life
          </h2>
        </div>
        
        <div className="flex justify-end gap-3 lg:hidden mb-2 mt-4">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#005ab0]"
            aria-label="Scroll left"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#005ab0]"
            aria-label="Scroll right"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="mt-6 flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {benefits.map(({ title, description, image, imageAlt }) => (
            <div key={title} className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-auto shrink-0 lg:shrink snap-start overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 flex flex-col group">
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={imageAlt}
                  width={960}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#06192f] md:text-xl">{title}</h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ChooseUs);
