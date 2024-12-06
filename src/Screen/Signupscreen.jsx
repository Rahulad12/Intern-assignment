import React from "react";
import "../Customecss/Signup.css";
import Userverification from "../Component/Userverification";
import Layoutcards from "../Component/Layoutcards";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 signup-container">
      <div className="md:col-span-6">
        <Layoutcards />
        {/* this is code */}
      </div>
      <div className="md:col-span-6">
        <Userverification />
      </div>
    </div>
  );
};

export default Signup;
