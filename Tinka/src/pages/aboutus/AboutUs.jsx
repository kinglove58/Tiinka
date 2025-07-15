import React, { Suspense, lazy, memo, useState } from "react";
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
                Mental Health & Wellness at Tinka Health Services
              </h2>
              <h3 className="text-xl font-semibold text-[#152739] mb-6 text-center">
                Understanding Mental Health
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                At Tinka Health Services, we believe mental health is the
                foundation of overall well-being. It encompasses your emotional,
                psychological, and social functioning, affecting how you think,
                feel, and act. Mental health plays a vital role in how we handle
                stress, build relationships, make choices, and navigate life’s
                many challenges. Supporting mental health is essential at every
                stage of life—from childhood to adulthood and beyond.
              </p>
              <h3 className="font-semibold text-xl mb-2">
                What Are Mental Health Disorders?
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Mental health disorders are medical conditions that impact a
                person’s mood, thoughts, and behaviors. They can be episodic or
                ongoing and may interfere with daily functioning, relationships,
                and quality of life. These conditions are more common than many
                realize—but with proper support and evidence-based treatment,
                many individuals manage symptoms effectively and live full,
                meaningful lives. At Tinka Health Services, we offer tailored
                therapeutic and psychiatric care to support your journey toward
                recovery.
              </p>
              <h3 className="font-semibold text-xl mb-2">
                Why Mental Health Matters
              </h3>
              <p className="text-gray-700 text-xl mb-4">
                Taking care of your mental health can help you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Manage life’s stressors more effectively</li>
                <li>Build and sustain healthy relationships</li>
                <li>Function productively at work or school</li>
                <li>Contribute positively to your community</li>
                <li>Maintain better physical health</li>
                <li>Reach your full potential</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Unaddressed mental health issues can increase your risk for
                physical health problems, such as cardiovascular disease,
                diabetes, or chronic pain. That’s why integrated care is at the
                core of what we do.
              </p>
              <h3 className="font-semibold text-lg mb-2">
                Factors That Influence Mental Health
              </h3>
              <p className="text-gray-700 mb-4">
                Your mental health can be shaped by a variety of influences,
                including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Genetics or brain chemistry</li>
                <li>History of trauma, abuse, or adverse life events</li>
                <li>Family history of mental illness</li>
                <li>Substance use, diet, and lifestyle habits</li>
                <li>Social and environmental stressors</li>
              </ul>
              <p className="text-gray-700 mb-6 text-lg">
                At Tinka Health Services, we take a holistic approach—supporting
                not just symptom management but also lifestyle changes, wellness
                strategies, and coping tools like mindfulness and gratitude
                practices.
              </p>
              <h3 className="font-semibold text-xl mb-2">
                Can Mental Health Change Over Time?
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                Yes. Mental health is dynamic and can fluctuate with life
                circumstances. You may face challenges such as caregiving
                responsibilities, financial stress, or chronic illness that
                affect your emotional resilience. On the other hand,
                professional treatment, a support system, and personal wellness
                strategies can significantly improve mental health over time.
              </p>
              <h3 className="font-semibold text-xl mb-2">
                Recognizing the Signs
              </h3>
              <p className="text-gray-700 mb-4 text-lg">
                It’s not always easy to tell the difference between normal
                emotional responses and signs of a mental health concern. If you
                or a loved one are experiencing any of the following, it may be
                time to seek professional help:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 text-lg">
                <li>Changes in sleep or appetite</li>
                <li>Withdrawal from loved ones or activities</li>
                <li>Persistent sadness, irritability, or low energy</li>
                <li>Feelings of hopelessness or worthlessness</li>
                <li>Increased substance use</li>
                <li>Trouble focusing or making decisions</li>
                <li>Unexplained physical pain</li>
                <li>Intense mood swings or emotional outbursts</li>
                <li>Intrusive thoughts, paranoia, or hallucinations</li>
                <li>Thoughts of self-harm or harming others</li>
                <li>Difficulty functioning at home, school, or work</li>
              </ul>
              <h3 className="font-semibold text-xl mb-2">Getting Help</h3>
              <p className="text-gray-700 mb-6 text-lg">
                If you’re concerned about your mental health, know that you’re
                not alone—and help is available. At Tinka Health Services, we
                offer comprehensive evaluations, talk therapy, psychiatric care,
                and medication management. If you're not sure where to start,
                reach out to us directly or speak with your primary care
                provider.
              </p>
              <p className="text-blue-900 font-semibold text-center text-lg">
                Your well-being matters. Let us walk alongside you as you take
                the next step toward healing and wholeness.
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
