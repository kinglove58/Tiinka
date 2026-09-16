import { useEffect } from "react";
import { Helmet } from "react-helmet";

const TinkaBooking = () => {
  useEffect(() => {
    window.location.replace("/booking");
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
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
          href="https://tinkahealthservices.com/booking"
        />
      </Helmet>

      <div className="text-center p-8">
        <div className="mb-8">
          <img
            src="/images/logo/Tinka_health_logo.png"
            alt="Tinka Health Services Logo"
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-[#005ab0] mb-4">
            Book Your Appointment
          </h1>
          <p className="text-gray-600 mb-6">
            You&apos;re being redirected to our secure booking platform...
          </p>
        </div>

        <div className="space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#005ab0] mx-auto"></div>
          <p className="text-sm text-gray-500">
            If you&apos;re not redirected automatically,
            <a
              href="/booking"
              className="text-[#005ab0] hover:underline ml-1"
            >
              click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TinkaBooking;
