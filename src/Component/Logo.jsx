import React from "react";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 100"
    width="202"
    height="40px"
    fill="none"
  >
    {/* Circle-based Logo */}
    <circle cx="40" cy="50" r="30" fill="red" />
    <circle cx="40" cy="50" r="15" fill="white" />
    <path
      d="M40 20 A30 30 0 0 1 70 50 L55 50 A15 15 0 0 0 40 35 Z"
      fill="red"
    />

    {/* Text */}
    <text
      x="85"
      y="65"
      font-family="Arial, sans-serif"
      font-size="50"
      fill="red"
      font-weight="bold"
    >
      Logoipsum
    </text>
  </svg>
);

export default Logo;
