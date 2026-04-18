import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";

const VirginiaPsychiatrist = () => {
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
        name: "Virginia Psychiatrist",
        item: "https://tinkahealthservices.com/virginia-psychiatrist",
      },
    ],
  };

  const virginiaServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://tinkahealthservices.com/virginia-psychiatrist#clinic",
    name: "Tinka Health Services - Virginia Psychiatry",
    url: "https://tinkahealthservices.com/virginia-psychiatrist",
    telephone: "+1 571-349-8285",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Virginia",
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
      <CanonicalLink href="https://tinkahealthservices.com/virginia-psychiatrist" />
      <Helmet>
        <title>
          Psychiatric Provider in Virginia | Medicaid and Major Insurance |
          Tinka Health
        </title>
        <meta
          name="description"
          content="Tinka Health Services provides psychiatric services across Virginia through secure telehealth visits. Accepting Medicaid, Medicare, Anthem, Aetna, Cigna, Optum and more."
        />
        <meta
          name="keywords"
          content="psychiatric provider in northern virginia, psychiatric services virginia, telehealth psychiatry virginia, mental health clinic virginia"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(virginiaServiceStructuredData)}
        </script>
      </Helmet>

      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Psychiatric Provider in Virginia
      </h1>
      <p className="text-xl text-green-700 font-medium mb-6">
        Accepting Medicaid and Major Insurance | Telehealth Available
      </p>

      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          Tinka Health Services provides psychiatric services across Virginia
          through secure telehealth visits. We specialize in medication
          management and treatment for anxiety, depression, ADHD, and mood
          disorders.
        </p>
        <p>
          We accept Medicaid, Medicare, Anthem, Aetna, Cigna, Optum, and other
          major insurance plans.
        </p>
        <p>
          Our goal is to provide accessible, high-quality mental health care to
          individuals throughout Virginia.
        </p>
        <p>
          Schedule your telehealth psychiatry appointment today. Accepting new
          patients and same week appointments available when possible.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <BookingLink>Book Virginia Appointment</BookingLink>
        <a
          href="tel:+15713498285"
          className="border border-blue-600 text-blue-700 px-5 py-3 rounded-lg font-semibold"
        >
          Call 571-349-8285
        </a>
      </div>

      <section className="mt-10 bg-green-50 border border-green-100 rounded-xl p-6">
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
            to="/dc-psychiatrist"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            DC Psychiatry
          </Link>
        </div>
      </section>
    </main>
  );
};

export default VirginiaPsychiatrist;
