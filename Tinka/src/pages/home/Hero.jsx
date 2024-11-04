import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeletherapyImg from "../../assets/images/img mental health/hero/teletherapyimg.png";

function Hero() {
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
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:text-start text-center items-center justify-between px-4 md:px-16 py-8">
        {/* Left Side */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:mb-0 mb-12">
          <h1 className="text-2xl md:text-4xl md:max-w-lg  font-bold text-gray-800 mb-8">
            {" "}
            <span className="text-blue-600">{words[wordIndex]}</span> <br />
            Tinka Health Services Guides You to Your Desire Joy.
          </h1>
          <p className="text-gray-600 mb-12 text-lg md:max-w-lg">
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
            className="w-full max-w-md"
          />
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white text-center py-8 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          You deserve to be happy
        </h2>
        <p className="max-w-2xl mx-auto">
          Your mental health care should be effective, easy, and fun. Whatever
          life is bringing you, Tinka Health Services is here to help you
          navigate it.
        </p>
      </div>
    </div>
  );
}

export default Hero;
