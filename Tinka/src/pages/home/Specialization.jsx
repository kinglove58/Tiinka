import { memo, useMemo } from "react";
import servicesDataList from "../services/serviceData";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Specialization = () => {
  // Use useMemo to memoize the sliced data
  const servicesToShow = useMemo(() => servicesDataList.slice(0, 12), []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl text-[#005ab0] font-bold mb-6 text-center">
        Tinka Health Services Specialize in:
      </h1>
      <div className="sm:hidden grid grid-cols-2 gap-x-3 gap-y-3 mx-2 pb-4">
        {/* Mobile grid layout, two columns */}
        {servicesToShow.map((service, index) => (
          <div
            key={service.id}
            className={`bg-white hover:scale-95 transition-transform duration-300 shadow-md rounded-lg py-5 group flex flex-col justify-center items-center ${
              index >= 9 ? "hidden" : "flex"
            }`}
          >
            <Link
              to={`/services/${service.id}`}
              className="flex items-center justify-center"
            >
              <span className="text-[#005ab0] hover:text-[#314499] font-medium text-center">
                {service.name}
              </span>
              <IoChevronForwardOutline className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" />
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3 mx-16">
        {/* Desktop and tablet grid */}
        {servicesToShow.map((service, index) => (
          <div
            key={service.id}
            className={`bg-white hover:scale-95 transition-transform duration-300 shadow-md rounded-lg py-5 group flex justify-center items-center max-w-xs ${
              index >= 9 ? "hidden lg:flex" : "flex"
            }`}
          >
            <Link
              to={`/services/${service.id}`}
              className="flex items-center justify-center"
            >
              <span className="text-[#005ab0] hover:text-[#314499] font-medium text-center">
                {service.name}
              </span>
              <IoChevronForwardOutline className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" />
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 pb-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <button className="bg-white-600 text-blue-700 font-bold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 border bottom-3 border-blue-600 hover:text-white">
              Contact Us
            </button>
          </Link>
          <Link to="/services">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 mt-0">
              View more
            </button>
          </Link>
          <Link to="/tinkahealthservicesbooking">
            <button className="bg-white-600 text-blue-700 font-bold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 border bottom-3 border-blue-600 hover:text-white">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Specialization);
