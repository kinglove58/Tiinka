import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";

const TelehealthPsychiatry = () => {
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
        name: "Telehealth Psychiatry in MD, DC and VA",
        item: "https://tinkahealthservices.com/telehealth-psychiatry-md-dc-va",
      },
    ],
  };

  const telehealthServiceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://tinkahealthservices.com/telehealth-psychiatry-md-dc-va#service",
    name: "Telehealth Psychiatry",
    serviceType: "Online Psychiatric Care and Medication Management",
    url: "https://tinkahealthservices.com/telehealth-psychiatry-md-dc-va",
    provider: {
      "@type": "MedicalOrganization",
      name: "Tinka Health Services",
      url: "https://tinkahealthservices.com",
      telephone: "+1 443-295-6600",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Maryland" },
      { "@type": "AdministrativeArea", name: "Washington DC" },
      { "@type": "AdministrativeArea", name: "Virginia" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl:
        "https://tinkahealthservices.com/telehealth-psychiatry-md-dc-va",
      availableLanguage: ["English"],
    },
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-28">
      <Helmet>
        <title>
          Telehealth Psychiatry in MD, DC and VA | Online Mental Health Care
        </title>
        <meta
          name="description"
          content="Get online psychiatric care from home. Tinka Health Services offers telehealth medication management in Maryland, DC and Virginia. Insurance accepted including Medicaid and Medicare."
        />
        <meta
          name="keywords"
          content="telehealth psychiatry maryland, telehealth psychiatry dc medicaid, telehealth psychiatry virginia, online therapy medicaid dc, telehealth psychiatry covered by insurance"
        />
        <link
          rel="canonical"
          href="https://tinkahealthservices.com/telehealth-psychiatry-md-dc-va"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(telehealthServiceStructuredData)}
        </script>
      </Helmet>

      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Telehealth Psychiatry in MD, DC and VA
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Get online psychiatric care from home with board-certified psychiatric
          providers. We offer medication management services for anxiety,
          depression, ADHD, bipolar disorder, PTSD, and more.
        </p>
        <p className="text-lg text-gray-700 mb-5">
          Insurance accepted including Medicaid and Medicare. Accepting new
          patients and same week appointments available when possible.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Why patients choose telehealth psychiatry
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="list-disc ml-5">
              Secure virtual appointments from home
            </li>
            <li className="list-disc ml-5">
              Flexible scheduling across MD, DC and VA
            </li>
            <li className="list-disc ml-5">
              Medication management services with follow-up
            </li>
            <li className="list-disc ml-5">Insurance-friendly care pathways</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Platforms and access options
          </h2>
          <p className="text-gray-700 mb-3">
            We are available through SonderMind, Grow Therapy, and Rula, giving
            you multiple ways to access online care that fits your schedule.
          </p>
          <p className="text-gray-700">
            Whether you need a PMHNP near me search result or a telehealth
            psychiatry covered by insurance option, Tinka Health Services can
            help you start quickly.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 border border-blue-100 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Ready to start?
        </h2>
        <div className="flex flex-wrap gap-3">
          <BookingLink>Book Telehealth Appointment</BookingLink>
          <Link
            to="/insurance-we-accept"
            className="border border-blue-600 text-blue-700 px-5 py-3 rounded-lg font-semibold"
          >
            Check Insurance Coverage
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
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

export default TelehealthPsychiatry;
