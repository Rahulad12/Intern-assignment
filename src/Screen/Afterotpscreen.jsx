import React from "react";
import "../Customecss/Afterotp.css";
import Form from "../Component/Form";
import Progressbar from "../Component/Progressbar";
const Afterotpscreen = () => {
  return (
    <div className="afterotp-container">
      <div className="text-head">
        <h1>Multi-Step Process Form Assignment</h1>
      </div>
      <div className="afterotp-heading">
        <Progressbar />
      </div>

      <div className="afterotp-section">
        <div className="afterotp-section-heading"></div>
        <div className="afterotp-section-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Afterotpscreen;
