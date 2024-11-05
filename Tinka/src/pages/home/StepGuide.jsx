import React from "react";
import { AiOutlineForward } from "react-icons/ai";

const steps = [
  { text: "Complete a brief survey" },
  { text: "Pick your plan" },
  { text: "Get matched in an hour" },
  { text: "Start texting" },
  { text: "Improve, one text at a time" },
];

const StepGuide = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-200 p-6 md:p-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
        Getting started is a text away
      </h2>
      <p className="text-sm md:text-lg text-center mb-8">Step-by-step guide:</p>

      {/* Stepper Container */}
      <div className="relative flex flex-col md:flex-row items-center md:space-x-6 w-full max-w-3xl">
        {/* Gradient Line */}

        {/* Step Markers */}
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:space-x-2 mt-8 md:mt-0"
            >
              {/* Icon on the line */}

              {/* Step Text */}
              <p className="text-center text-xs md:text-sm font-medium mt-2 md:mt-0">
                {step.text}
              </p>
              <div className="absolute top-10 px-[-1px] flex items-center justify-center">
                <AiOutlineForward
                  className="text-blue-500 bg-white rounded-full p-1 md:p-0"
                  size={20}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-1 top-11 md:h-2 md:w-full w-2 h-full bg-gradient-to-b md:bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
      </div>

      <button className="mt-12 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
        Try online therapy
      </button>
    </div>
  );
};

export default StepGuide;
