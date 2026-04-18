import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";

const DCPsychiatrist = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tinkahealthservices.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Washington DC Psychiatrist",
        item: "https://tinkahealthservices.com/dc-psychiatrist",
      },
    ],
  };

  const dcServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://tinkahealthservices.com/dc-psychiatrist#clinic",
    name: "Tinka Health Services - Washington DC Psychiatry",
    url: "https://tinkahealthservices.com/dc-psychiatrist",
    telephone: "+1 202-933-4300",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Washington DC",
    },
    availableService: [
      {
        "@type": "MedicalService",
        name: "Psychiatric Evaluation",
      },
      {
        "@type": "MedicalService",
        name: "Medication Management",
      },
      {
        "@type": "MedicalService",
        name: "Telehealth Psychiatry",
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-28">
      <CanonicalLink href="https://tinkahealthservices.com/dc-psychiatrist" />
      <Helmet>
        <title>
          Psychiatric Provider in Washington DC | Medicaid and Kaiser DC | Tinka
          Health
        </title>
        <meta
          name="description"
          content="Tinka Health Services provides psychiatric care in Washington DC for anxiety, depression, ADHD and mood disorders. Accepting DC Medicaid, Kaiser DC and major insurance plans with telehealth options."
        />
        <meta
          name="keywords"
          content="psychiatric provider in washington dc, mental health provider dc, telehealth psychiatry dc medicaid, kaiser psychiatrist dc, amerihealth caritas dc mental health provider"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(dcServiceStructuredData)}
        </script>
      </Helmet>

      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Psychiatric Provider in Washington DC
      </h1>
      <p className="text-xl text-red-700 font-medium mb-6">
        Accepting Medicaid and Kaiser DC | Telehealth Available
      </p>

      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          Tinka Health Services offers psychiatric care for individuals in
          Washington DC. We provide medication management and mental health
          treatment for anxiety, depression, ADHD, PTSD, and mood disorders.
        </p>
        <p>
          We accept DC Medicaid, AmeriHealth Caritas DC, Kaiser Permanente DC,
          CareFirst, and other major insurance plans.
        </p>
        <p>
          Our telehealth psychiatry appointments allow you to access care
          quickly and conveniently from your home.
        </p>
        <p>
          If you are looking for a psychiatric provider in DC who accepts
          Medicaid or Kaiser, we are currently accepting new patients and offer
          same week appointments when available.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <BookingLink>Book DC Appointment</BookingLink>
        <a
          href="tel:+12029334300"
          className="border border-blue-600 text-blue-700 px-5 py-3 rounded-lg font-semibold"
        >
          Call 202-933-4300
        </a>
      </div>

      <section className="mt-10 bg-red-50 border border-red-100 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Explore Related Care
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/insurance-we-accept"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            Insurance Options
          </Link>
          <Link
            to="/telehealth-psychiatry-md-dc-va"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            Telehealth Psychiatry
          </Link>
          <Link
            to="/maryland-psychiatrist"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            Maryland Psychiatry
          </Link>
          <Link
            to="/virginia-psychiatrist"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            Virginia Psychiatry
          </Link>
        </div>
      </section>
    </main>
  );
};

export default DCPsychiatrist;
