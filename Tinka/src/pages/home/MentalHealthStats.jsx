import React from "react";
import CountUp from "react-countup";

const statsData = [
  {
    value: 59,
    unit: "Million",
    description: "Adults in the US struggle with mental health issues.",
    bgColor: "bg-teal-700",
  },
  {
    value: 280,
    unit: "Million",
    description: "Or roughly 5% of adults struggle with depression.",
    bgColor: "bg-green-500",
  },
  {
    value: 37,
    unit: "%",
    description:
      "of People Have reported using Telehealth services in the past 12 months.",
    bgColor: "bg-blue-400",
  },
];

const MentalHealthStats = () => {
  return (
    <div className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">
            You don't have to struggle alone. Get help today
          </h2>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
            Explore Levels of Care
          </button>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} flex flex-col items-center justify-center text-center p-6 rounded-lg w-full md:w-1/3`}
            >
              <h3 className="text-4xl font-bold">
                <CountUp end={stat.value} duration={2.5} />
              </h3>
              <p className="text-lg font-semibold">{stat.unit}</p>
              <p className="mt-2 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalHealthStats;
