import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Customecss/Userverification.css";

import Logo from "./Logo";

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
      <div className="logo-section">
        {/* <h2 className="logo-text text-left">Logoipsum</h2>
         */}
        <Logo />
      </div>
      <div className="userverify-container">
        <div className="content">
          <h1 className="text-head text-left">Verify your Email</h1>
          <p className="text-muted text-left mt-2">
            Please enter the 6-digit code we just sent to s*******a@xyz.com
          </p>
          <div className="code-container">
            {code.slice(0, 3).map((value, index) => (
              <input
                type="text"
                key={index}
                className="code-box"
                value={value}
                onChange={(e) => handleCode(e.target.value, index)}
                maxLength="1"
              />
            ))}
            <span className="text-4xl">-</span>
            {code.slice(3, 6).map((value, index) => (
              <input
                type="text"
                key={index + 3}
                className="code-box"
                value={value}
                onChange={(e) => handleCode(e.target.value, index + 3)}
                maxLength="1"
              />
            ))}
          </div>
          <Link to="/afterotp">
            <button className="verify-button">verify</button>
          </Link>

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
                Didn't receive the code?{" "}
                <span className="text-blue-400">Resend Code</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="userverify-footer">
        <p className="text-muted">
          By continuing, you’re agreeing to Nobody’s
          <span className="text-blue-400"> Terms of Service</span>,
          <span className="text-blue-400"> Privacy Policy</span> <br />
          and
          <span className="text-blue-400"> Cookie Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default Userverification;
