import { useState, useEffect, lazy, Suspense, memo } from "react";
import { Link } from "react-router-dom";
import TeletherapyImg from "/images/img_mental_health/hero/teletherapyimg.webp";

// Lazy load the CallVideoAction component
const CallVideoAction = lazy(() => import("../../components/CallVideoAction"));

const Hero = () => {
  // State to hold the index of the current word
  const [wordIndex, setWordIndex] = useState(0);

  // Array of words to cycle through
  const words = ["RECLAIM YOUR HOPE", "REVIVE YOUR STABILITY"];

  useEffect(() => {
    // Set up an interval to change the word every 2 seconds
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change every 2000 milliseconds (2 seconds)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="mb-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:text-start text-center items-center justify-between px-4 md:px-12 lg:px-24 py-8 pt-12">
        {/* Left Side */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:mb-0 mb-12">
          <h1 className="text-2xl md:text-4xl md:max-w-lg font-bold text-gray-800 mb-4">
            <span className="text-[#005ab0]">{words[wordIndex]}</span> <br />
            Tinka Health Services will Help You to Your Desire Joy.
          </h1>
          <p className="text-gray-700 md:mb-12 mb-8 text-lg md:max-w-lg">
            Whatever your journey looks like, we are here to support you with
            understanding and empathy.
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 text-white text-lg px-6 py-3 rounded-md hover:bg-blue-700">
              Let's Do It
            </button>
          </Link>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={TeletherapyImg}
            alt="A person listening to counselling"
            width={400} // Set explicit width
            height={300} // Set explicit height
            loading="lazy" // Lazy load the image
          />
        </div>
      </div>
      {/* Call to Action Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <CallVideoAction />
      </Suspense>
    </div>
  );
};

export default memo(Hero);
