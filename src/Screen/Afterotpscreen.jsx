import React from "react";
import { useState } from "react";
import "../Customecss/Afterotp.css";
import Form from "../Component/Form";
import Progressbar from "../Component/Progressbar";
const Afterotpscreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
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

  const handelNextSteps = () => {
    setCurrentStep(currentStep + 1);
  };
  const handelPrevSteps = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="afterotp-container">
      <div className="text-head">
        <h1>Multi-Step Process Form Assignment</h1>
      </div>

      {/* // Progressbar Component */}
      <Progressbar steps={steps} currentsteps={currentStep} />

      <div className="afterotp-section">
        <div className="afterotp-section-heading"></div>
        <div className="afterotp-section-form">
          <Form nextsteps={handelNextSteps} previoussteps={handelPrevSteps} />
        </div>
      </div>
    </div>
  );
};

export default Afterotpscreen;
