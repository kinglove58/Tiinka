import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FiAlertCircle,
  FiCalendar,
  FiCheckCircle,
  FiCreditCard,
  FiDollarSign,
  FiFileText,
  FiHelpCircle,
  FiInfo,
  FiPhoneCall,
  FiSearch,
  FiShield,
} from "react-icons/fi";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";
import heroBg from "./bg.png";
import insuranceConsultationPhoto from "./photo1.png";

const marylandInsurance = [
  "Aetna",
  "Aetna Better Health",
  "Amerigroup",
  "Behavioral Health Systems",
  "CareFirst (BCBS)",
  "CareFirst BlueChoice",
  "Cigna",
  "ClaimDoc",
  "GEHA",
  "Humana",
  "Johns Hopkins",
  "Kaiser Permanente (Maryland)",
  "Magellan",
  "Medicaid (Maryland)",
  "Medicare",
  "MedStar Family Choice",
  "Multiplan",
  "Optum / UnitedHealthcare",
  "Optum Veterans Affairs",
  "Prime Health",
  "Priority Partners",
  "Tricare",
  "United Preferred",
  "Unity (Maryland)",
  "Velocity",
];

const dcInsurance = [
  "Aetna",
  "AmeriHealth Caritas DC",
  "AmeriHealth Caritas District of Columbia",
  "CareFirst",
  "CareFirst BlueChoice",
  "Cigna",
  "ClaimDoc",
  "GEHA",
  "Humana",
  "Kaiser Permanente (DC)",
  "Medicaid (DC)",
  "Medical Mutual",
  "Medicare",
  "MedStar Family Choice",
  "Multiplan",
  "Optum / UBH",
  "Priority Partners",
  "Tricare",
  "United Preferred",
  "Unity (DC)",
  "Velocity",
  "Wellpoint (Amerigroup)",
];

const virginiaInsurance = [
  "Aetna",
  "Aetna Better Health",
  "Anthem",
  "CareFirst",
  "CareFirst BlueChoice",
  "Cigna",
  "ClaimDoc",
  "GEHA",
  "Humana",
  "Magellan Complete Care",
  "Medicaid (VA)",
  "Medical Mutual",
  "Medicare",
  "Multiplan",
  "Optima Health",
  "Optum",
  "Prime Health",
  "Sentara Health Plan",
  "Tricare",
  "Unity (VA)",
  "VA Premier",
];

const insuranceBenefits = [
  {
    title: "Cost reduction",
    description:
      "Insurance can reduce out-of-pocket costs for psychiatric evaluations, medication management, therapy, and follow-up care.",
  },
  {
    title: "Better access",
    description:
      "Coverage makes it easier to connect with behavioral health providers, including telehealth psychiatry appointments when your plan allows it.",
  },
  {
    title: "Consistent treatment",
    description:
      "Ongoing covered visits can support medication monitoring, treatment adjustments, and a steadier path toward symptom improvement.",
  },
  {
    title: "Preventive support",
    description:
      "Many plans help patients address mental health concerns earlier, before symptoms become more disruptive or harder to manage.",
  },
];

const coverageSteps = [
  {
    title: "Identify your insurance provider",
    description:
      "Check your member ID card and confirm whether mental health benefits are handled by your main insurer or a behavioral health partner.",
    icon: FiShield,
  },
  {
    title: "Review your insurance policy",
    description:
      "Look at copays, deductibles, referrals, prior authorization rules, and telehealth coverage before scheduling your first visit.",
    icon: FiFileText,
  },
  {
    title: "Gather questions",
    description:
      "Write down anything you want to confirm about psychiatry visits, medication management, therapy coverage, or billing.",
    icon: FiHelpCircle,
  },
  {
    title: "Contact your insurance provider",
    description:
      "Call the member services number on your card to verify behavioral health benefits, network status, and expected patient costs.",
    icon: FiPhoneCall,
  },
  {
    title: "Explore clinicians near you",
    description:
      "Search for providers who accept your plan and offer the format of care you need, including telehealth across MD, DC, and VA.",
    icon: FiSearch,
  },
  {
    title: "Schedule your appointment",
    description:
      "Once your benefits are clear, book with Tinka Health Services and move forward with care using the coverage available to you.",
    icon: FiCalendar,
  },
];

const insuranceTerms = [
  {
    title: "In-network",
    description:
      "A provider who has a contract with your insurance plan. In-network care usually costs less because rates have been negotiated in advance.",
    icon: FiCheckCircle,
  },
  {
    title: "Out-of-network",
    description:
      "A provider who does not have a contract with your plan. Your costs may be higher, or your plan may cover less of the visit.",
    icon: FiAlertCircle,
  },
  {
    title: "Copay",
    description:
      "A fixed amount you pay for a covered service, such as a psychiatry follow-up appointment, after insurance is applied.",
    icon: FiCreditCard,
  },
  {
    title: "Deductible",
    description:
      "The amount you may need to pay for covered services before your insurance starts sharing more of the cost.",
    icon: FiDollarSign,
  },
  {
    title: "Prior authorization",
    description:
      "Approval some insurance plans require before they cover certain medications, services, or higher-cost forms of treatment.",
    icon: FiFileText,
  },
  {
    title: "EOB",
    description:
      "Explanation of Benefits. This is not a bill. It shows how your insurer processed a claim and what amount may still be your responsibility.",
    icon: FiInfo,
  },
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

const CoverageStepCard = ({ icon: Icon, title, description }) => (
  <article className="rounded-3xl border border-[#d8e7f6] bg-white/70 p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-[#e9f3fb] text-5xl text-[#0b63b6]">
      <Icon aria-hidden="true" />
    </div>
    <h3 className="mb-3 text-2xl font-semibold leading-snug text-[#0b2d4f]">
      {title}
    </h3>
    <p className="text-base leading-8 text-slate-700">{description}</p>
  </article>
);

const InsuranceTermCard = ({ icon: Icon, title, description }) => (
  <article className="overflow-hidden rounded-3xl border border-[#d6e6f4] bg-white shadow-[0_20px_45px_-30px_rgba(8,44,86,0.18)]">
    <div className="flex items-center gap-4 border-b border-[#d6e6f4] bg-[#eef6fd] px-6 py-5 text-[#0b63b6]">
      <span className="text-3xl">
        <Icon aria-hidden="true" />
      </span>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
    <div className="bg-[#fdfefe] px-6 py-6">
      <p className="text-lg leading-9 text-slate-800">{description}</p>
    </div>
  </article>
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
    description:
      "Tinka Health Services accepts major insurance plans for psychiatric care, medication management, and telehealth appointments across Maryland, Washington DC, and Virginia.",
    image: "https://tinkahealthservices.com/images/insurance/insurance.png",
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

  const mentalHealthCoverageHowToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to get the most out of your mental health insurance coverage",
    description:
      "A step-by-step guide from Tinka Health Services for checking mental health insurance coverage before booking psychiatric care.",
    totalTime: "PT20M",
    step: coverageSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
      url: "https://tinkahealthservices.com/insurance-we-accept#getting-the-most-out-of-your-mental-health-insurance-coverage",
    })),
  };

  const insuranceTermsStructuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Common Mental Health Insurance Terms",
    description:
      "Definitions of common mental health insurance terms used by Tinka Health Services.",
    hasDefinedTerm: insuranceTerms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.title,
      description: term.description,
      inDefinedTermSet:
        "https://tinkahealthservices.com/insurance-we-accept#common-mental-health-insurance-terms",
    })),
  };

  return (
    <main className="pb-32 py-16">
      <CanonicalLink href="https://tinkahealthservices.com/insurance-we-accept" />
      <Helmet>
        <title>
          Psychiatrist Accepting Medicaid, Medicare and Insurance in MD, DC and
          VA | Tinka Health Services
        </title>
        <meta
          name="description"
          content="See the insurance plans Tinka Health Services accepts in Maryland, Washington DC, and Virginia, plus mental health insurance benefits, coverage tips, and common insurance terms for psychiatry and telehealth care."
        />
        <meta
          name="keywords"
          content="psychiatrist that accepts medicaid near me, psychiatrist that takes medicare, mental health insurance coverage, psychiatric insurance coverage, telehealth psychiatry insurance, carefirst psychiatrist maryland, kaiser psychiatrist dc, tricare psychiatrist near me"
        />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content="Psychiatrist Accepting Medicaid, Medicare and Insurance in MD, DC and VA | Tinka Health Services"
        />
        <meta
          property="og:description"
          content="Learn which insurance plans Tinka Health Services accepts and how to understand your mental health insurance coverage before booking care."
        />
        <meta
          property="og:url"
          content="https://tinkahealthservices.com/insurance-we-accept"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(insurancePageStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(mentalHealthCoverageHowToStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(insuranceTermsStructuredData)}
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
              Insurances Accepted at Tinka Health Services in MD, DC and VA
            </h1>
            <p className="mb-5 text-lg text-white/95">
              Find Tinka Health Services providers near you who accept your
              insurance plan, making access to mental health care more
              convenient and affordable. Tinka Health Services accepts many
              major insurance plans, ensuring that quality mental health care is
              accessible to a broader community.
            </p>
            <div className="flex flex-wrap gap-3">
              <BookingLink className="bg-[#ffffff] hover:bg-[#8cb5df] text-blue-900">
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
        <div className="mb-6 rounded-2xl border border-blue-100 bg-white p-6 text-lg leading-8 text-slate-700 shadow-sm">
          We accept most major insurance plans and will verify your insurance
          benefits prior to your appointment. This allows you to be fully
          informed of any out-of-pocket costs, copays, deductibles, or patient
          responsibilities before your visit.
        </div>

        <div className="grid gap-6">
          <StateInsuranceBlock
            title="Maryland Insurance Accepted"
            plans={marylandInsurance}
            colorClass="text-blue-700"
          />
          <StateInsuranceBlock
            title="Washington DC Insurance Accepted"
            plans={dcInsurance}
            colorClass="text-blue-700"
          />
          <StateInsuranceBlock
            title="Virginia Insurance Accepted"
            plans={virginiaInsurance}
            colorClass="text-blue-700"
          />
        </div>

        <section
          id="understanding-mental-health-insurance-and-its-benefits"
          aria-labelledby="mental-health-insurance-benefits-heading"
          className="mt-10 overflow-hidden rounded-[32px] bg-[#3567f1] px-6 py-10 shadow-[0_30px_70px_-40px_rgba(11,45,79,0.45)] ring-1 ring-[#d6e6f4] md:px-10 md:py-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <h2
                id="mental-health-insurance-benefits-heading"
                className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-[#ffffff] md:text-5xl"
              >
                Understanding Mental Health Insurance and Its Benefits
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white">
                Mental health insurance helps cover the cost of psychiatric
                care, medication management, therapy, and other behavioral
                health services. At Tinka Health Services, many patients use
                their insurance benefits to make mental health treatment more
                affordable and more accessible across Maryland, Washington DC,
                and Virginia.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white">
                Coverage details vary by plan, but understanding your benefits
                before your first appointment can help you prepare for copays,
                deductibles, referrals, prior authorization requirements, and
                telehealth eligibility. Knowing how your policy works can make
                it easier to start care with confidence.
              </p>

              <div className="mt-8 rounded-[28px] bg-white p-6 shadow-sm ring-1 ring-[#fcfcfc]">
                <h3 className="text-2xl font-semibold text-[#0b3b6f] md:text-3xl">
                  Insurance improves access to mental health care
                </h3>
                <ul className="mt-5 space-y-5 text-lg leading-8 text-slate-700">
                  {insuranceBenefits.map((benefit) => (
                    <li key={benefit.title} className="flex gap-4">
                      <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#0b63b6]" />
                      <p>
                        <span className="font-semibold text-slate-900">
                          {benefit.title}:
                        </span>{" "}
                        {benefit.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative lg:pl-4">
              <div className="absolute -left-5 top-6 h-28 w-28 rounded-full bg-[#8cb5df]/40 blur-3xl" />
              <div className="absolute -bottom-4 right-4 h-36 w-36 rounded-full bg-[#0b63b6]/15 blur-3xl" />
              <img
                src={insuranceConsultationPhoto}
                alt="Mental health consultation showing a provider and patient discussing treatment and insurance coverage"
                className="relative h-full min-h-[420px] w-full rounded-[30px] object-cover shadow-[0_35px_80px_-45px_rgba(8,44,86,0.8)] ring-1 ring-black/5"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section
          id="our-commitment-to-accessibility-and-affordability"
          aria-labelledby="accessibility-affordability-heading"
          className="mt-8 overflow-hidden rounded-[32px] bg-white  px-6 py-10 text-[#3567f1]  shadow-[0_30px_70px_-40px_rgba(8,44,86,0.85)] md:px-10 md:py-12"
        >
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              
              <h2
                id="accessibility-affordability-heading"
                className="mt-5 max-w-xl text-3xl font-bold leading-tight md:text-5xl"
              >
                Our Commitment to Accessibility and Affordability
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-black ">
                Tinka Health Services is committed to making high-quality mental
                health care easier to reach and easier to afford. By working
                with major insurance plans and offering telehealth psychiatry,
                we help reduce common barriers that can delay care.
              </p>
              <BookingLink className="mt-8 bg-[#3567f1]  text-white hover:bg-[#3d8cec] shadow-lg shadow-black/10">
                Book an Appointment
              </BookingLink>
            </div>

            <div className="rounded-[28px] border border-[#3567f1]  bg-[#3567f1] p-6 backdrop-blur-sm md:p-8">
              <p className="text-lg leading-9 text-white">
                Whether you are using Medicaid, Medicare, or a commercial
                insurance plan, our goal is to help you understand your options
                before treatment begins. That includes clearer guidance on
                covered services, expected costs, and what to verify with your
                insurance carrier.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white bg-white p-5">
                  <h3 className="text-xl font-semibold">
                    Broad insurance access
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#3567f1] ">
                    We accept many major plans across Maryland, Washington DC,
                    and Virginia to expand access to psychiatry services.
                  </p>
                </div>
                <div className="rounded-2xl border border-white bg-white p-5">
                  <h3 className="text-xl font-semibold">
                    Telehealth convenience
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#3567f1] ">
                    Telehealth appointments can make psychiatric care easier to
                    fit into work, school, family, and transportation needs.
                  </p>
                </div>
                <div className="rounded-2xl border border-white bg-white p-5">
                  <h3 className="text-xl font-semibold">Clear next steps</h3>
                  <p className="mt-2 text-base leading-7 text-[#3567f1] ">
                    We encourage patients to verify benefits early so there are
                    fewer surprises around referrals, copays, or deductibles.
                  </p>
                </div>
                <div className="rounded-2xl border border-white bg-white p-5">
                  <h3 className="text-xl font-semibold">Ongoing support</h3>
                  <p className="mt-2 text-base leading-7 text-[#3567f1] ">
                    Consistent access to psychiatric care can support medication
                    follow-up, treatment planning, and long-term wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="getting-the-most-out-of-your-mental-health-insurance-coverage"
          aria-labelledby="coverage-steps-heading"
          className="mt-8 overflow-hidden rounded-[32px] bg-[#3567f1]  px-6 py-10 shadow-[0_30px_70px_-40px_rgba(11,45,79,0.4)] ring-1 ring-[#d6e6f4] md:px-10 md:py-12"
        >
          <div className="mx-auto max-w-4xl text-center">
          
            <h2
              id="coverage-steps-heading"
              className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl"
            >
              Getting The Most Out Of Your Mental Health Insurance Coverage
            </h2>
            <p className="mt-5 text-lg leading-8 text-white">
              Use these steps to understand your behavioral health benefits,
              prepare questions for your insurance company, and move into care
              with fewer surprises.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {coverageSteps.map((step) => (
              <CoverageStepCard key={step.title} {...step} />
            ))}
          </div>
        </section>

        <section
          id="common-mental-health-insurance-terms"
          aria-labelledby="insurance-terms-heading"
          className="mt-8 overflow-hidden rounded-[32px] border border-[#d6e6f4] bg-white px-6 py-10 text-[#1d2b3a] shadow-[0_35px_80px_-45px_rgba(8,44,86,0.16)] md:px-10 md:py-12"
        >
          <div className="mx-auto max-w-4xl text-center">
            
            <h2
              id="insurance-terms-heading"
              className="mt-5 text-3xl font-bold leading-tight md:text-5xl"
            >
              Common Mental Health Insurance Terms
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Understanding a few key insurance words can make it easier to
              compare plans, verify benefits, and understand what you may owe
              for psychiatric care.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {insuranceTerms.map((term) => (
              <InsuranceTermCard key={term.title} {...term} />
            ))}
          </div>
        </section>

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
