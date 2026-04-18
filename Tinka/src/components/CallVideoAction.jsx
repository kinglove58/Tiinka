import React, { lazy, Suspense, memo } from "react";
import { Link } from "react-router-dom";

const YouTubeThumbnail = lazy(() => import("./YouTubeThumbnail"));

const LoadingFallback = () => (
  <div className="flex justify-center items-center">
    <div className="loader">Loading...</div>
  </div>
);

const CallVideoAction = () => {
  return (
    <div className="bg-[#005ab0] text-white text-center py-8 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            You deserve to be happy
          </h2>
          <p className="max-w-xl mx-auto mb-6">
            Your mental health care should be effective, easy, and fun. Whatever
            life is bringing you, Tinka Health Services is here to help you
            navigate it.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-[#005ab0] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg min-w-[160px] text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/tinkahealthservicesbooking"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#005ab0] transition-all duration-300 min-w-[160px] text-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full relative">
          {/* Video indicator overlay */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center gap-2">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Video
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <YouTubeThumbnail videoId="dXdKybDCASM" />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default memo(CallVideoAction);
