import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";

const marylandInsurance = [
  "Medicaid (Maryland)",
  "Medicare",
  "CareFirst (BCBS)",
  "Aetna",
  "Cigna",
  "Optum / UnitedHealthcare",
  "Magellan",
  "Amerigroup",
  "Johns Hopkins",
  "MedStar Family Choice",
  "Priority Partners",
  "Tricare",
  "Kaiser Permanente (Maryland)",
  "Aetna Better Health",
  "Behavioral Health Systems",
  "Optum Veterans Affairs",
  "Humana",
  "Multiplan",
  "GEHA",
  "Prime Health",
  "Velocity",
  "United Preferred",
  "Unity (Maryland)",
  "ClaimDoc",
];

const dcInsurance = [
  "Medicaid (DC)",
  "Medicare",
  "AmeriHealth Caritas DC",
  "CareFirst",
  "Aetna",
  "Cigna",
  "Optum / UBH",
  "Kaiser Permanente (DC)",
  "MedStar Family Choice",
  "Priority Partners",
  "Tricare",
  "Wellpoint (Amerigroup)",
  "Multiplan",
  "Humana",
  "United Preferred",
  "Medical Mutual",
  "GEHA",
  "Velocity",
  "Unity (DC)",
  "ClaimDoc",
];

const virginiaInsurance = [
  "Medicaid (VA)",
  "Medicare",
  "Anthem",
  "CareFirst",
  "Aetna",
  "Cigna",
  "Optum",
  "Magellan Complete Care",
  "Aetna Better Health",
  "VA Premier",
  "Optima Health",
  "Sentara Health Plan",
  "Tricare",
  "Humana",
  "Multiplan",
  "Medical Mutual",
  "GEHA",
  "Unity (VA)",
  "Prime Health",
  "ClaimDoc",
];

const StateInsuranceBlock = ({ title, plans, colorClass }) => (
  <section className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
    <h2 className={`text-2xl font-semibold mb-4 ${colorClass}`}>{title}</h2>
    <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
      {plans.map((plan) => (
        <li key={plan} className="list-disc ml-5">
          {plan}
        </li>
      ))}
    </ul>
  </section>
);

const InsuranceAccepted = () => {
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
        name: "Insurance We Accept",
        item: "https://tinkahealthservices.com/insurance-we-accept",
      },
    ],
  };

  const insurancePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://tinkahealthservices.com/insurance-we-accept#service",
    name: "Insurance Accepted for Psychiatric Services",
    serviceType: "Mental Health Insurance Coverage",
    url: "https://tinkahealthservices.com/insurance-we-accept",
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
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-28">
      <CanonicalLink href="https://tinkahealthservices.com/insurance-we-accept" />
      <Helmet>
        <title>
          Psychiatrist Accepting Medicaid and Medicare in MD, DC and VA | Tinka
          Health
        </title>
        <meta
          name="description"
          content="Find a psychiatric provider that accepts Medicaid, Medicare, Kaiser DC, CareFirst, Aetna and more. Serving Maryland, Washington DC and Virginia with telehealth options."
        />
        <meta
          name="keywords"
          content="psychiatrist that accepts medicaid near me, psychiatrist that takes medicare, kaiser psychiatrist dc, carefirst psychiatrist maryland, optum behavioral health provider, tricare psychiatrist near me"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(insurancePageStructuredData)}
        </script>
      </Helmet>

      <header className="mb-8">
        <p className="text-sm text-blue-600 font-semibold mb-2">
          Insurance accepted including Medicaid and Medicare
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Psychiatrist Accepting Medicaid, Medicare and Insurance in MD, DC and
          VA
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Tinka Health Services provides psychiatric care and medication
          management services with telehealth psychiatry appointments across
          Maryland, Washington DC and Virginia. Accepting new patients with same
          week appointments available when possible.
        </p>
        <div className="flex flex-wrap gap-3">
          <BookingLink>Book an Appointment</BookingLink>
          <a
            href="tel:+14432956600"
            className="border border-blue-600 text-blue-700 px-5 py-3 rounded-lg font-semibold"
          >
            Call 443-295-6600
          </a>
        </div>
      </header>

      <div className="grid gap-6">
        <StateInsuranceBlock
          title="Maryland Insurance Accepted"
          plans={marylandInsurance}
          colorClass="text-blue-700"
        />
        <StateInsuranceBlock
          title="Washington DC Insurance Accepted"
          plans={dcInsurance}
          colorClass="text-red-700"
        />
        <StateInsuranceBlock
          title="Virginia Insurance Accepted"
          plans={virginiaInsurance}
          colorClass="text-green-700"
        />
      </div>

      <section className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Looking for a provider near you?
        </h2>
        <p className="text-gray-700 mb-4">
          Explore state-focused psychiatric provider pages for Maryland,
          Washington DC and Virginia.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/maryland-psychiatrist"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            Maryland
          </Link>
          <Link
            to="/dc-psychiatrist"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            Washington DC
          </Link>
          <Link
            to="/virginia-psychiatrist"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            Virginia
          </Link>
          <Link
            to="/telehealth-psychiatry-md-dc-va"
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
          >
            Telehealth
          </Link>
        </div>
      </section>
    </main>
  );
};

export default InsuranceAccepted;
