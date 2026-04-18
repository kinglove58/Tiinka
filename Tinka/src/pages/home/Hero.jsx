import { useState, useEffect, lazy, Suspense, memo } from "react";
import TeletherapyImg from "/images/img_mental_health/hero/teletherapyimg.webp";
import { PuffLoader } from "react-spinners";
import BookingLink from "../../components/BookingLink";

const CallVideoAction = lazy(() => import("../../components/CallVideoAction"));

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [showIframe, setShowIframe] = useState(false); // Controls modal

  const words = ["RECLAIM YOUR HOPE", "REVIVE YOUR STABILITY"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const LoadingFallback = () => (
    <div className="flex justify-center items-center">
      <PuffLoader color="#FF4500" size={80} />
    </div>
  );

  return (
    <div className="mb-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:text-start text-center items-center justify-between px-4 md:px-12 lg:px-24 py-8 pt-12">
        {/* Left Side */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:mb-0 mb-12">
          <h1 className="text-2xl md:text-4xl md:max-w-lg font-semibold text-gray-700 mb-4">
            <span className="text-[#005ab0]">{words[wordIndex]}</span> <br />
            At Tinka Health Services, we’re here to help you rediscover your
            joy.
          </h1>
          <p className="text-gray-700 md:mb-2 mb-1 text-lg md:max-w-lg">
            No matter what your journey looks like, we provide compassionate,
            understanding support every step of the way.
          </p>
          <p className="text-blue-500 md:mb-5 mb-2 text-lg md:max-w-lg">
            Virtual care in Maryland, Virginia, and Washington, DC — healing starts right where you are.
          </p>

          {/* Book Button */}
          <BookingLink> Book an Appointment</BookingLink>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={TeletherapyImg}
            alt="A person listening to counselling"
            sizes="(max-width: 600px) 400px, 800px"
            width={400}
            height={300}
          />
        </div>
      </div>

      {/* Use the extracted component */}

      {/* <BookingModal show={showIframe} onClose={() => setShowIframe(false)} /> */}

      {/* Call to Action */}
      <Suspense fallback={<LoadingFallback />}>
        <CallVideoAction />
      </Suspense>
    </div>
  );
};

export default memo(Hero);
