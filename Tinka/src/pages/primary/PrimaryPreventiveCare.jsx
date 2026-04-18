import React from "react";
import { Link } from "react-router-dom";
import BookingLink from "../../components/BookingLink";

const FeatureCard = ({ emoji, title, children }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
    <div className="flex items-start gap-4">
      <div className="text-3xl">{emoji}</div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-2">{children}</p>
      </div>
    </div>
  </div>
);

const ServiceItem = ({ title, desc }) => (
  <div className="flex gap-4 items-start animate-fade-up">
    <div className="flex-none w-3 h-3 rounded-full bg-green-400 mt-3" />
    <div>
      <h5 className="font-semibold text-gray-900">{title}</h5>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

const PrimaryPreventiveCare = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 animate-fade-up">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Primary & Preventive Care
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Compassionate, whole-body wellness for you and your family. Our
            Primary Care team focuses on prevention, early diagnosis, and
            treatment—so you can thrive today and stay well tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <BookingLink className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold shadow">
              Book Appointment
            </BookingLink>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 px-5 py-3 rounded-md font-semibold text-center"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            We offer in-person and telehealth visits. Insurance and self-pay
            options available.
          </p>
        </div>

        {/* Image placeholder */}
        <div className="w-full rounded-lg overflow-hidden bg-gradient-to-tr from-green-50 to-white flex items-center justify-center h-64 md:h-80 border border-gray-100 animate-fade">
          <span className="text-gray-400">Hero image placeholder</span>
        </div>
      </section>

      {/* Our approach */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our approach</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            emoji="🤝"
            title="Patient-centered care"
            className="animate-delay-100"
          >
            We listen, collaborate, and tailor care to your values, culture, and
            life situation.
          </FeatureCard>
          <FeatureCard emoji="🩺" title="Prevention first">
            Focus on screenings, vaccines, and lifestyle counseling to keep you
            well and detect issues early.
          </FeatureCard>
          <FeatureCard emoji="🔗" title="Coordinated care">
            We connect you to labs, imaging, and specialists with clear
            referrals and follow-up.
          </FeatureCard>
        </div>
      </section>

      {/* Services grid */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          🌿 Comprehensive Primary Care Services
        </h3>
        <p className="text-gray-700 mb-6">
          Our clinicians provide preventive, diagnostic, and treatment services
          across a broad range of needs. Below are some highlights — tap or
          scroll to learn more.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="animate-fade-up">
              <ServiceItem
                title="Routine Check-Ups"
                desc="Annual physicals and preventive planning to keep you ahead of health risks."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="animate-delay-100">
              <ServiceItem
                title="Chronic Disease Management"
                desc="Ongoing support for diabetes, hypertension, thyroid disorders, and more."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="animate-delay-200">
              <ServiceItem
                title="Vaccinations & Screenings"
                desc="Age-appropriate immunizations and labs for early detection."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="animate-fade-up">
              <ServiceItem
                title="Acute Care"
                desc="Treatment for colds, flu, infections, sinusitis, and more."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="animate-delay-100">
              <ServiceItem
                title="Digestive Health"
                desc="Evaluation and management for common GI concerns."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="animate-delay-200">
              <ServiceItem
                title="Telehealth & Online Rx"
                desc="Convenient virtual visits and e-prescriptions when appropriate."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border border-blue-100 shadow-sm">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                💙 Why Choose Tinka Health Services?
              </h3>
              <p className="text-gray-700 mt-2">
                Care that's personal, preventive, and empowering. We combine
                clinical excellence with cultural sensitivity and clear
                communication.
              </p>
            </div>

            <div className="mt-4 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded border border-gray-100">
                <strong>Compassionate clinicians</strong>
                <div className="text-sm text-gray-600">We listen first.</div>
              </div>
              <div className="p-3 bg-white rounded border border-gray-100">
                <strong>Accessible care</strong>
                <div className="text-sm text-gray-600">
                  Telehealth & in-person.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving options */}
      <section className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">
            🌍 Serving You, Wherever You Are
          </h4>
          <p className="text-gray-700 mb-4">
            We offer flexible care options to fit your life.
          </p>
          <ul className="list-inside list-disc text-gray-600 space-y-2">
            <li>In-person clinic visits with comprehensive exams.</li>
            <li>Secure telehealth visits for follow-ups or minor concerns.</li>
            <li>Travel consultations and preventive medicine.</li>
          </ul>
        </div>

        <div className="bg-gradient-to-tr from-green-50 to-white p-6 rounded-lg border border-gray-100 flex flex-col items-center justify-center animate-fade-up">
          <div className="w-full h-44 rounded-md bg-gray-100 flex items-center justify-center mb-4">
            <span className="text-gray-400">
              Map / clinic image placeholder
            </span>
          </div>
          <Link to="/contact" className="text-blue-600 font-semibold">
            Find clinic & hours
          </Link>
        </div>
      </section>

      {/* Partner & CTA */}
      <section className="mb-24">
        <div className="bg-blue-600 text-white p-8 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              ✨ Your Partner in Lifelong Health
            </h3>
            <p className="mt-2 text-blue-100">
              Whether it's a routine exam or long-term management, we're with
              you every step of the way.
            </p>
          </div>

          <div className="flex gap-3">
            <BookingLink className="bg-white text-blue-600 px-5 py-3 rounded-md font-semibold">
              Book Appointment
            </BookingLink>
            <Link
              to="/contact"
              className="border border-white px-5 py-3 rounded-md text-white font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimaryPreventiveCare;
