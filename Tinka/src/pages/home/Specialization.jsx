import servicesDataList from "../services/serviceData";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Specialization() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Tinka Health Services Specialize in:
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3 mx-16">
        {servicesDataList.slice(0, 12).map((service) => (
          <div
            key={service.id}
            className="bg-white hover:scale-95 transition-transform duration-300 shadow-md rounded-lg py-5 group flex justify-center items-center  max-w-xs"
          >
            <Link
              to={`/services/${service.id}`}
              className="flex items-center justify-center"
            >
              <span className="text-blue-700 font-medium text-center">
                {service.id}
              </span>
              <IoChevronForwardOutline className="text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2" />
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 mb-16">
        <p className="text-gray-700 mb-4">
          Don't see what you're looking for? We can help with a wide range of
          challenges.
        </p>
        <Link to="/services">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800">
            Check More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Specialization;
