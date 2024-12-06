import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./Screen/Signupscreen";
import Userverification from "./Component/Userverification";
import Layoutcards from "./Component/Layoutcards";
import Afterotpscreen from "./Screen/Afterotpscreen";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/afterotp" element={<Afterotpscreen />} />
      </Routes>
    </div>
  );
};

export default App;
