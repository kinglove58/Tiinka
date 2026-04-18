import { FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const Locations = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -280,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: 280,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Locations</h2>

        {/* Mobile Horizontal Scroll with Navigation */}
        <div className="md:hidden relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-blue-600" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 text-center px-8 py-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="bg-blue-600 text-white py-6 rounded-lg space-y-1 min-w-[260px] max-w-md flex-shrink-0 mx-2">
              <h3 className="text-lg font-semibold">Virginia (VA)</h3>
              <p>585 Grove St, Suite 145</p>
              <p>Herndon, VA 20170</p>
              <p>
                <FaPhoneAlt className="inline text-blue-300 mr-2" />
                <a
                  href="tel:+15713498285"
                  className="hover:text-gray-300 hover:underline"
                >
                  +1 571-349-8285
                </a>
              </p>
            </div>
            <div className="bg-blue-600 text-white py-6 rounded-lg space-y-1 min-w-[260px] max-w-md flex-shrink-0 mx-2">
              <h3 className="text-lg font-semibold">Washington, DC</h3>
              <p>4315 50th Street NW, Suite 100</p>
              <p>Washington, DC 20016</p>
              <p>
                <FaPhoneAlt className="inline text-blue-300 mr-2" />
                <a
                  href="tel:+12029334300"
                  className="hover:text-gray-300 hover:underline"
                >
                  +1 202-933-4300
                </a>
              </p>
            </div>
            <div className="bg-blue-600 text-white py-6 rounded-lg space-y-1 min-w-[260px] max-w-md flex-shrink-0 mx-2">
              <h3 className="text-lg font-semibold">Maryland (MD)</h3>
              <p>5457 Twin Knolls Road, Suite 300</p>
              <p>Columbia, MD 21045</p>
              <p>
                <FaPhoneAlt className="inline text-blue-300 mr-2" />
                <a
                  href="tel:+14432956600"
                  className="hover:text-gray-300 hover:underline"
                >
                  +1 443-295-6600
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mx-auto py-2 text-center">
          <div className="bg-blue-600 text-white py-6 rounded-lg space-y-1">
            <h3 className="text-lg font-semibold">Virginia (VA)</h3>
            <p>585 Grove St, Suite 145</p>
            <p>Herndon, VA 20170</p>
            <p>
              <FaPhoneAlt className="inline text-blue-300 mr-2" />
              <a
                href="tel:+15713498285"
                className="hover:text-gray-300 hover:underline"
              >
                +1 571-349-8285
              </a>
            </p>
          </div>
          <div className="bg-blue-600 text-white py-6 rounded-lg space-y-1">
            <h3 className="text-lg font-semibold">Washington, DC</h3>
            <p>4315 50th Street NW, Suite 100</p>
            <p>Washington, DC 20016</p>
            <p>
              <FaPhoneAlt className="inline text-blue-300 mr-2" />
              <a
                href="tel:+12029334300"
                className="hover:text-gray-300 hover:underline"
              >
                +1 202-933-4300
              </a>
            </p>
          </div>
          <div className="bg-blue-600 text-white py-6 rounded-lg space-y-1">
            <h3 className="text-lg font-semibold">Maryland (MD)</h3>
            <p>5457 Twin Knolls Road, Suite 300</p>
            <p>Columbia, MD 21045</p>
            <p>
              <FaPhoneAlt className="inline text-blue-300 mr-2" />
              <a
                href="tel:+14432956600"
                className="hover:text-gray-300 hover:underline"
              >
                +1 443-295-6600
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
