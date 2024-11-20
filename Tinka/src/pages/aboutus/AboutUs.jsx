import React, { Suspense, lazy, memo } from "react";
import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { Link } from "react-router-dom";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import aboutImage from "/images/img_mental_health/aboutUs/about.webp";
import { Helmet } from "react-helmet";

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
              <Link to="/contact">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  Book an Appointment now
                </button>
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Testimonial />
        </Suspense>
        <div className="text-center">
          <Link to="/contact">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 hover:scale-95 transition duration-300">
              Book an Appointment now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default memo(AboutUs);
