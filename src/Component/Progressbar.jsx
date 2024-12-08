import React from "react";
import "../Customecss/Progressbar.css";

const Progressbar = ({ steps, currentsteps }) => {
  return (
    <div className="bar-container">
      {/* Progress Bar Fill */}
      <div className="progress-bar">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${((currentsteps - 1) / (steps.length - 1)) * 100}%`,
            backgroundColor: "#34c759",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
      </div>
      {/* Steps */}
      {steps.map((step, index) => {
        const isCompleted = currentsteps > index + 1;
        const isCurrent = currentsteps === index + 1;

        return (
          <div className="steps" key={index}>
            {/* Circle */}
            <span
              className={`circle ${
                isCompleted
                  ? "bg-green-500" // Completed step
                  : isCurrent
                  ? "bg-white" // Current step
                  : "bg-gray-400" // Incomplete step
              }`}
            >
              {isCompleted ? "✓" : ""}
            </span>
            {/* Step Title */}
            <div className="step-title">
              <span
                className={` ${
                  isCurrent ? "text-black" : "text-gray-400"
                } block`}
              >
                {step}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Progressbar;
