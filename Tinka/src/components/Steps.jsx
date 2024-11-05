import React from 'react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Find Your Ellie location",
      description: "Enter your zip code or search the map to find an Ellie Mental Health clinic near you."
    },
    {
      id: 2,
      title: "Talk to an actual person",
      description: "Fill out a therapy request form or call your local Ellie to request an appointment."
    },
    {
      id: 3,
      title: "Get matched with a therapist",
      description: "Get your personalized therapist match from our amazing Client Access Specialists."
    }
  ];

  return (
    <div className="bg-teal-900 text-white p-8">
      <div className="flex flex-col gap-[2rem] md:flex-row justify-between items-center relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center w-full md:w-1/3 relative">
            {index !== 0 && (
              <div className="hidden md:block absolute right-[55%] top-6 w-full h-1 bg-teal-300"></div>
            )}
            <div className="bg-teal-700 rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold text-teal-200 z-10">
              {step.id}
            </div>
            <h3 className="text-lg font-semibold text-center mt-4">{step.title}</h3>
            <p className="text-center mt-2 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
