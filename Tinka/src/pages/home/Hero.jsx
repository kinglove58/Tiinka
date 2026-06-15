import { memo } from "react";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";

const heroImage =
  "/images/img_mental_health/hero/tinka-support-simple-hero.webp";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[calc(100vh-128px)] overflow-hidden bg-[#eef6fd]">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 hidden h-full w-full object-cover object-[center_right] md:block"
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

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-128px)] max-w-7xl flex-col justify-center px-4 pb-10 pt-28 md:min-h-[calc(100vh-112px)] md:px-8 md:py-12 lg:px-12">
        <div className="max-w-[760px]">
          <h1 className="max-w-[720px] text-[44px] font-extrabold leading-[1.02] text-[#06192f] sm:text-[56px] md:text-[64px] lg:text-[64px] xl:text-[72px]">
            Life gets overwhelming.
            <span className="block text-[#005ab0]">
              Support should be simple.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[16px] font-medium leading-7 text-slate-700 md:text-lg">
            Easy, affordable mental health care across Maryland, Washington DC,
            and Virginia accepting insurance
            with convenient telehealth appointments.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <BookingLink className="inline-flex items-center justify-center rounded-full bg-[#005ab0] px-7 py-4 text-base font-bold text-white shadow-[0_16px_35px_rgba(0,90,176,0.22)] hover:bg-[#00427f]">
              Book an Appointment
            </BookingLink>
            <Link
              to="/insurance-we-accept"
              className="inline-flex items-center justify-center rounded-full border border-[#9fc8ee] bg-white/75 px-7 py-4 text-base font-bold text-[#005ab0] shadow-sm backdrop-blur transition hover:border-[#005ab0] hover:bg-white"
            >
              Check Insurance We Accept
            </Link>
          </div>

          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="mt-6 block h-auto w-full object-contain md:hidden"
            loading="eager"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
};

export default memo(Hero);
