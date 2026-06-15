import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BookingLink from "../../components/BookingLink";
import { motion } from "framer-motion";
import Locations from "../home/Locations";
import {
  FaHospitalAlt,
  FaLaptopMedical,
  FaPlane,
  FaVials,
  FaHandsHelping,
  FaShieldAlt,
  FaProjectDiagram,
} from "react-icons/fa";

const FeatureCard = ({ icon: Icon, title, children, className = "" }) => (
  <div
    className={
      "bg-white rounded-lg shadow-sm p-6 border border-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg " +
      className
    }
  >
    <div className="flex items-start gap-4">
      <div>{Icon ? <Icon className="text-3xl text-green-600" /> : null}</div>
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
      <Helmet>
        <title>
          Primary and Preventive Care in MD, DC and VA | Tinka Health Services
        </title>
        <meta
          name="description"
          content="Primary and preventive care support with medication management, telehealth access, and insurance-friendly appointments in MD, DC, and VA."
        />
        <meta
          name="keywords"
          content="primary care maryland, preventive care dc, preventive care virginia, medication management services, telehealth psychiatry appointments, accepting new patients"
        />
        <link
          rel="canonical"
          href="https://tinkahealthservices.com/primary-preventive-care"
        />
        <meta
          property="og:title"
          content="Primary and Preventive Care in MD, DC and VA | Tinka Health"
        />
        <meta
          property="og:description"
          content="Compassionate primary and preventive care with telehealth and in-person options. Same week appointments available."
        />
        <meta
          property="og:url"
          content="https://tinkahealthservices.com/primary-preventive-care"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Primary and Preventive Care in MD, DC and VA | Tinka Health"
        />
        <meta
          name="twitter:description"
          content="Primary and preventive care with telehealth options, insurance-friendly access, and personalized treatment plans."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id":
              "https://tinkahealthservices.com/primary-preventive-care#clinic",
            name: "Tinka Health Services Primary and Preventive Care",
            url: "https://tinkahealthservices.com/primary-preventive-care",
            telephone: "+1 443-295-6600",
            areaServed: [
              { "@type": "AdministrativeArea", name: "Maryland" },
              { "@type": "AdministrativeArea", name: "Washington DC" },
              { "@type": "AdministrativeArea", name: "Virginia" },
            ],
            availableService: [
              { "@type": "MedicalService", name: "Primary Care" },
              {
                "@type": "MedicalService",
                name: "Preventive Care",
              },
              {
                "@type": "MedicalService",
                name: "Telehealth Visits",
              },
            ],
          })}
        </script>
      </Helmet>
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
            We offer in-person and telehealth visits across Maryland, Washington
            DC, and Virginia. Accepting new patients with same week appointments
            when available. Insurance and self-pay options available.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/insurance-we-accept"
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
            >
              Insurance We Accept
            </Link>
            <Link
              to="/telehealth-psychiatry-md-dc-va"
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
            >
              Telehealth Psychiatry
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          className="w-full rounded-lg overflow-hidden bg-gradient-to-tr from-green-50 to-white flex items-center justify-center h-64 md:h-80 border border-gray-100 animate-fade"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/images/img_mental_content/pry_health.png"
            alt="Primary & Preventive Care"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Our approach */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 ">Our approach</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            icon={FaHandsHelping}
            title="Patient-centered care"
            className="animate-delay-100"
          >
            We listen, collaborate, and tailor care to your values, culture, and
            life situation.
          </FeatureCard>
          <FeatureCard icon={FaShieldAlt} title="Prevention first">
            Focus on screenings, vaccines, and lifestyle counseling to keep you
            well and detect issues early.
          </FeatureCard>
          <FeatureCard icon={FaProjectDiagram} title="Coordinated care">
            We connect you to labs, imaging, and specialists with clear
            referrals and follow-up.
          </FeatureCard>
        </div>
      </section>

      {/* Services grid */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Comprehensive Primary Care Services
        </h3>
        <p className="text-gray-700 mb-6">
          Our clinicians provide preventive, diagnostic, and treatment services
          across a broad range of needs. Below are some highlights
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="animate-fade-up">
              <ServiceItem
                title="Routine Check-Ups"
                desc="Annual physicals and preventive planning to keep you ahead of health risks."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="animate-delay-100">
              <ServiceItem
                title="Chronic Disease Management"
                desc="Ongoing support for diabetes, hypertension, thyroid disorders, and more."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="animate-delay-200">
              <ServiceItem
                title="Vaccinations & Screenings"
                desc="Age-appropriate immunizations and labs for early detection."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="animate-fade-up">
              <ServiceItem
                title="Acute Care"
                desc="Treatment for colds, flu, infections, sinusitis, and more."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="animate-delay-100">
              <ServiceItem
                title="Digestive Health"
                desc="Evaluation and management for common GI concerns."
              />
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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
                Why Choose Tinka Health Services?
              </h3>
              <p className="text-gray-700 mt-2">
                Care that's personal, preventive, and empowering. We combine
                clinical excellence with cultural sensitivity and clear
                communication.
              </p>
            </div>

            <div className="mt-4 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded border border-gray-100 transform transition-transform duration-200 hover:scale-105 hover:shadow">
                <strong>Compassionate clinicians</strong>
                <div className="text-sm text-gray-600">We listen first.</div>
              </div>
              <div className="p-3 bg-white rounded border border-gray-100 transform transition-transform duration-200 hover:scale-105 hover:shadow">
                <strong>Accessible care</strong>
                <div className="text-sm text-gray-600">
                  Telehealth & in-person.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving options (full-width panel) */}
      <section className="mb-12">
        <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto">
            <h4 className="text-3xl font-bold text-gray-900">
              Serving You, Wherever You Are
            </h4>
            <p className="text-gray-700 mt-2">
              Flexible care that fits your life — in-person, virtual, and travel
              medicine.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <motion.div
                className="p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm flex flex-col gap-3 items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <FaHospitalAlt className="text-4xl text-green-600" />
                <h5 className="font-semibold text-gray-900">
                  In-person Clinic Visits
                </h5>
                <p className="text-sm text-gray-600">
                  Comprehensive exams, screening, and hands-on care at our
                  locations.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm flex flex-col gap-3 items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <FaLaptopMedical className="text-4xl text-green-600" />
                <h5 className="font-semibold text-gray-900">Telehealth</h5>
                <p className="text-sm text-gray-600">
                  Secure virtual visits for follow-ups, prescriptions, and
                  triage — from home or work.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm flex flex-col gap-3 items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <FaPlane className="text-4xl text-green-600" />
                <h5 className="font-semibold text-gray-900">
                  Travel & Preventive Medicine
                </h5>
                <p className="text-sm text-gray-600">
                  Travel consultations, vaccines, and advice to help you stay
                  healthy while abroad.
                </p>
              </motion.div>

              <motion.div
                className="p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm flex flex-col gap-3 items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <FaVials className="text-4xl text-green-600" />
                <h5 className="font-semibold text-gray-900">
                  Diagnostics & Referrals
                </h5>
                <p className="text-sm text-gray-600">
                  We coordinate lab work, imaging, and specialist referrals when
                  needed.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations (separate layout) */}
      <section className="mb-12">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            Our Locations
          </h4>
          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
            <Locations />
          </div>
        </motion.div>
      </section>

      {/* Partner & CTA */}
      <section className="mb-24">
        <div className="bg-blue-600 text-white p-8 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">
              Your Partner in Lifelong Health
            </h3>
            <p className="mt-2 text-blue-100">
              Whether it's a routine exam or long-term management, we're with
              you every step of the way.
            </p>
            <p className="mt-2 text-sm text-blue-100">
              Insurance accepted including Medicaid and Medicare, with
              telehealth and in-person options for MD, DC, and VA.
            </p>
          </div>

          <div className="flex gap-3">
            <BookingLink className="border border-white px-5 py-3 rounded-md text-white font-semibold">
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
