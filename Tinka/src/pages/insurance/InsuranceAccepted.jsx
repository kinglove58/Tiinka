import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";
import heroBg from "./bg.png";

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
    <main className="pb-32 py-16">
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

      <header className="relative isolate mb-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-80"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 pb-0 pt-6 md:grid-cols-[minmax(320px,560px)_1fr] md:items-end md:px-8 md:pt-10 lg:px-10">
          <div className="self-end md:-ml-14 lg:-ml-20 md:-mb-8">
            <img
              src="/images/insurance/insurance.png"
              alt="Smiling provider representing accessible insurance-supported care"
              className="mx-auto w-full max-w-[1050px] object-contain md:mx-0 md:w-[126%] md:-translate-x-12 lg:-translate-x-24"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={760}
              height={980}
            />
          </div>

          <div className="max-w-2xl pb-2 md:pb-10">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              Psychiatrist Accepting Medicaid, Medicare and Insurance in MD, DC
              and VA
            </h1>
            <p className="mb-5 text-lg text-white/95">
              Tinka Health Services provides psychiatric care and medication
              management services with telehealth psychiatry appointments across
              Maryland, Washington DC and Virginia. Accepting new patients with
              same week appointments available when possible.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookingLink className="bg-[#005ab0] hover:bg-[#00478c]">
                Book an Appointment
              </BookingLink>
              <a
                href="tel:+14432956600"
                className="rounded-lg border border-white/70 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
              >
                Call 443-295-6600
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4">
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

        <section className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Looking for a provider near you?
          </h2>
          <p className="mb-4 text-gray-700">
            Explore state-focused psychiatric provider pages for Maryland,
            Washington DC and Virginia.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/maryland-psychiatrist"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700"
            >
              Maryland
            </Link>
            <Link
              to="/dc-psychiatrist"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700"
            >
              Washington DC
            </Link>
            <Link
              to="/virginia-psychiatrist"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700"
            >
              Virginia
            </Link>
            <Link
              to="/telehealth-psychiatry-md-dc-va"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700"
            >
              Telehealth
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default InsuranceAccepted;
