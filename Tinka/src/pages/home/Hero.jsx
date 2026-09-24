import { memo } from "react";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";

const heroImage =
  "/images/img_mental_health/hero/tinka-support-simple-hero.webp";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef6fd] md:min-h-[480px]">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 hidden h-full w-full object-cover object-[center_20%] md:block"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(244, 249, 253, 0.98) 0%, rgba(244, 249, 253, 0.92) 34%, rgba(244, 249, 253, 0.5) 58%, rgba(244, 249, 253, 0.08) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 py-6 md:min-h-[480px] md:px-8 md:py-8 lg:px-12">
        <div className="max-w-[760px] text-center md:text-left">
          <h1 className="mx-auto max-w-[720px] text-[32px] font-extrabold leading-[1.08] text-[#06192f] sm:text-[40px] md:mx-0 md:text-[44px] lg:text-[52px]">
            Life gets overwhelming.
            <span className="block text-[#005ab0]">
              Support should be simple.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[16px] font-medium leading-7 text-slate-700 md:mx-0 md:text-lg">
            Compassionate mental health care, psychiatric evaluation and
            ongoing psychiatric care for adults across Virginia, Maryland and
            Washington, DC.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <BookingLink className="inline-flex items-center justify-center rounded-full bg-[#005ab0] px-7 py-4 text-base font-bold text-white shadow-[0_16px_35px_rgba(0,90,176,0.22)] hover:bg-[#00427f]">
              Book an Appointment
            </BookingLink>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#9fc8ee] bg-white/75 px-7 py-4 text-base font-bold text-[#005ab0] shadow-sm backdrop-blur transition hover:border-[#005ab0] hover:bg-white"
            >
              Contact Us
            </Link>
          </div>

          <div className="relative mx-auto mt-5 w-full max-w-xl overflow-hidden rounded-lg md:hidden">
            <img
              src={heroImage}
              alt=""
              aria-hidden="true"
              className="block h-52 w-full object-cover object-[75%_20%] sm:h-64"
              loading="eager"
              decoding="async"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#eef6fd] to-transparent"
            />
          </div>
          <p className="mt-3 text-center text-sm font-medium text-slate-700 md:mt-5 md:text-left">
            Virtual and in-person care available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
