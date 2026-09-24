import { memo } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FaAward,
  FaBookReader,
  FaCheckCircle,
  FaHeartbeat,
  FaLightbulb,
  FaStethoscope,
} from "react-icons/fa";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import providerImage from "/images/img_mental_health/contact_us/Pro_Head_shot.jpg";

const expertiseList = [
  "Comprehensive psychiatric evaluations",
  "Individualized treatment planning and follow-up care",
  "Anxiety and depression",
  "ADHD and difficulty concentrating",
  "Bipolar and other mood disorders",
  "Trauma-related conditions and other psychiatric concerns",
  "Whole-person care that considers emotional and physical health",
];

const MeetOurProvider = () => {
  const providerProfileStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Meet the Provider - Dr. Seliat Dosunmu",
    description:
      "Profile of Dr. Seliat Dosunmu, founder and medical director of Tinka Health Services, serving Maryland, Washington DC, and Virginia.",
    url: "https://tinkahealthservices.com/meet-our-provider",
    about: {
      "@type": "Person",
      name: "Dr. Seliat Dosunmu",
      jobTitle: "Founder & Medical Director",
      affiliation: {
        "@type": "MedicalOrganization",
        name: "Tinka Health Services",
        url: "https://tinkahealthservices.com",
      },
      hasCredential: ["DNP", "FNP-C", "PMHNP-BC"],
      knowsAbout: expertiseList,
      worksFor: {
        "@type": "MedicalOrganization",
        name: "Tinka Health Services",
      },
    },
  };

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
        name: "Meet Our Provider",
        item: "https://tinkahealthservices.com/meet-our-provider",
      },
    ],
  };

  return (
    <main className="bg-white py-20 lg:py-24">
      <Helmet>
        <title>
          Meet Our Psychiatric Provider | Tinka Health Services
        </title>
        <meta
          name="description"
          content="Meet Dr. Seliat Dosunmu, dual board-certified psychiatric and family nurse practitioner providing compassionate evaluations and individualized mental health care."
        />
        <meta
          name="keywords"
          content="Seliat Dosunmu DNP, psychiatric evaluation, family nurse practitioner, PMHNP-BC, mental health care"
        />
        <link
          rel="canonical"
          href="https://tinkahealthservices.com/meet-our-provider"
        />
        <meta
          property="og:title"
          content="Meet Our Psychiatric Provider | Dr. Seliat Dosunmu"
        />
        <meta
          property="og:description"
          content="Learn about Dr. Dosunmu's expertise and care philosophy for mental health services in MD, DC, and VA."
        />
        <meta
          property="og:url"
          content="https://tinkahealthservices.com/meet-our-provider"
        />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(providerProfileStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>

      <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100/60">
        <ScrollAnimationWrapper>
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex w-full flex-col gap-6 lg:w-1/2">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#005ab0]">
                <FaStethoscope className="text-lg" />
                Meet the Provider
              </div>
              <h1 className="text-2xl font-bold leading-tight text-[#0b3065] md:text-3xl lg:text-3xl">
                Dr. Seliat Dosunmu, DNP, FNP-C, PMHNP-BC
              </h1>
              <p className="text-lg font-semibold text-[#005ab0]">
                Founder &amp; Medical Director, Tinka Health Services
              </p>
              <p className="text-lg font-medium text-[#0b3065]">
                Compassionate Care. Meaningful Connections. A Healthier You.
              </p>
              <p className="text-base leading-7 text-gray-700 md:text-lg">
                Dr. Seliat Dosunmu is a dual board-certified Psychiatric Mental
                Health Nurse Practitioner (PMHNP-BC) and Family Nurse
                Practitioner (FNP-C) who is passionate about helping people
                feel heard, understood, and empowered throughout their care.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#005ab0] shadow">
                  <FaAward className="text-base" />
                  Doctor of Nursing Practice
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#005ab0] shadow">
                  <FaLightbulb className="text-base" />
                  Board-Certified Family Nurse Practitioner
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#005ab0] shadow">
                  <FaHeartbeat className="text-base" />
                  Board-Certified Psychiatric Mental Health Nurse Practitioner
                </span>
              </div>
              <div className="pt-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center rounded-lg bg-[#005ab0] px-6 py-3 text-base font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-600"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-xl lg:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-transparent to-blue-200" />
              <img
                src={providerImage}
                alt="Dr. Seliat Dosunmu"
                className="relative z-10 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimationWrapper>
      </section>

      <section className="bg-white py-16">
        <ScrollAnimationWrapper>
          <div className="mx-auto flex max-w-5xl flex-col gap-12 px-5">
            <article className="rounded-3xl bg-blue-50/60 p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[#0b3065] md:text-3xl">
                A Whole-Person Approach
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                With advanced training in both mental and physical health, Dr.
                Dosunmu believes effective care begins by treating the whole
                person, not simply a diagnosis or a list of symptoms. Mental
                health can affect relationships, work, physical health,
                confidence, and overall quality of life.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                She creates a welcoming, supportive environment where patients
                can discuss their concerns without fear of judgment. Her
                perspective as both a psychiatric and family nurse practitioner
                helps her consider the broader factors that influence wellness.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                Dr. Dosunmu provides psychiatric evaluations and individualized
                treatment planning for adolescents and adults experiencing
                anxiety, depression, ADHD, bipolar disorder, mood changes,
                trauma-related conditions, and other psychiatric concerns.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h2 className="text-2xl font-semibold text-[#0b3065] md:text-3xl">
                  Clinical Expertise
                </h2>
                <p className="text-base text-gray-600 font-semibold md:max-w-sm">
                  Evaluations and care plans tailored to each person’s symptoms,
                  goals, and circumstances.
                </p>
              </div>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {expertiseList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-blue-50/60 px-4 py-3 text-base text-gray-700"
                  >
                    <FaCheckCircle className="mt-1 text-lg text-[#005ab0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#0b3065] md:text-3xl">
                  Care Philosophy
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  Dr. Dosunmu takes time to listen to each patient’s story,
                  understand their symptoms and goals, discuss care options,
                  and develop a plan that fits their needs and circumstances.
                </p>
                <p className="mt-4 text-lg leading-8 text-gray-700">
                  Her approach is collaborative and personal. She considers the
                  connection between emotional well-being and physical health
                  while building a genuine partnership with each person she
                  serves.
                </p>
              </div>
              <div className="rounded-3xl bg-blue-50/80 p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#0b3065] md:text-3xl">
                  Supporting Every Step
                </h2>
                <ul className="mt-4 space-y-4 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <FaHeartbeat className="mt-1 text-xl text-[#005ab0]" />
                    <span>
                      A welcoming space to discuss concerns without judgment.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaBookReader className="mt-1 text-xl text-[#005ab0]" />
                    <span>
                      Time to explore symptoms, goals, and care options together.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaLightbulb className="mt-1 text-xl text-[#005ab0]" />
                    <span>
                      Individualized plans informed by both mental and physical
                      health.
                    </span>
                  </li>
                </ul>
              </div>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[#0b3065] md:text-3xl">
                Every Patient Deserves to Be Heard
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                Seeking help is a meaningful step toward feeling better.
                Whether you are facing persistent anxiety, depression,
                difficulty concentrating, mood changes, or a sense that
                something is not right, you deserve a healthcare provider who
                will listen. At Tinka Health Services, Dr. Dosunmu is committed
                to compassionate, respectful, evidence-informed mental health
                care. Every patient deserves to be heard, respected, and
                treated as a whole person.
              </p>
            </article>

            <div className="rounded-3xl bg-[#005ab0] px-8 py-10 text-center text-white shadow-xl">
              <h2 className="text-3xl font-semibold">
                Ready to start your journey?
              </h2>
              <p className="mt-3 text-lg text-blue-100">
                Connect with Dr. Dosunmu and the Tinka Health Services team to
                design a care plan that supports your whole self.
              </p>
              <Link
                to="/booking"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#005ab0] shadow-lg transition duration-300 hover:bg-blue-100"
              >
                Book an Appointment
              </Link>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link
                  to="/insurance-we-accept"
                  className="inline-flex items-center justify-center rounded-lg border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Insurance We Accept
                </Link>
                <Link
                  to="/telehealth-psychiatry-md-dc-va"
                  className="inline-flex items-center justify-center rounded-lg border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Telehealth Psychiatry
                </Link>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </section>
    </main>
  );
};

export default memo(MeetOurProvider);
