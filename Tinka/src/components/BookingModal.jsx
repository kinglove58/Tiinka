import React from "react";

const BookingModal = ({ show, onClose }) => {
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
        <iframe
          title="Book Appointment"
          src="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_108462"
          className="w-full h-full border-none"
        />
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
