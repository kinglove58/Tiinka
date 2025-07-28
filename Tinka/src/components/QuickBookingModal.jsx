import React, { useState, useRef } from "react";

const QuickBookingModal = ({ show, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Preload iframe when modal becomes visible
  React.useEffect(() => {
    if (show && !isPreloaded) {
      setIsPreloaded(true);
      setIsLoading(true);
    }
  }, [show, isPreloaded]);

  if (!show) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="w-[95%] h-[95%] bg-white rounded-lg overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Enhanced loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-100 border-t-[#005ab0] mx-auto mb-4"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#005ab0] rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-[#005ab0] font-semibold text-xl mb-2">
                Loading your booking calendar...
              </p>
              <p className="text-gray-500 text-sm">
                Connecting to secure booking system
              </p>
              <div className="flex justify-center mt-4 space-x-1">
                <div className="w-2 h-2 bg-[#005ab0] rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-[#005ab0] rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[#005ab0] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <iframe
          ref={iframeRef}
          title="Book Appointment - Tinka Health Services"
          src="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_108462"
          className="w-full h-full border-none"
          onLoad={handleIframeLoad}
          allow="fullscreen; payment; geolocation"
          referrerPolicy="strict-origin-when-cross-origin"
          importance="high"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
        />

        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-3xl z-20 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-200 hover:border-red-200"
          onClick={onClose}
          aria-label="Close booking modal"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default QuickBookingModal;
