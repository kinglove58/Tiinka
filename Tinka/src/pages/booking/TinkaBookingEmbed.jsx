import React, { useState } from "react";
import { Helmet } from "react-helmet";

const TinkaBookingEmbed = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Book an Appointment - Tinka Health Services</title>
        <meta
          name="description"
          content="Book your appointment with Tinka Health Services. Quick and easy online booking for mental health services."
        />
        <meta
          name="keywords"
          content="book appointment, Tinka Health Services, mental health booking, therapy appointment"
        />
        <link
          rel="canonical"
          href="https://tinkahealthservices.com/tinkahealthservicesbooking"
        />
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
          <p className="text-gray-600">
            Schedule your appointment with our mental health professionals
          </p>
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
    </div>
  );
};

export default TinkaBookingEmbed;
