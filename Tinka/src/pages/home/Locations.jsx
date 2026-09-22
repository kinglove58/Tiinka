import PropTypes from "prop-types";
import { FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Locations = ({ homepage = false }) => {
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

  if (homepage) {
    const locations = [
      {
        title: "Virginia",
        address: "585 Grove St, Suite 145",
        city: "Herndon, VA 20170",
        phone: "+1 571-349-8285",
        tel: "+15713498285",
        path: "/psychiatric-provider-herndon-va",
      },
      {
        title: "Maryland",
        address: "5457 Twin Knolls Road, Suite 300",
        city: "Columbia, MD 21045",
        phone: "+1 443-295-6600",
        tel: "+14432956600",
        path: "/maryland-psychiatrist",
      },
      {
        title: "Washington, DC",
        address: "4315 50th Street NW, Suite 100",
        city: "Washington, DC 20016",
        phone: "+1 202-933-4300",
        tel: "+12029334300",
        path: "/dc-psychiatrist",
      },
    ];
    return (
      <section
        id="home-locations"
        className="home-section bg-white"
        aria-labelledby="home-locations-heading"
      >
        <div className="home-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="home-locations-heading" className="home-heading">
              Care Near You
            </h2>
            <p className="home-copy mx-auto">
              Access compassionate mental health care in Virginia, Maryland and
              Washington, DC.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {locations.map((location) => (
              <article
                key={location.title}
                className="relative rounded-lg border border-[#cfe3f6] bg-[#f4f8fc] p-5"
              >
                <h3 className="text-xl font-bold text-[#005ab0]">
                  <Link
                    to={location.path}
                    className="after:absolute after:inset-0 after:rounded-lg hover:underline"
                  >
                    {location.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  {location.address}
                  <br />
                  {location.city}
                </p>
                <a
                  href={`tel:${location.tel}`}
                  className="relative z-10 mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-[#005ab0]"
                >
                  <FaPhoneAlt aria-hidden="true" />
                  {location.phone}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
              <Link
                to="/psychiatric-provider-herndon-va"
                className="inline-block mt-2 text-blue-100 hover:text-white underline"
              >
                Herndon psychiatric services
              </Link>
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
              <Link
                to="/dc-psychiatrist"
                className="inline-block mt-2 text-blue-100 hover:text-white underline"
              >
                Washington DC psychiatric services
              </Link>
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
        <div className="hidden md:grid md:grid-cols-3 gap-4 mx-auto py-1 text-center">
          <div className="bg-blue-600 text-white py-4 rounded-lg space-y-1">
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

Locations.propTypes = { homepage: PropTypes.bool };

export default Locations;
