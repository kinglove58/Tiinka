import React from "react";
import { Link } from "react-router-dom";
import serviceData from "../pages/services/serviceData";

const ServiceGrid = () => {
  return (
    <div className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Browse All Our Services
        </h3>
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
          {serviceData.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="inline-block bg-blue-100 hover:bg-blue-200 text-blue-800 hover:text-blue-900 px-3 py-2 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:shadow-md border border-blue-200 hover:border-blue-300"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
