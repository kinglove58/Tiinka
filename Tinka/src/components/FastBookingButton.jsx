import React, { useState, useCallback } from "react";
import QuickBookingModal from "./QuickBookingModal";

const FastBookingButton = ({
  children = "Book an Appointment",
  className = "",
  ...props
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isPreloading, setIsPreloading] = useState(false);

  // Preload on hover to make it faster
  const handleMouseEnter = useCallback(() => {
    if (!isPreloading) {
      setIsPreloading(true);
      // Preconnect to the booking service
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = "https://d2oe0ra32qx05a.cloudfront.net";
      document.head.appendChild(link);
    }
  }, [isPreloading]);

  const handleClick = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <button
        {...props}
        className={`${className} relative overflow-hidden group`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onFocus={handleMouseEnter}
      >
        {children}
        {/* Subtle loading indicator when preloading */}
        {isPreloading && !showModal && (
          <div className="absolute inset-0 bg-blue-600 bg-opacity-10 animate-pulse pointer-events-none"></div>
        )}
      </button>

      <QuickBookingModal show={showModal} onClose={handleClose} />
    </>
  );
};

export default FastBookingButton;
