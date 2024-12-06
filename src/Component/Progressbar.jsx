import React from "react";

const Progressbar = () => {
  const steps = [
    "Business Type",
    "Business Details",
    "Authorized Representative",
    "Business Owners",
    "Company Directors",
    "Support Information",
    "Add Details",
    "Complete Registration",
  ];

  const currentStep = 1; // Change this based on the current active step

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl flex justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center flex-col w-full"
          >
            <div
              className={`w-4 h-4 rounded-full ${
                index <= currentStep ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
            {index < steps.length - 1 && (
              <div
                className={`w-full h-0.5 ${
                  index < currentStep ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
            <p
              className={`mt-2 text-xs ${
                index === currentStep
                  ? "text-green-500 font-medium"
                  : "text-gray-500"
              }`}
            >
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progressbar;
