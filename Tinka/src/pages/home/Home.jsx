import { memo } from "react";
import { Helmet } from "react-helmet";
import { FiArrowRight, FiCheckCircle, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";
import Hero from "./Hero";
import Locations from "./Locations";
import RealAccessResults from "./RealAccessResults";
import SeoTreatmentCards from "./SeoTreatmentCards";
import ChooseUs from "./ChooseUs";
import EasyStart from "./EasyStart";
import GoogleReviewBadge from "../../components/GoogleReviewBadge";
import "./home.css";

const Home = () => (
  <main className="home-page bg-white pt-20 lg:pt-16">
    <Helmet>
      <title>Psychiatric Provider MD, DC & VA | Tinka Health Services</title>
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
    <Hero />
    <Locations homepage />
    <RealAccessResults />
    <SeoTreatmentCards />
    <section
      className="home-section bg-white"
      aria-labelledby="home-conditions-heading"
    >
      <div className="home-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="home-conditions-heading" className="home-heading">
            You don&apos;t have to figure it out alone.
          </h2>
          <p className="home-copy mx-auto">
            Our providers support adults experiencing a wide range of mental and
            emotional health challenges.
          </p>
        </div>
        <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "ADHD",
            "Anxiety",
            "Depression",
            "Bipolar disorder",
            "Mood changes",
            "Trauma",
            "Anger management",
            "Sleep difficulties",
            "Stress",
          ].map((condition) => (
            <li
              key={condition}
              className="flex items-center gap-3 text-lg text-slate-700"
            >
              <FiCheckCircle
                aria-hidden="true"
                className="shrink-0 text-[#005ab0]"
              />
              {condition}
            </li>
          ))}
        </ul>
        <Link to="/services" className="home-text-link mt-8">
          Explore Our Services <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
    <ChooseUs />
    <EasyStart />
    <section
      className="home-section bg-white"
      aria-labelledby="home-trust-heading"
    >
      <div className="home-container text-center">
        <h2 id="home-trust-heading" className="home-heading">
          Care built on trust
        </h2>
        <p className="home-copy mx-auto">
          Get to know our provider and explore our practice profiles before you
          book.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
          <Link to="/meet-our-provider" className="home-text-link">
            Meet Our Provider <FiArrowRight aria-hidden="true" />
          </Link>
          <GoogleReviewBadge />
        </div>
      </div>
    </section>
    <section
      className="home-section bg-[#005ab0] text-white"
      aria-labelledby="home-final-heading"
    >
      <div className="home-container text-center">
        <h2 id="home-final-heading" className="home-heading text-white">
          You don&apos;t have to keep carrying it alone.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 md:text-lg">
          Whether you&apos;re dealing with anxiety, depression, ADHD, mood
          changes or simply don&apos;t feel like yourself, support can begin
          with one conversation.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <BookingLink className="home-button bg-white text-[#005ab0] hover:!bg-blue-50">
            Book an Appointment
          </BookingLink>
          <Link
            to="/contact"
            className="home-button border border-white text-white hover:bg-white/10"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default memo(Home);
