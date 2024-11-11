import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const statsData = [
  {
    value: 59,
    unit: "Million",
    description: "Adults in the US struggle with mental health issues.",
    bgColor: "bg-[#6d8ad4]",
  },
  {
    value: 280,
    unit: "Million",
    description: "Or roughly 5% of adults struggle with depression.",
    bgColor: "bg-[#2189e9]",
  },
  {
    value: 37,
    unit: "of People",
    description:
      "Have reported using Telehealth services in the past 12 months.",
    bgColor: "bg-[#052593]",
  },
];

const MentalHealthStats = () => {
  return (
    <div className="bg-[#005ab0] text-white px-4 md:px-12 lg:px-24 py-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="text-center md:text-left font-serif text-white">
          <h2 className="md:text-4xl text-3xl font-bold mb-4">
            You don't have to <br /> struggle alone. <br /> Get help today
          </h2>
          <button className="mt-4 px-6 py-3 bg-white text-[#005ab0] font-semibold rounded hover:bg-gray-300 hover:scale-95 transition duration-300">
            <Link to="/contact"> Explore Levels of Care</Link>
          </button>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:flex-row gap-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} flex flex-col items-center justify-center text-center p-6 rounded-lg w-full md:w-1/3`}
            >
              <h3 className="text-4xl font-bold font-serif whitespace-nowrap">
                <CountUp end={stat.value} duration={3.5} />
                {stat.value === 37 ? "%" : ""}
              </h3>
              <p className="text-lg font-semibold font-sans">{stat.unit}</p>
              <p className="mt-2 text-sm font-sans">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalHealthStats;
