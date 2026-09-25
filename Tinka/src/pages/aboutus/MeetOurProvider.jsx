import { memo } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FaStethoscope,
} from "react-icons/fa";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import providerImage from "/images/img_mental_health/contact_us/Pro_Head_shot.jpg";

const expertiseList = [
  "Psychiatric evaluations",
  "Individualized treatment planning",
  "Anxiety, depression, ADHD, bipolar disorder, mood disorders, and trauma-related conditions",
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
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#005ab0]">
                <FaStethoscope className="text-lg" />
                Meet the Doctor
              </div>
              <h1 className="text-2xl font-bold leading-tight text-[#0b3065] md:text-3xl">Meet Dr. Seliat Dosunmu, DNP, FNP-C, PMHNP-BC</h1>
              <p className="mt-5 text-lg font-semibold text-[#005ab0]">Compassionate Care. Meaningful Connections. A Healthier You.</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
              <img src={providerImage} alt="Dr. Seliat Dosunmu" className="w-full object-cover" loading="lazy" />
            </div>
          </div>
        </ScrollAnimationWrapper>
      </section>

      <section className="bg-white py-16">
        <ScrollAnimationWrapper>
          <div className="mx-auto max-w-4xl space-y-6 px-5">
              <p className="text-lg leading-8 text-gray-700">Dr. Seliat Dosunmu is a dual board-certified Psychiatric Mental Health Nurse Practitioner (PMHNP-BC) and Family Nurse Practitioner (FNP-C) who is passionate about helping individuals feel heard, understood, and empowered throughout their healthcare journey.</p>
              <p className="text-lg leading-8 text-gray-700">With advanced training in both mental and physical health, Dr. Dosunmu believes that truly effective care begins by treating the whole person—not simply a diagnosis or a list of symptoms. She understands that mental health can affect every part of a person’s life, including relationships, work, physical health, confidence, and overall quality of life. Her goal is to create a welcoming and supportive environment where patients feel comfortable discussing their concerns without fear of judgment.</p>
              <p className="text-lg leading-8 text-gray-700">Dr. Dosunmu provides comprehensive psychiatric evaluations and individualized treatment planning for adolescents and adults experiencing a wide range of mental health concerns, including anxiety, depression, ADHD, bipolar disorder, mood disorders, trauma-related conditions, and other psychiatric concerns.</p>
              <p className="text-lg leading-8 text-gray-700">Her approach to care is collaborative and personalized. Rather than taking a one-size-fits-all approach, Dr. Dosunmu takes time to listen to each patient’s story, understand their symptoms and goals, discuss treatment options, and develop a plan that reflects their individual needs and circumstances.</p>
              <p className="text-lg leading-8 text-gray-700">As both a Psychiatric Mental Health Nurse Practitioner and Family Nurse Practitioner, Dr. Dosunmu brings a whole-person perspective to patient care. She recognizes the important connection between emotional well-being and physical health and considers the broader factors that may influence a patient’s overall wellness.</p>
              <p className="text-lg leading-8 text-gray-700">Above all, Dr. Dosunmu wants every patient to know that seeking help is a meaningful step toward feeling better. Whether someone is struggling with persistent anxiety, depression, difficulty concentrating, mood changes, or simply feels that something is not right, they deserve a healthcare provider who will listen.</p>
              <p className="text-lg leading-8 text-gray-700">At Tinka Health Services, Dr. Dosunmu is committed to providing compassionate, respectful, evidence-informed mental health care while building genuine partnerships with the individuals she serves.</p>
              <p className="text-lg leading-8 text-gray-700">Her philosophy is simple: every patient deserves to be heard, respected, and treated as a whole person.</p>
            <div className="rounded-3xl bg-blue-50/60 p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[#0b3065]">Credentials</h2>
              <ul className="mt-4 space-y-2 text-lg leading-8 text-gray-700">
                <li>Seliat Dosunmu, DNP, FNP-C, PMHNP-BC</li>
                <li>Doctor of Nursing Practice</li>
                <li>Board-Certified Family Nurse Practitioner</li>
                <li>Board-Certified Psychiatric Mental Health Nurse Practitioner</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-[#005ab0] px-8 py-10 text-center text-white shadow-xl">
              <h2 className="text-2xl font-semibold">Ready to start your journey?</h2>
              <Link to="/booking" className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#005ab0] hover:bg-blue-100">Book an Appointment</Link>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </section>
    </main>
  );
};

export default memo(MeetOurProvider);
