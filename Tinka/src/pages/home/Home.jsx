import React, {
  Suspense,
  lazy,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Hero from "./Hero";

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
          Psychiatric Provider MD, DC and VA | Medicaid, Medicare Accepted |
          Tinka Health
        </title>
        <meta
          name="description"
          content="Looking for a psychiatric provider near you? Tinka Health Services offers medication management and mental health care in Maryland, DC and Virginia. Accepting Medicaid, Medicare and major insurance. Telehealth available."
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
          content="Psychiatric Provider in Maryland, Washington DC and Virginia | Accepting Medicaid and Medicare"
        />
        <meta
          property="og:description"
          content="Board-certified psychiatric nurse practitioners offering medication management and telehealth psychiatry appointments in MD, DC and VA. Accepting Medicaid, Medicare and major insurance plans."
        />
        <meta property="og:url" content="https://tinkahealthservices.com" />
        <meta
          property="og:image"
          content="https://tinkahealthservices.com/images/logo/Tinka_health_logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Psychiatric Provider MD, DC and VA | Medicaid, Medicare Accepted"
        />
        <meta
          name="twitter:description"
          content="Telehealth psychiatry appointments and medication management services for anxiety, depression, ADHD, bipolar disorder and PTSD. Accepting new patients."
        />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/img_mental_health/hero/teletherapyimg.webp"
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
        <section className="px-4 md:px-12 lg:px-24 pb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#005ab0] mb-4">
              Psychiatric care and medication management in MD, DC and VA
            </h2>
            <p className="text-gray-700 mb-4">
              Tinka Health Services provides expert psychiatric care and
              medication management for individuals in Maryland, Washington DC,
              and Virginia. Our board-certified psychiatric nurse practitioners
              specialize in treating anxiety, depression, ADHD, bipolar
              disorder, PTSD and other mental health conditions through both
              in-person and telehealth visits.
            </p>
            <p className="text-gray-700 mb-4">
              We accept Medicaid, Medicare, and most major insurance plans,
              including Kaiser Permanente (DC), CareFirst, Aetna, Cigna, Optum,
              and Tricare. We are also available on platforms such as
              SonderMind, Grow Therapy, and Rula to ensure accessible and
              convenient care.
            </p>
            <p className="text-gray-700 mb-5 font-medium">
              Accepting new patients. Same week appointments available.
              Telehealth psychiatry appointments and medication management
              services with insurance accepted including Medicaid and Medicare.
            </p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 text-sm text-gray-700 mb-5">
              <p>Psychiatric provider Maryland</p>
              <p>Mental health provider DC</p>
              <p>Psychiatric services Virginia</p>
              <p>Medication management near me</p>
              <p>Telehealth psychiatry MD, DC and VA</p>
              <p>ADHD medication management provider</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/booking"
                className="bg-green-700 hover:bg-green-800 hover:scale-105 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
              >
                Book Appointment
              </Link>
              <Link
                to="/insurance-we-accept"
                className="bg-blue-600 hover:scale-105 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
              >
                View Insurance We Accept
              </Link>
              <Link
                to="/telehealth-psychiatry-md-dc-va"
                className="bg-white border hover:scale-105  border-blue-600 text-blue-700 px-4 py-2 rounded-lg font-semibold transition duration-300"
              >
                Telehealth Psychiatry
              </Link>
              <Link
                to="/maryland-psychiatrist"
                className="bg-white border hover:scale-105 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition duration-300"
              >
                Maryland Psychiatry
              </Link>
              <Link
                to="/dc-psychiatrist"
                className="bg-white border hover:scale-105 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition duration-300"
              >
                DC Psychiatry
              </Link>
              <Link
                to="/virginia-psychiatrist"
                className="bg-white border hover:scale-105 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold transition duration-300"
              >
                Virginia Psychiatry
              </Link>
            </div>
            <p className="mt-4 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white">
              Prefer virtual care? Book online in under 2 minutes. We accept
              Medicaid, Medicare, and major commercial insurance plans.
            </p>
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
