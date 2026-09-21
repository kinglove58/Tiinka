import { memo } from "react";
import BookingLink from "../../components/BookingLink";

const steps = [
  {
    title: "Book Your Appointment",
    description:
      "Choose a convenient appointment time and provide your basic information.",
  },
  {
    title: "Meet Your Provider",
    description:
      "Talk through your symptoms, concerns, history and goals with your provider.",
  },
  {
    title: "Begin Your Care Plan",
    description:
      "Receive a personalized treatment plan and ongoing support based on your needs.",
  },
];
const EasyStart = () => (
  <section
    className="home-section bg-white"
    aria-labelledby="home-start-heading"
  >
    <div className="home-container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="home-eyebrow flex justify-center">Getting Started</p>
        <h2 id="home-start-heading" className="home-heading">
          Starting care can be simple
        </h2>
      </div>
      <ol className="mt-8 grid gap-8 md:grid-cols-3">
        {steps.map(({ title, description }, index) => (
          <li key={title}>
            <span
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf5ff] text-xl font-bold text-[#005ab0]"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <h3 className="text-xl font-bold text-[#06192f]">{title}</h3>
            <p className="mt-3 leading-7 text-slate-700">{description}</p>
          </li>
        ))}
      </ol>
      <BookingLink className="home-button mt-8 w-full bg-[#005ab0] text-white sm:w-auto">
        Book an Appointment
      </BookingLink>
    </div>
  </section>
);
export default memo(EasyStart);
