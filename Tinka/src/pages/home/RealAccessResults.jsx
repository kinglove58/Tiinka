import { memo } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiActivity,
  FiShield,
} from "react-icons/fi";

const access = [
  {
    title: "Major Insurance Plans",
    description: "Coverage options with many major insurance providers.",
    icon: FiShield,
  },
  {
    title: "Medication Management",
    description:
      "Evaluation, medication management and ongoing monitoring when clinically appropriate.",
    icon: FiActivity,
  },
  {
    title: "Simple Care Path",
    description:
      "Book your appointment, complete your evaluation and begin your personalized care plan.",
    icon: FiCheckCircle,
  },
];

const RealAccessResults = () => (
  <section
    className="home-section bg-[#f4f8fc]"
    aria-labelledby="home-access-heading"
  >
    <div className="home-container">
      <header className="text-center">
        <p className="home-eyebrow">Care Access, Simplified</p>
        <h2 id="home-access-heading" className="home-heading">
          Real access for real change
        </h2>
        <p className="home-copy mx-auto">
          Start with the information that matters most: coverage, treatment
          options and a clear path to care.
        </p>
      </header>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {access.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-lg border border-[#cfe3f6] bg-white p-6"
          >
            <Icon aria-hidden="true" className="mb-4 h-7 w-7 text-[#005ab0]" />
            <h3 className="text-xl font-bold text-[#06192f]">{title}</h3>
            <p className="mt-3 leading-7 text-slate-700">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/insurance-we-accept"
          className="home-button bg-[#005ab0] text-white hover:bg-[#00427f]"
        >
          Check Insurance &amp; Availability{" "}
          <FiArrowRight aria-hidden="true" className="shrink-0" />
        </Link>
      </div>
    </div>
  </section>
);
export default memo(RealAccessResults);
