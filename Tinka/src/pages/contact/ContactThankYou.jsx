import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiPhoneCall } from "react-icons/fi";
import { trackContactConversion } from "../../utils/googleAdsTracking";

const ContactThankYou = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.trackContactConversion) {
      trackContactConversion();
    }
  }, [location.state]);

  return (
    <main className="bg-[#f7fbff] px-4 py-16 md:px-8 md:py-24">
      <Helmet>
        <title>Thank You | Tinka Health Services</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="Thank you for contacting Tinka Health Services. Our team will follow up with you soon."
        />
      </Helmet>

      <section className="mx-auto max-w-3xl rounded-3xl border border-[#d8e7f6] bg-white p-8 text-center shadow-[0_24px_70px_-45px_rgba(0,90,176,0.35)] md:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f4ff] text-[#005ab0]">
          <FiCheckCircle className="h-9 w-9" aria-hidden="true" />
        </div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[#005ab0]">
          Message received
        </p>
        <h1 className="text-3xl font-extrabold leading-tight text-[#06192f] md:text-5xl">
          Thank you for contacting Tinka Health Services
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
          Your message has been sent. Our team will review it and follow up
          using the contact information you provided.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="tel:+14432956600"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#005ab0] px-6 py-4 font-bold text-white transition hover:bg-[#00427f]"
          >
            <FiPhoneCall aria-hidden="true" />
            Call 443-295-6600
          </a>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b8d8f3] bg-white px-6 py-4 font-bold text-[#005ab0] transition hover:bg-blue-50"
          >
            Book an Appointment
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactThankYou;
