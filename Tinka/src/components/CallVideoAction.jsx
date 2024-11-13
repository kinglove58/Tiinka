import React, { memo } from "react";

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
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dXdKybDCASM?si=lk_NDkF7F4-PLRyG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy" // Lazy load the iframe
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CallVideoAction);
