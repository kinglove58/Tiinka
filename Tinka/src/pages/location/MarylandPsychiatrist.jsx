import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";

const MarylandPsychiatrist = () => {
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
        name: "Maryland Psychiatrist",
        item: "https://tinkahealthservices.com/maryland-psychiatrist",
      },
    ],
  };

  const marylandServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://tinkahealthservices.com/maryland-psychiatrist#clinic",
    name: "Tinka Health Services - Maryland Psychiatry",
    url: "https://tinkahealthservices.com/maryland-psychiatrist",
    telephone: "+1 443-295-6600",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Maryland",
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
      <CanonicalLink href="https://tinkahealthservices.com/maryland-psychiatrist" />
      <Helmet>
        <title>
          Psychiatric Provider in Maryland | Medicaid and Medicare Accepted |
          Tinka Health
        </title>
        <meta
          name="description"
          content="Tinka Health Services provides psychiatric care in Maryland with telehealth psychiatry appointments and medication management services. Accepting Medicaid, Medicare and major insurance plans."
        />
        <meta
          name="keywords"
          content="psychiatric provider in maryland, psychiatric nurse practitioner maryland, telehealth psychiatry maryland, psychiatric provider accepting medicaid maryland"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(marylandServiceStructuredData)}
        </script>
      </Helmet>

      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Psychiatric Provider in Maryland
      </h1>
      <p className="text-xl text-blue-700 font-medium mb-6">
        Accepting Medicaid and Medicare | Telehealth Available
      </p>

      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          Tinka Health Services provides expert psychiatric care for patients
          across Maryland. We specialize in medication management for anxiety,
          depression, ADHD, bipolar disorder, and more.
        </p>
        <p>
          We accept Medicaid, Medicare, and major insurance plans including
          CareFirst, Aetna, Cigna, Optum, and Kaiser Permanente (Maryland).
        </p>
        <p>
          Our services are available through secure telehealth psychiatry
          appointments, making mental health care accessible from anywhere in
          Maryland.
        </p>
        <p>
          If you are searching for a psychiatric provider in Maryland who
          accepts your insurance, we are here to help. Accepting new patients
          with same week appointments available when possible.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <BookingLink>Book Maryland Appointment</BookingLink>
        <a
          href="tel:+14432956600"
          className="border border-blue-600 text-blue-700 px-5 py-3 rounded-lg font-semibold"
        >
          Call 443-295-6600
        </a>
      </div>

      <section className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6">
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
            to="/dc-psychiatrist"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            DC Psychiatry
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

export default MarylandPsychiatrist;
