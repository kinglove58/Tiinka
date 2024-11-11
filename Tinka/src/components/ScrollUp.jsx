import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-24 left-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="h-[40px] w-[40px] rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          {/* ↑ */}
          <FaAngleUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollUp;
