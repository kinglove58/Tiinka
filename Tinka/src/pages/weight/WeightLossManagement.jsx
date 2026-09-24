import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiClipboard,
  FiHeart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiVideo,
} from "react-icons/fi";
import BookingLink from "../../components/BookingLink";
import CanonicalLink from "../../components/CanonicalLink";

const BASE_URL = "https://tinkahealthservices.com";
const PAGE_PATH = "/weight-loss-management";
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`;
const HERO_IMAGE = "/images/services/weight-loss-management-hero.png";
const HERO_IMAGE_URL = `${BASE_URL}${HERO_IMAGE}`;

const supportItems = [
  "Medical and lifestyle review focused on your weight, health history, sleep, stress, and daily routines",
  "Personalized nutrition, activity, and habit goals that fit real life",
  "Ongoing follow-up visits to review progress, barriers, and next steps",
  "Lifestyle planning and follow-up support tailored to your goals",
  "Telehealth access for eligible patients in Maryland, Washington DC, and Virginia",
  "Insurance-friendly care with benefits verified before treatment whenever possible",
];

const steps = [
  {
    title: "Book your first visit",
    text: "Choose an appointment time and share your goals, medical history, weight-related concerns and daily routines.",
  },
  {
    title: "Meet with a provider",
    text: "Your provider reviews safety factors, lifestyle patterns, emotional health, and whether additional labs or medical follow-up may be needed.",
  },
  {
    title: "Start a realistic plan",
    text: "You leave with a care plan that may include nutrition goals, activity changes, behavior support, follow-up timing, and ways to track progress.",
  },
];

const programAreas = [
  {
    icon: FiTarget,
    title: "Personalized weight goals",
    text: "Care starts with your health picture, not a one-size-fits-all diet. We help you set practical goals that can be measured and adjusted over time.",
  },
  {
    icon: FiActivity,
    title: "Lifestyle and behavior support",
    text: "We review eating patterns, activity, sleep, stress, emotional triggers, and consistency so your plan supports long-term change.",
  },
  {
    icon: FiClipboard,
    title: "Care plan guidance",
    text: "Your provider reviews practical strategies, progress measures, and when another specialist may be helpful.",
  },
  {
    icon: FiVideo,
    title: "Telehealth follow-up",
    text: "Eligible patients can continue care by secure video visits, making it easier to stay connected while balancing work, school, and family life.",
  },
];

const faqItems = [
  {
    question: "Does Tinka Health Services provide telehealth weight loss management?",
    answer:
      "Yes. Tinka Health Services offers weight loss management visits by telehealth for eligible patients in Maryland, Washington DC, and Virginia. Availability depends on your location, medical needs, and insurance coverage.",
  },
  {
    question: "What does the weight management service include?",
    answer:
      "Visits focus on clinical review, practical lifestyle goals, and follow-up support tailored to your health history and needs.",
  },
  {
    question: "Is the program focused only on diet?",
    answer:
      "No. The program also considers sleep, stress, activity, emotional eating, daily routines, and accountability.",
  },
  {
    question: "Can insurance cover weight loss management?",
    answer:
      "Coverage depends on your insurance plan, diagnosis, benefits, and the type of visit. Our team can help review accepted plans and explain what should be verified before care begins.",
  },
  {
    question: "Who is a good fit for this service?",
    answer:
      "This service may fit adults who want clinical support for weight loss, weight-related health concerns, emotional eating, or help building a sustainable plan with follow-up care.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Weight Loss Management | Tinka Health Services",
    url: PAGE_URL,
    description:
      "Weight loss management with telehealth support, lifestyle planning, clinical guidance, and follow-up care in Maryland, Washington DC, and Virginia.",
    image: HERO_IMAGE_URL,
    about: {
      "@type": "MedicalCondition",
      name: "Weight management",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Tinka Health Services",
      url: BASE_URL,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "Tinka Health Services",
      url: BASE_URL,
      telephone: "+1 443-295-6600",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: "Weight Loss Management",
    url: PAGE_URL,
    serviceType: "Weight loss management",
    provider: {
      "@type": "MedicalOrganization",
      name: "Tinka Health Services",
      url: BASE_URL,
      telephone: "+1 443-295-6600",
    },
    areaServed: [
      { "@type": "State", name: "Maryland" },
      { "@type": "AdministrativeArea", name: "Washington DC" },
      { "@type": "State", name: "Virginia" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: PAGE_URL,
      servicePhone: "+1 443-295-6600",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

const WeightLossManagement = () => (
  <main className="bg-white pt-20 text-[#06192f]">
    <CanonicalLink href={PAGE_URL} />
    <Helmet>
      <title>
        Weight Loss Management in MD, DC & VA | Tinka Health Services
      </title>
      <meta
        name="description"
        content="Weight loss management with telehealth visits, lifestyle planning, clinical guidance, and follow-up care in Maryland, DC, and Virginia."
      />
      <meta
        name="keywords"
        content="weight loss management, medical weight loss telehealth, weight management Maryland, weight loss provider DC, weight management Virginia, obesity care, lifestyle weight loss support"
      />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Weight Loss Management in MD, DC & VA | Tinka Health Services"
      />
      <meta
        property="og:description"
        content="Personalized weight loss management with telehealth access, lifestyle support, clinical guidance, and follow-up care."
      />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:image" content={HERO_IMAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Weight Loss Management in MD, DC & VA | Tinka Health Services"
      />
      <meta
        name="twitter:description"
        content="Telehealth-friendly weight loss management with personalized goals and clinical follow-up."
      />
      <meta name="twitter:image" content={HERO_IMAGE_URL} />
      {structuredData.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>

    <section className="overflow-hidden bg-[#f4f8fc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-20 lg:px-12">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            Telehealth weight management
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Weight loss management that fits real life
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
            Build a practical weight-loss plan with clinical guidance,
            lifestyle support, and follow-up care from Tinka Health Services in
            Maryland, Washington DC, and Virginia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingLink className="inline-flex items-center justify-center rounded-full bg-[#005ab0] px-7 py-4 text-base font-bold text-white shadow-[0_16px_35px_rgba(0,90,176,0.22)] hover:bg-[#00427f]">
              Book an Appointment
            </BookingLink>
            <Link
              to="/insurance-we-accept"
              className="inline-flex items-center justify-center rounded-full border border-[#9fc8ee] bg-white px-7 py-4 text-base font-bold text-[#005ab0] shadow-sm transition hover:border-[#005ab0] hover:bg-[#f4f9fd]"
            >
              Check Insurance
            </Link>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600">
            Care recommendations are based on a clinical review of your health and goals.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-[#cfe3f6] bg-white shadow-[0_28px_70px_-45px_rgba(0,90,176,0.45)]">
            <img
              src={HERO_IMAGE}
              alt="Telehealth weight loss management visit with clinician support"
              className="h-72 w-full object-cover md:h-[540px]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="mt-4 grid gap-3 rounded-lg border border-[#d8e9f8] bg-white p-5 shadow-lg md:absolute md:-bottom-8 md:left-8 md:right-8 md:mt-0 md:grid-cols-3">
            {[
              ["Clinical review", "Health history, goals, and safety"],
              ["Lifestyle plan", "Nutrition, movement, sleep, and habits"],
              ["Follow-up care", "Progress review and plan adjustments"],
            ].map(([title, text]) => (
              <div key={title}>
                <p className="font-bold text-[#005ab0]">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            Personalized support
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            A focused plan for weight, health, and daily consistency
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-700">
          <p>
            Weight loss is not only about willpower. Sleep, stress, mood,
            appetite, medical history, routines, and support all
            affect progress. Tinka Health Services helps you review those
            factors and create a plan you can keep using after the first week.
          </p>
          <p>
            Care may include nutrition goals, activity planning, behavior
            strategies, habit coaching, and structured
            follow-up. The goal is steady, safe progress with a provider who can
            adjust the plan as your needs change.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-[#f4f8fc] px-4 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            Weight management program
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Get started with support for the areas that matter most
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {supportItems.map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-lg border border-[#cfe3f6] bg-white p-5 shadow-sm"
            >
              <FiCheckCircle
                aria-hidden="true"
                className="mt-1 h-6 w-6 shrink-0 text-[#005ab0]"
              />
              <p className="text-base font-semibold leading-7 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Three clear steps from visit to follow-up
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Your plan starts with a real clinical visit, not only a form. From
            there, your provider helps you understand what is realistic, safe,
            and worth tracking.
          </p>
        </div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-[#cfe3f6] bg-[#f4f9fd] p-6"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#005ab0]">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[#06192f]">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-8 text-slate-700">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#f4f8fc] px-4 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article
                key={area.title}
                className="rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm"
              >
                <Icon aria-hidden="true" className="h-8 w-8 text-[#005ab0]" />
                <h2 className="mt-5 text-2xl font-bold">{area.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  {area.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            Safe, steady care
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Built for long-term weight management, not quick promises
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eef6ff] px-4 py-2 text-sm font-bold text-[#005ab0]">
              <FiHeart aria-hidden="true" /> Whole-person support
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eef6ff] px-4 py-2 text-sm font-bold text-[#005ab0]">
              <FiTrendingUp aria-hidden="true" /> Progress tracking
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eef6ff] px-4 py-2 text-sm font-bold text-[#005ab0]">
              <FiShield aria-hidden="true" /> Safety monitoring
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-[#cfe3f6] bg-[#f4f9fd] p-6 md:p-8">
          <h3 className="text-2xl font-bold text-[#06192f]">
            This service may help if you:
          </h3>
          <ul className="mt-6 grid gap-4 text-base leading-7 text-slate-700 md:grid-cols-2">
            {[
              "Need a structured plan after repeated diet attempts",
              "Want telehealth support with follow-up accountability",
              "Have stress, sleep, mood, or appetite patterns affecting weight",
              "Want practical answers about healthy weight goals",
              "Want ongoing support for sustainable habits",
              "Live in Maryland, Washington DC, or Virginia",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <FiCheckCircle
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-[#005ab0]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-[#f4f8fc] px-4 py-14 md:px-8 md:py-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#005ab0]">
            Common questions
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            Answers before you book
          </h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-[#cfe3f6] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#06192f]">
                {faq.question}
              </h3>
              <p className="mt-3 text-base leading-8 text-slate-700">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#005ab0] px-4 py-14 text-white md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
            Start weight management care
          </p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
            Book a visit and build a plan that can be followed.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookingLink className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-[#005ab0] hover:bg-blue-50">
            Book an Appointment
          </BookingLink>
          <Link
            to="/insurance-we-accept"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
          >
            Check Insurance
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default WeightLossManagement;
