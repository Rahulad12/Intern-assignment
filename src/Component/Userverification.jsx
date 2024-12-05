import React, { useState, useEffect } from "react";
import "../Customecss/Userverification.css";

const Userverification = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timelimit, setTimelimit] = useState(99);

  // Handle input for each code box
  const handleCode = (value, index) => {
    const newInput = [...code];
    newInput[index] = value.slice(-1); // Restrict to a single character
    setCode(newInput);
  };

  // Timer countdown logic
  useEffect(() => {
    if (timelimit > 0) {
      const timer = setTimeout(() => setTimelimit(timelimit - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timelimit]);

  return (
    <div className="userverify-wrapper">
      <div className="logo-section d-flex">
        {/* <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="logo"
        /> */}
        <h2 style={{ color: "#e50000" }}>Logoipsum</h2>
      </div>
      <div className="userverify-container">
        <div className="content">
          <h1 className="text-head">Verify your Email</h1>
          <p className="text-muted">
            Please enter the 6-digit code we just sent to s*******a@xyz.com
          </p>
          <div className="code-container">
            {code.map((value, index) => (
              <input
                type="text"
                key={index}
                className="code-box"
                value={value}
                onChange={(e) => handleCode(e.target.value, index)}
                maxLength="1"
              />
            ))}
          </div>
          <button className="verify-button">Verify</button>
          <div className="timer text-muted">
            {timelimit > 0 ? (
              <p>
                Wait {Math.floor(timelimit / 60)}:
                {timelimit % 60 < 10 ? "0" : ""}
                {timelimit % 60} before requesting a new code.
              </p>
            ) : (
              <p
                className="resend-button"
                onClick={() => setTimelimit(99)}
                style={{ cursor: "pointer" }}
              >
                Resend Code
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userverification;
