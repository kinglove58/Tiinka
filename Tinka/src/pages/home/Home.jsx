import React, {
  Suspense,
  lazy,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Helmet } from "react-helmet";
import {
  FiActivity,
  FiArrowRight,
  FiClipboard,
  FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import CallVideoAction from "../../components/CallVideoAction";
import Hero from "./Hero";
import RealAccessResults from "./RealAccessResults";
import SeoTreatmentCards from "./SeoTreatmentCards";

// Lazy load the components
const Locations = lazy(() => import("./Locations"));
const MentalDetails = lazy(() => import("../../components/MentalDetails"));
const InsuranceLogo = lazy(() => import("./InsuranceLogo"));
const Specialization = lazy(() => import("./Specialization"));
const ChooseUs = lazy(() => import("./ChooseUs"));
const EasyStart = lazy(() => import("./EasyStart"));
const Testimonial = lazy(() => import("./Testimonial"));
const MentalHealthStats = lazy(() => import("./MentalHealthStats"));
const FAQs = lazy(() => import("./Faqs"));

const DeferredSection = ({
  children,
  minHeight = 280,
  rootMargin = "120px 0px",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isVisible) return;

    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <section
      ref={sectionRef}
      style={isVisible ? undefined : { minHeight: `${minHeight}px` }}
    >
      {isVisible ? (
        <Suspense
          fallback={
            <div className="py-8 text-center text-gray-500">Loading...</div>
          }
        >
          {children}
        </Suspense>
      ) : null}
    </section>
  );
};

const Home = () => {
  return (
    <main className="md:pt-24 bg-[#f1f2f6]">
      <Helmet>
        <title>
          Psychiatric Provider MD, DC & VA | Tinka Health Services
        </title>
        <meta
          name="description"
          content="Medication management and mental health care in Maryland, DC, and Virginia with telehealth and insurance-friendly access."
        />
        <meta
          name="keywords"
          content="psychiatric provider maryland, psychiatric nurse practitioner maryland, pmhnp near me, mental health provider dc, psychiatric services virginia, medication management near me, telehealth psychiatry maryland, telehealth psychiatry dc, telehealth psychiatry virginia, anxiety treatment psychiatrist near me, depression treatment provider near me, adhd medication management provider"
        />
        <link rel="canonical" href="https://tinkahealthservices.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tinka Health Services" />
        <meta
          property="og:title"
          content="Psychiatric Provider MD, DC & VA | Tinka Health Services"
        />
        <meta
          property="og:description"
          content="Medication management and mental health care in Maryland, DC, and Virginia with telehealth and insurance-friendly access."
        />
        <meta property="og:url" content="https://tinkahealthservices.com" />
        <meta
          property="og:image"
          content="https://tinkahealthservices.com/images/logo/Tinka_health_logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Psychiatric Provider MD, DC & VA | Tinka Health Services"
        />
        <meta
          name="twitter:description"
          content="Telehealth psychiatry and medication management for anxiety, depression, ADHD, bipolar disorder, PTSD, and related concerns."
        />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/img_mental_health/hero/tinka-support-simple-hero.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Tinka Health Services",
            url: "https://tinkahealthservices.com",
            logo: "https://tinkahealthservices.com/images/logo/Tinka_health_logo.png",
            telephone: "+1 443-295-6600",
            areaServed: [
              { "@type": "AdministrativeArea", name: "Maryland" },
              { "@type": "AdministrativeArea", name: "Washington DC" },
              { "@type": "AdministrativeArea", name: "Virginia" },
            ],
            sameAs: [
              "https://www.facebook.com/tinkahealthservices",
              "https://x.com/Tinkahealthserv",
              "https://www.instagram.com/tinkahealthservices/",
              "https://www.youtube.com/@TinkaHealthServices",
            ],
          })}
        </script>
      </Helmet>
      <div>
        <Hero />
        <RealAccessResults />
        <CallVideoAction />
        <SeoTreatmentCards />
        <section id="home-care-overview" className="px-4 pb-8 pt-10">
          <div className="overflow-hidden bg-gradient-to-br from-white via-[#f7f7f7] to-[#fafafa] shadow-sm">
            <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8 lg:p-10">
              <div>
                <h2 className="text-2xl font-semibold leading-tight text-[#005ab0] md:text-3xl lg:text-4xl">
                  Psychiatric care and medication management in MD, DC and VA
                </h2>
                <div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      to="/maryland-psychiatrist"
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition duration-300 hover:scale-105"
                    >
                      Maryland Psychiatry
                    </Link>
                    <Link
                      to="/dc-psychiatrist"
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition duration-300 hover:scale-105"
                    >
                      DC Psychiatry
                    </Link>
                    <Link
                      to="/virginia-psychiatrist"
                      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition duration-300 hover:scale-105"
                    >
                      Virginia Psychiatry
                    </Link>
                    <Link
                      to="/psychiatric-provider-herndon-va"
                      className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 transition duration-300 hover:scale-105"
                    >
                      Herndon, VA
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Tinka Health Services provides expert psychiatric care and
                  medication management for individuals in Maryland, Washington
                  DC, and Virginia. Our board-certified psychiatric nurse
                  practitioners specialize in treating anxiety, depression,
                  ADHD, bipolar disorder, PTSD and other mental health
                  conditions through both in-person and telehealth visits.
                </p>
                <p>
                  We accept Medicaid, Medicare, and most major insurance plans,
                  including Kaiser Permanente (DC), CareFirst, Aetna, Cigna,
                  Optum, and Tricare. We are also available on platforms such as
                  SonderMind, Grow Therapy, and Rula to ensure accessible and
                  convenient care.
                </p>
                <p>
                  Accepting new patients. Same week appointments available.
                  Telehealth psychiatry appointments and medication management
                  services are available for eligible patients, with local
                  office access in Columbia, Washington DC, and Herndon,
                  Virginia.
                </p>
              </div>
            </div>

            <div className="border-y border-[#d7e8fb] bg-white/80 px-6 py-7 md:px-8 lg:px-10">
              <div className="grid gap-4 md:grid-cols-3">
                <article className="rounded-xl border border-[#cfe0f7] bg-white p-5 shadow-[0_8px_20px_rgba(0,90,176,0.08)]">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border-2 border-dashed border-[#5aa1e5] bg-[#f2f8ff] text-3xl text-[#005ab0]">
                    <FiActivity aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1f2937]">
                    Get care for your specific condition
                  </h3>
                  <p className="text-sm mb-4 text-gray-600">
                    Personalized support for anxiety, depression, ADHD, bipolar
                    disorder, PTSD, and more.
                  </p>
                  <Link
                    to="/booking"
                    className="inline-flex text-sm items-center gap-2 rounded-lg bg-blue-700 px-4 mt-3 py-2 font-semibold text-white transition duration-300 hover:scale-103 hover:bg-blue-800"
                  >
                    Book Appointment
                    <FiArrowRight aria-hidden="true" />
                  </Link>
                </article>

                <article className="rounded-xl border border-[#cfe0f7] bg-white p-5 shadow-[0_8px_20px_rgba(0,90,176,0.08)]">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#8fb7e4] bg-[#eef5ff] text-3xl text-[#005ab0]">
                    <FiClipboard aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1f2937]">
                    We have the right insurance for you
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    we have the best insurance plans for you, including
                    Medicaid, Medicare and major insurance providers in
                    Maryland, DC and Virginia.
                  </p>
                  <Link
                    to="/insurance-we-accept"
                    className="rounded-lg mt-8 text-sm bg-blue-600 px-3 py-2 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700"
                  >
                    Insurance We Accept
                  </Link>
                </article>

                <article className="rounded-xl border border-[#cfe0f7] bg-white p-5 shadow-[0_8px_20px_rgba(0,90,176,0.08)]">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#8fb7e4] bg-[#eef5ff] text-3xl text-[#005ab0]">
                    <FiMapPin aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#1f2937]">
                    Book in-person or telehealth visits
                  </h3>
                  <p className="text-sm mb-6 text-gray-600">
                    Choose flexible appointments in Maryland, DC, and Virginia,
                    including virtual care options.
                  </p>
                  <Link
                    to="/telehealth-psychiatry-md-dc-va"
                    className="rounded-lg text-sm border border-blue-600 bg-white px-4 py-2 font-semibold text-blue-700 transition duration-300 hover:bg-blue-50"
                  >
                    Telehealth Psychiatry
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>
        <DeferredSection minHeight={260}>
          <Locations />
        </DeferredSection>
        <DeferredSection minHeight={380}>
          <MentalDetails />
        </DeferredSection>
        <DeferredSection minHeight={340}>
          <Specialization />
        </DeferredSection>
        <DeferredSection minHeight={220}>
          <InsuranceLogo />
        </DeferredSection>

        <DeferredSection minHeight={300}>
          <ChooseUs />
        </DeferredSection>
        <DeferredSection minHeight={260}>
          <EasyStart />
        </DeferredSection>
        <DeferredSection minHeight={320}>
          <Testimonial />
        </DeferredSection>
        <DeferredSection minHeight={260}>
          <MentalHealthStats />
        </DeferredSection>
        <DeferredSection minHeight={280}>
          <FAQs />
        </DeferredSection>
      </div>
    </main>
  );
};

export default memo(Home);
