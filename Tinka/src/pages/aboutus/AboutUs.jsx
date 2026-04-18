import { Suspense, lazy, memo, useState } from "react";
import {
  FaCheckCircle,
  FaHandsHelping,
  FaLaptopMedical,
  FaRegHeart,
  FaUserMd,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import aboutImage from "/images/img_mental_health/aboutUs/about.webp";
import { Helmet } from "react-helmet";
import BookingModal from "../../components/BookingModal"; // ✅ Import modal

const Testimonial = lazy(() => import("../home/Testimonial"));

const serviceHighlights = [
  "Psychiatric evaluations & medication management",
  "Individual, family, and group therapy",
  "Support for depression, anxiety, bipolar disorder, ADHD, trauma, and substance use",
  "Children, adolescent, and adult behavioral health services",
  "Telehealth and in-person appointments for flexibility and convenience",
];

const whyChooseUs = [
  "Client-centered care: We respect your voice and your goals.",
  "Holistic support: We consider your mental, emotional, and social needs.",
  "Flexible access: Offering both in-person visits and secure telehealth options.",
  "Experienced team: Led by board-certified psychiatric professionals and clinicians committed to excellence.",
];

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="mx-auto py-16 bg-white">
      <Helmet>
        <title>About Us - Tinka Health Services</title>
        <meta
          name="description"
          content="Learn more about Tinka Health Services, our mission, vision, and values. We are dedicated to providing quality mental health care."
        />
        <meta
          name="keywords"
          content="about us, Tinka Health Services, mental health, mission, vision, values"
        />
        <link rel="canonical" href="https://tinkahealthservices.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Us - Tinka Health Services",
              "description": "Learn more about Tinka Health Services, our mission, vision, and values. We are dedicated to providing quality mental health care.",
              "url": "https://tinkahealthservices.com/about",
              "mainEntity": {
                "@type": "MedicalOrganization",
                "name": "Tinka Health Services",
                "url": "https://tinkahealthservices.com",
                "logo": "https://tinkahealthservices.com/logo.png",
                "description": "Mental health care organization providing comprehensive therapy and psychiatric services in Virginia and Maryland.",
                "foundingDate": "2020",
                "areaServed": [
                  {
                    "@type": "State",
                    "name": "Virginia"
                  },
                  {
                    "@type": "State",
                    "name": "Maryland"
                  }
                ],
                "medicalSpecialty": [
                  "Psychiatry",
                  "Psychology",
                  "Mental Health Counseling"
                ],
                "sameAs": [
                  "https://www.facebook.com/tinkahealthservices",
                  "https://www.instagram.com/tinkahealthservices",
                  "https://x.com/Tinkahealthserv",
                  "https://www.youtube.com/@TinkaHealthServices"
                ]
              }
            }
          `}
        </script>
      </Helmet>
      <div>
        <ScrollAnimationWrapper>
          <div className="py-16 bg-gradient-to-b from-white to-blue-50">
            <h1 className="lg:text-5xl md:text-4xl text-3xl text-center font-bold md:py-12 py-8 text-[#005ab0]">
              We Help You to Reclaim Your Mental Health Stability
            </h1>
            <div>
              <img
                width={800}
                height={600}
                className="w-full rounded-xl"
                src={aboutImage}
                alt="about us image"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollAnimationWrapper>

        <section className="py-16 bg-gradient-to-b from-blue-50 via-blue-50 to-blue-100 px-4">
          <ScrollAnimationWrapper>
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
              <div className="overflow-hidden rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur">
                <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
                  <div className="md:w-1/4 lg:w-1/5">
                    <div className="inline-flex items-center gap-3 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#005ab0]">
                      <FaUserMd className="text-xl" />
                      Our Promise
                    </div>
                  </div>
                  <div className="md:w-3/4 lg:w-4/5">
                    <h2 className="mb-3 text-2xl font-semibold text-[#002f5c] md:text-3xl">
                      Dedicated to Your Mental Wellness
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                      At Tinka Health Services, we are dedicated to providing
                      compassionate, comprehensive, and evidence-based
                      behavioral health care to individuals and families across
                      our communities. Our mission is to break down barriers to
                      mental health treatment by offering accessible,
                      personalized, and culturally sensitive services that
                      empower clients to lead healthier and more fulfilling
                      lives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-8 shadow-xl">
                  <div className="mb-4 flex items-center gap-3 text-[#005ab0]">
                    <FaUserMd className="text-3xl" />
                    <h3 className="text-2xl font-semibold">Who We Are</h3>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Founded by experienced healthcare professionals with a
                    passion for mental wellness, Tinka Health Services brings
                    together a team of licensed clinicians, psychiatric
                    providers, and support staff who share one goal: to support
                    the whole person. We believe mental health care should be
                    collaborative, respectful, and tailored to each individual’s
                    unique journey.
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-xl">
                  <div className="mb-4 flex items-center gap-3 text-[#005ab0]">
                    <FaHandsHelping className="text-3xl" />
                    <h3 className="text-2xl font-semibold">Our Approach</h3>
                  </div>
                  <p className="text-gray-700 text-lg">
                    At Tinka Health Services, we understand that healing is not
                    one-size-fits-all. We combine medical expertise with a human
                    touch—listening first, guiding with empathy, and supporting
                    each step forward. Whether you are beginning your mental
                    health journey or continuing along the path of recovery, we
                    are here to walk alongside you.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xl">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-3 text-[#005ab0]">
                    <FaLaptopMedical className="text-3xl" />
                    <h3 className="text-2xl font-semibold">What We Do</h3>
                  </div>
                  <p className="text-gray-700 text-lg md:w-2/3">
                    We specialize in a wide range of mental health services,
                    including:
                  </p>
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {serviceHighlights.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-gray-700 text-lg"
                    >
                      <FaCheckCircle className="mt-1 text-xl text-[#005ab0]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-gray-700 text-lg">
                  Our providers work closely with clients to create personalized
                  treatment plans that focus on building coping skills,
                  restoring balance, and promoting long-term wellness.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-3 text-[#005ab0]">
                  <FaCheckCircle className="text-3xl" />
                  <h3 className="text-2xl font-semibold">Why Choose Us</h3>
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {whyChooseUs.map((reason) => (
                    <li
                      key={reason}
                      className="flex items-start gap-3 text-gray-700 text-lg"
                    >
                      <FaCheckCircle className="mt-1 text-xl text-[#005ab0]" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-[#005ab0] p-8 text-white shadow-xl">
                <div className="mb-4 flex items-center gap-3">
                  <FaRegHeart className="text-3xl" />
                  <h3 className="text-2xl font-semibold">Our Commitment</h3>
                </div>
                <p className="text-lg">
                  We are more than a clinic—we are a partner in your wellness.
                  At Tinka Health Services, we strive to reduce stigma, promote
                  understanding, and create a safe space where every individual
                  feels heard, valued, and supported.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button
                type="button"
                aria-controls="booking-modal"
                aria-expanded={showModal}
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center rounded-lg bg-[#005ab0] px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-600"
              >
                Book An Appointment
              </button>
            </div>
          </ScrollAnimationWrapper>
        </section>

        <Suspense fallback={<div>Loading...</div>}>
          <Testimonial />
        </Suspense>
        <div className="text-center">
          <button
            type="button"
            aria-controls="booking-modal"
            aria-expanded={showModal}
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Let's Do This
          </button>
        </div>
        {/* Single modal instance at root level for best practice */}
        <BookingModal
          show={showModal}
          onClose={() => setShowModal(false)}
          id="booking-modal"
        />
      </div>
    </main>
  );
};

export default memo(AboutUs);
