import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiClipboard,
  FiClock,
  FiMapPin,
  FiPhone,
  FiShield,
  FiUserCheck,
  FiVideo,
} from "react-icons/fi";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";

const canonicalUrl =
  "https://tinkahealthservices.com/psychiatric-provider-herndon-va";

const nearbyAreas = [
  "Reston",
  "Sterling",
  "Chantilly",
  "Fairfax",
  "Ashburn",
  "Dulles",
  "Vienna",
  "Leesburg",
];

const insurancePlans = [
  "Virginia Medicaid",
  "Medicare",
  "Aetna",
  "Aetna Better Health",
  "Anthem",
  "CareFirst",
  "CareFirst BlueChoice",
  "Cigna",
  "GEHA",
  "Humana",
  "Magellan Complete Care",
  "Medical Mutual",
  "Multiplan",
  "Optima Health",
  "Optum",
  "Sentara Health Plan",
  "Tricare",
  "Unity (VA)",
  "VA Premier",
];

const serviceCards = [
  {
    title: "Psychiatric evaluations",
    description:
      "Start with a careful review of symptoms, health history, medications, sleep, stress, and treatment goals so your care plan is based on the full picture.",
  },
  {
    title: "Medication management",
    description:
      "Get ongoing psychiatric medication support for effectiveness, side effects, refills, dosage changes, and treatment adjustments when clinically appropriate.",
  },
  {
    title: "Telehealth psychiatry in Virginia",
    description:
      "Meet securely from home when eligible, while still having a real Herndon office location and phone number for scheduling and insurance questions.",
  },
];

const conditionCards = [
  {
    title: "Anxiety and panic",
    description:
      "Support for constant worry, panic attacks, racing thoughts, social anxiety, stress overload, and symptoms that make daily life harder.",
  },
  {
    title: "Depression and mood concerns",
    description:
      "Care for low motivation, sadness, irritability, hopelessness, emotional numbness, fatigue, and mood changes that continue over time.",
  },
  {
    title: "ADHD medication management",
    description:
      "Evaluation and medication support for focus, organization, impulsivity, follow-through, school, work, and daily responsibilities.",
  },
  {
    title: "Bipolar disorder",
    description:
      "Psychiatric care for mood swings, hypomanic or manic symptoms, depression cycles, sleep changes, and medication monitoring.",
  },
  {
    title: "PTSD and trauma symptoms",
    description:
      "Support for intrusive thoughts, hypervigilance, nightmares, avoidance, emotional reactivity, and trauma-related sleep disruption.",
  },
  {
    title: "Sleep, stress, and burnout",
    description:
      "Help for insomnia, chronic stress, burnout, irritability, and mental exhaustion that affects work, family, or relationships.",
  },
];

const appointmentSteps = [
  {
    title: "Book online or call",
    description:
      "Use the booking link or call 571-349-8285 to request a Herndon psychiatry appointment and confirm the best visit type.",
    icon: FiCalendar,
  },
  {
    title: "Confirm insurance",
    description:
      "Share your plan information so coverage, copays, deductibles, referrals, and telehealth eligibility can be reviewed before care begins.",
    icon: FiShield,
  },
  {
    title: "Complete your evaluation",
    description:
      "Meet with a psychiatric provider to discuss symptoms, history, current medications, goals, and a practical treatment plan.",
    icon: FiUserCheck,
  },
  {
    title: "Continue care",
    description:
      "Follow-up visits help monitor progress, manage prescriptions, adjust medication, and keep treatment moving in the right direction.",
    icon: FiClipboard,
  },
];

const faqs = [
  {
    question: "Are you accepting new psychiatry patients in Herndon, VA?",
    answer:
      "Yes. Tinka Health Services is accepting new patients for psychiatric evaluations, medication management, and eligible telehealth psychiatry visits in Virginia. Appointment availability can change, so booking early is recommended.",
  },
  {
    question: "Do you accept Virginia Medicaid, Medicare, and insurance?",
    answer:
      "Tinka Health Services accepts many insurance plans used by Virginia patients, including Medicaid (VA), Medicare, Aetna, Anthem, CareFirst, Cigna, Optum, Sentara Health Plan, Tricare, and VA Premier. Benefits should be verified before the first visit.",
  },
  {
    question: "Can I book telehealth psychiatry if I live in Virginia?",
    answer:
      "Yes. Secure telehealth psychiatry may be available if you are located in Virginia at the time of your appointment and your plan allows virtual behavioral health care.",
  },
  {
    question: "Do you provide ADHD medication management in Herndon?",
    answer:
      "Tinka Health Services provides psychiatric evaluation and medication management for ADHD and related attention concerns when clinically appropriate.",
  },
  {
    question: "What mental health conditions do you treat?",
    answer:
      "Common concerns include anxiety, depression, ADHD, bipolar disorder, PTSD, insomnia, stress, burnout, mood concerns, and related behavioral health needs.",
  },
  {
    question: "Do you provide crisis services?",
    answer:
      "No. Tinka Health Services does not provide emergency or crisis management. If you are in immediate danger, call 911 or go to the nearest emergency department. For mental health crisis support, call or text 988.",
  },
];

const metaTitle =
  "Psychiatric Provider in Herndon, VA | Tinka Health";
const metaDescription =
  "Book psychiatric evaluations and medication management in Herndon, VA with telehealth psychiatry and accepted insurance plans.";

const structuredData = [
  {
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
        name: "Psychiatric Provider in Herndon VA",
        item: canonicalUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${canonicalUrl}#herndon-clinic`,
    name: "Tinka Health Services - Herndon Psychiatry",
    url: canonicalUrl,
    image:
      "https://tinkahealthservices.com/images/img_mental_health/hero/teletherapyimg.webp",
    telephone: "+1 571-349-8285",
    medicalSpecialty: "Psychiatry",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "585 Grove St, Suite 145",
      addressLocality: "Herndon",
      addressRegion: "VA",
      postalCode: "20170",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.9669109,
      longitude: -77.3802178,
    },
    areaServed: [
      { "@type": "City", name: "Herndon" },
      { "@type": "City", name: "Reston" },
      { "@type": "City", name: "Sterling" },
      { "@type": "City", name: "Fairfax" },
      { "@type": "State", name: "Virginia" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    availableService: [
      { "@type": "MedicalService", name: "Psychiatric Evaluation" },
      { "@type": "MedicalService", name: "Medication Management" },
      { "@type": "MedicalService", name: "Telehealth Psychiatry" },
      { "@type": "MedicalService", name: "ADHD Medication Management" },
      { "@type": "MedicalService", name: "Anxiety Treatment" },
      { "@type": "MedicalService", name: "Depression Treatment" },
    ],
    provider: {
      "@type": "Person",
      name: "Seliat Dosunmu, DNP, PMHNP-BC, FNP-C",
      jobTitle: "Psychiatric Mental Health Nurse Practitioner",
      worksFor: {
        "@type": "MedicalOrganization",
        name: "Tinka Health Services",
        url: "https://tinkahealthservices.com",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

const renderTrustPill = (Icon, label) => (
  <span className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
    <Icon aria-hidden="true" className="h-4 w-4" />
    {label}
  </span>
);

const renderSectionHeading = ({ eyebrow, title, description }) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow && (
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </p>
    )}
    <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-lg leading-8 text-slate-700">{description}</p>
    )}
  </div>
);

const HerndonPsychiatricProvider = () => {
  return (
    <main className="bg-[#f4f7fb] pt-20">
      <CanonicalLink href={canonicalUrl} />
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="psychiatric provider Herndon VA, psychiatrist Herndon VA Medicaid, medication management Herndon VA, telehealth psychiatry Virginia, Virginia Medicaid psychiatrist, ADHD medication management Herndon, anxiety treatment Herndon VA, depression treatment Herndon VA"
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content="https://tinkahealthservices.com/images/img_mental_health/hero/teletherapyimg.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {structuredData.map((item, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(item)}
          </script>
        ))}
      </Helmet>

      <section
        className="relative min-h-[70vh] overflow-hidden bg-slate-950 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4, 26, 55, 0.95), rgba(4, 26, 55, 0.78), rgba(4, 26, 55, 0.42)), url('/images/img_mental_health/hero/teletherapyimg.webp')",
        }}
      >
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-14 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-blue-200/40 bg-white/10 px-3 py-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-100">
              Accepting new patients in Herndon, VA
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Psychiatric Provider in Herndon, VA
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">
              Get compassionate psychiatric evaluations, medication management,
              and secure telehealth psychiatry for anxiety, depression, ADHD,
              bipolar disorder, PTSD, insomnia, stress, and mood concerns.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
              Tinka Health Services helps Virginia patients start care with a
              clear plan, insurance-friendly scheduling, and ongoing support
              from a psychiatric mental health provider.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BookingLink className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-bold text-blue-800 hover:bg-blue-50">
                Book a Herndon Appointment
                <FiArrowRight aria-hidden="true" />
              </BookingLink>
              <a
                href="tel:+15713498285"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/60 px-5 py-3 font-bold text-white transition hover:bg-white/10"
              >
                <FiPhone aria-hidden="true" />
                Call 571-349-8285
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {renderTrustPill(FiMapPin, "585 Grove St, Suite 145")}
              {renderTrustPill(FiShield, "Medicaid and Medicare accepted")}
              {renderTrustPill(FiVideo, "Telehealth across Virginia")}
              {renderTrustPill(FiCheckCircle, "Same-week visits when open")}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 md:grid-cols-3 md:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
              <FiMapPin aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-500">Office</p>
              <p className="font-bold text-slate-950">
                Herndon, VA near Reston and Sterling
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
              <FiShield aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Insurance
              </p>
              <p className="font-bold text-slate-950">
                Virginia Medicaid, Medicare, and major plans
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
              <FiClock aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-500">Access</p>
              <p className="font-bold text-slate-950">
                In-person and online psychiatry options
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Mental health care near you
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              Start care with a psychiatric provider who listens first
            </h2>
            <div className="mt-5 space-y-5 text-lg leading-8 text-slate-700">
              <p>
                When symptoms begin affecting sleep, focus, motivation,
                relationships, work, school, or daily responsibilities, it may
                be time to speak with a psychiatric provider. Tinka Health
                Services offers psychiatric care in Herndon, VA for patients
                who need a thoughtful evaluation, medication guidance, and a
                plan they can follow.
              </p>
              <p>
                Our care is built for real life. You can request an appointment
                at the Herndon office, use secure telehealth psychiatry when
                eligible, and receive medication management follow-up designed
                to support stability, function, and long-term progress.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/insurance-we-accept"
                className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-white px-4 py-3 font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-50"
              >
                See Accepted Insurance
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link
                to="/meet-our-provider"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Meet Dr. Dosunmu
              </Link>
            </div>
          </div>

          <aside className="rounded-md border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-950">
              Herndon office details
            </h3>
            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <FiMapPin
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-blue-700"
                />
                <div>
                  <p className="font-bold text-slate-950">
                    585 Grove St, Suite 145
                  </p>
                  <p className="text-slate-700">Herndon, VA 20170</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FiPhone
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-blue-700"
                />
                <div>
                  <p className="font-bold text-slate-950">571-349-8285</p>
                  <p className="text-slate-700">
                    Call for appointment availability, insurance questions, and
                    new patient scheduling.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <FiVideo
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-blue-700"
                />
                <div>
                  <p className="font-bold text-slate-950">
                    Telehealth psychiatry available
                  </p>
                  <p className="text-slate-700">
                    Virtual visits may be available for eligible patients who
                    are located in Virginia at the time of care.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {renderSectionHeading({
            eyebrow: "Services",
            title: "Psychiatric care in Herndon that is clear and practical",
            description:
              "Tinka Health Services focuses on diagnosis, medication support, follow-up care, and education so patients understand what is happening and what to do next.",
          })}

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="rounded-md border border-slate-200 bg-[#f8fbff] p-6"
              >
                <FiCheckCircle
                  aria-hidden="true"
                  className="mb-4 h-7 w-7 text-blue-700"
                />
                <h3 className="text-xl font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {renderSectionHeading({
            eyebrow: "Conditions",
            title:
              "Treatment support for anxiety, depression, ADHD, and mood symptoms",
            description:
              "Patients often reach out when symptoms are no longer easy to manage alone. A psychiatric evaluation can help clarify the next step.",
          })}

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {conditionCards.map((condition) => (
              <article
                key={condition.title}
                className="rounded-md border border-blue-100 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {condition.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  {condition.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {renderSectionHeading({
            eyebrow: "Insurance",
            title: "Psychiatric provider accepting insurance in Virginia",
            description:
              "Insurance should not be a mystery before you book. Tinka Health Services accepts many Virginia plans for psychiatric care, medication management, and eligible telehealth visits.",
          })}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {insurancePlans.map((plan) => (
              <div
                key={plan}
                className="rounded-md border border-blue-100 bg-[#f8fbff] px-4 py-3 font-semibold text-slate-800 shadow-sm"
              >
                {plan}
              </div>
            ))}
            <Link
              to="/insurance-we-accept"
              className="inline-flex min-h-[58px] items-center justify-between gap-3 rounded-md border border-blue-700 bg-blue-700 px-4 py-3 font-bold text-white shadow-sm transition hover:bg-blue-800"
            >
              See Insurance We Accept
              <FiArrowRight aria-hidden="true" className="h-5 w-5 flex-none" />
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-600">
            Insurance participation and benefits can vary by plan. Please
            verify coverage, copays, deductibles, referrals, medication rules,
            and telehealth eligibility before the appointment.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
                New patient flow
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                From first appointment to ongoing medication management
              </h2>
              <p className="mt-5 text-lg leading-8 text-blue-50">
                Starting psychiatric care should feel organized. Our process
                helps patients move from booking to evaluation, insurance
                review, treatment planning, and follow-up without unnecessary
                confusion.
              </p>
              <BookingLink className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-bold text-blue-800 hover:bg-blue-50">
                Schedule My Visit
                <FiArrowRight aria-hidden="true" />
              </BookingLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {appointmentSteps.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-md border border-white/10 bg-white/10 p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-blue-500 text-white">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-blue-50">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-md bg-blue-50">
            <img
              src="/images/img_mental_health/contact_us/Pro_Head_shot.jpg"
              alt="Seliat Dosunmu, psychiatric provider at Tinka Health Services"
              className="h-full max-h-[520px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Provider trust
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              Care led by Dr. Seliat Dosunmu, DNP, FNP-C, PMHNP-BC
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Dr. Dosunmu is a dual board-certified Family Nurse Practitioner
              and Psychiatric Mental Health Nurse Practitioner with more than a
              decade of nursing and advanced practice experience. Her approach
              combines clinical knowledge, careful listening, education, and
              individualized treatment planning.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              At Tinka Health Services, care is designed to be respectful,
              stigma-free, and practical for patients managing both mental
              health and everyday responsibilities.
            </p>
            <Link
              to="/meet-our-provider"
              className="mt-7 inline-flex items-center gap-2 rounded-md border border-blue-200 bg-white px-5 py-3 font-bold text-blue-800 transition hover:border-blue-400 hover:bg-blue-50"
            >
              View Provider Profile
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {renderSectionHeading({
            eyebrow: "Northern Virginia",
            title: "Psychiatric care for Herndon and nearby communities",
            description:
              "The Herndon office supports patients across Northern Virginia, with telehealth options for eligible patients located in Virginia.",
          })}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span
                key={area}
                className="rounded-md border border-slate-200 bg-white px-4 py-3 font-bold text-slate-800 shadow-sm"
              >
                {area}, VA
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {renderSectionHeading({
            eyebrow: "FAQ",
            title: "Questions before booking psychiatric care in Herndon",
          })}
          <div className="mt-10 divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
            {faqs.map((item) => (
              <article key={item.question} className="p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  {item.question}
                </h3>
                <p className="mt-3 leading-8 text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-md bg-blue-800 px-6 py-8 text-white md:flex-row md:items-center md:px-8">
          <div>
            <h2 className="text-3xl font-bold">
              Ready to book psychiatric care in Herndon?
            </h2>
            <p className="mt-3 text-blue-50">
              Schedule online or call the Herndon office for new patient
              availability and insurance questions.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <BookingLink className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-bold text-blue-800 hover:bg-blue-50">
              Book Appointment
              <FiArrowRight aria-hidden="true" />
            </BookingLink>
            <a
              href="tel:+15713498285"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/60 px-5 py-3 font-bold text-white transition hover:bg-white/10"
            >
              <FiPhone aria-hidden="true" />
              Call Herndon
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HerndonPsychiatricProvider;
