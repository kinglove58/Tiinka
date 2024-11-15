import React, { lazy, Suspense, memo } from "react";

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
          <p className="max-w-xl mx-auto">
            Your mental health care should be effective, easy, and fun. Whatever
            life is bringing you, Tinka Health Services is here to help you
            navigate it.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <Suspense fallback={<LoadingFallback />}>
            <YouTubeThumbnail videoId="dXdKybDCASM" />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default memo(CallVideoAction);
