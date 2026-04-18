import React, { Suspense, lazy, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BookingStructuredData from "../../components/BookingStructuredData";

const Testimonial = lazy(() => import("../home/Testimonial"));

const TinkaBookingEmbed = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <BookingStructuredData />
      <Helmet>
        <title>
          Book Psychiatric Appointment in MD, DC and VA | Tinka Health
        </title>
        <meta
          name="description"
          content="Book psychiatric appointments and medication management services with Tinka Health Services in Maryland, Washington DC, and Virginia. Telehealth available. Accepting Medicaid, Medicare, and major insurance plans."
        />
        <meta
          name="keywords"
          content="book psychiatric appointment, medication management appointment, telehealth psychiatry appointment, psychiatric provider maryland, psychiatric provider washington dc, psychiatric provider virginia, medicaid mental health appointment"
        />
        <link rel="canonical" href="https://tinkahealthservices.com/booking" />
        <meta
          property="og:title"
          content="Book Psychiatric Appointment in MD, DC and VA | Tinka Health"
        />
        <meta
          property="og:description"
          content="Schedule online for telehealth and in-person psychiatric care. Accepting new patients with insurance options including Medicaid and Medicare."
        />
        <meta
          property="og:url"
          content="https://tinkahealthservices.com/booking"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* ⚡ Speed optimizations */}
        <link rel="preconnect" href="https://d2oe0ra32qx05a.cloudfront.net" />
        <link rel="dns-prefetch" href="https://d2oe0ra32qx05a.cloudfront.net" />
      </Helmet>

      <div className="p-4">
        <div className="text-center mb-6">
          <img
            src="/images/logo/Tinka_health_logo.png"
            alt="Tinka Health Services Logo"
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-[#005ab0] mb-2">
            Book Your Appointment
          </h1>
          <p className="text-gray-600 mb-2">
            Schedule your appointment with our psychiatric and mental health
            professionals
          </p>
          <p className="text-gray-800 text-md">
            We serve patients in Maryland, Washington DC, and Virginia with
            telehealth and in-person options
          </p>
          <p className="text-gray-700 text-sm mt-2">
            Accepting Medicaid, Medicare, and major insurance plans. Accepting
            new patients with same week appointments available when possible.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Link
              to="/insurance-we-accept"
              className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              Insurance We Accept
            </Link>
            <Link
              to="/telehealth-psychiatry-md-dc-va"
              className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              Telehealth Psychiatry
            </Link>
            <Link
              to="/services"
              className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              Explore Services
            </Link>
            <Link
              to="/maryland-psychiatrist"
              className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              Maryland Psychiatry
            </Link>
            <Link
              to="/dc-psychiatrist"
              className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              DC Psychiatry
            </Link>
            <Link
              to="/virginia-psychiatrist"
              className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              Virginia Psychiatry
            </Link>
          </div>
        </div>

        <div className="w-full h-screen relative">
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#005ab0] mx-auto mb-4"></div>
                <p className="text-[#005ab0] font-semibold text-lg">
                  Loading calendar...
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  This may take a few moments
                </p>
              </div>
            </div>
          )}

          <iframe
            title="Book Appointment - Tinka Health Services"
            src="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_108462"
            className="w-full h-full border-none rounded-lg shadow-lg"
            onLoad={handleIframeLoad}
            allow="fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            importance="high"
          />
        </div>
      </div>

      {/* Testimonial section to encourage bookings */}
      <div className="bg-gray-50 py-12">
        <Suspense
          fallback={<div className="text-center text-gray-500">Loading...</div>}
        >
          <Testimonial />
        </Suspense>
      </div>
    </div>
  );
};

export default TinkaBookingEmbed;
