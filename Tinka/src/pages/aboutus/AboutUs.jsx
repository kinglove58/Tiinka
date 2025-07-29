import { Suspense, lazy, memo, useState } from "react";
import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { Link } from "react-router-dom";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import aboutImage from "/images/img_mental_health/aboutUs/about.webp";
import { Helmet } from "react-helmet";
import BookingModal from "../../components/BookingModal"; // ✅ Import modal

const Testimonial = lazy(() => import("../home/Testimonial"));

const supportData = [
  "Overcoming depression",
  "Handling grief and loss",
  "Building self-esteem",
  "Managing anger",
  "Recovering from emotional abuse",
  "Facing relationship challenges",
  "Improving Sleep Health",
  "Improving Focus and Productivity",
  "and much more...",
];

const aboutUsData = [
  {
    icon: GoGoal,
    title: "Our mission",
    description:
      "We make quality mental health care an integral part of people’s lives. We believe it has to be easily accessible and cost-efficient.",
  },
  {
    icon: FaEye,
    title: "Our vision",
    description:
      "We envision a world where everyone, everywhere, can get the unique support to live a better life.",
  },
  {
    icon: GiLovers,
    title: "Our values",
    description:
      "Empathy at every step. Uncompromised quality. Personalized, individual care. Embracing inclusivity and diversity. Innovation that elevates the therapeutic experience.",
  },
];

const SupportItem = memo(({ support }) => (
  <div className="text-lg">{support}</div>
));

const AboutUsItem = memo(({ icon: Icon, title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">
      <Icon className="text-4xl text-blue-500" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-lg">{description}</p>
  </div>
));

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
              "@type": "Organization",
              "name": "Tinka Health Services",
              "url": "https://tinkahealthservices.com",
              "logo": "https://tinkahealthservices.com/logo.png",
              "description": "Learn more about Tinka Health Services, our mission, vision, and values. We are dedicated to providing quality mental health care.",
              "sameAs": [
                "https://www.facebook.com/tinkahealthservices",
                "https://www.twitter.com/tinkahealthservices",
                "https://www.instagram.com/tinkahealthservices"
              ]
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

        <div className="py-10 flex flex-col items-center bg-gradient-to-b from-blue-50 via-blue-50 to-blue-100 px-4 lg:px-0">
          <ScrollAnimationWrapper>
            <article className="w-full max-w-4xl">
              <h2 className="text-3xl font-semibold text-[#005ab0] text-center mb-4">
                Empowering Mental Wellness. Restoring Hope.
              </h2>
              <p className="text-gray-700 text-lg mb-6 text-center">
                At Tinka Health Services, we believe that healing begins with
                compassion, connection, and culturally sensitive care. We are a
                comprehensive mental health practice committed to providing
                accessible, high-quality psychiatric and therapeutic services to
                individuals and families across all stages of life.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Founded on the principles of integrity, empathy, and excellence,
                our mission is to break the stigma surrounding mental health by
                delivering evidence-based, personalized treatment in a
                supportive and respectful environment. Our multidisciplinary
                team includes psychiatric nurse practitioners, licensed
                therapists, and support staff who work collaboratively to meet
                the unique needs of every client we serve.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                We specialize in treating a broad spectrum of mental health
                concerns including depression, anxiety, bipolar disorder, ADHD,
                PTSD, and substance use disorders. At Tinka, we understand that
                mental health care is not one-size-fits-all—our approach is
                holistic, client-centered, and trauma-informed.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Whether you are seeking therapy, medication management, or
                support through life's transitions, Tinka Health Services is
                here to walk alongside you. Our commitment extends beyond the
                clinical setting—we strive to create a safe space where clients
                feel seen, heard, and empowered.
              </p>
              <p className="text-blue-900 font-semibold text-center text-lg">
                Welcome to Tinka Health Services. Together, let’s take the next
                step toward healing and growth.
              </p>
            </article>
          </ScrollAnimationWrapper>
        </div>
        <div className="py-10 flex flex-col items-center bg-gradient-to-b from-blue-50 via-blue-50 to-blue-100 px-4 lg:px-0">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-semibold text-[#005ab0] mb-8 text-center">
              What we support people with:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 w-full max-w-4xl">
              {supportData.map((support, index) => (
                <SupportItem key={index} support={support} />
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-b from-blue-100 via-blue-200 to-blue-50 py-10 px-4 lg:px-0">
          <ScrollAnimationWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              {aboutUsData.map((about, index) => (
                <AboutUsItem
                  key={index}
                  icon={about.icon}
                  title={about.title}
                  description={about.description}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                type="button"
                aria-controls="booking-modal"
                aria-expanded={showModal}
                onClick={() => setShowModal(true)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Book An Appointment
              </button>
            </div>
          </ScrollAnimationWrapper>
        </div>

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
