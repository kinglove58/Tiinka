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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3 mx-16">
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
        <p className="text-gray-700 mb-4">
          Don't see what you're looking for? We can help with a wide range of
          challenges.
        </p>
        <Link to="/services/Insomnia">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 mt-3">
            Check More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default memo(Specialization);
