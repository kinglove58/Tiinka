import React, { useState, useEffect } from "react";

const BookingModal = ({ show, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when modal opens
  useEffect(() => {
    if (show) {
      setIsLoading(true);
    }
  }, [show]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="w-[90%] h-[90%] bg-white rounded-lg overflow-hidden relative"
        onClick={(e) => e.stopPropagation()} // prevent close on iframe click
      >
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#005ab0] mx-auto mb-4"></div>
              <p className="text-[#005ab0] font-semibold text-lg">
                Loading booking calendar...
              </p>
              <p className="text-gray-500 text-sm mt-2">Please wait a moment</p>
            </div>
          </div>
        )}

        <iframe
          title="Book Appointment"
          src="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_108462"
          className="w-full h-full border-none"
          onLoad={handleIframeLoad}
          allow="fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          importance="high"
        />

        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl z-20 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
          onClick={onClose}
          aria-label="Close booking modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
