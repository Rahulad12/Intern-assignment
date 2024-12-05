import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./Screen/Signup";
import Userverification from "./Component/Userverification";
import Layoutcards from "./Component/Layoutcards";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/verify" element={<Userverification />} />
        <Route path="/layout" element={<Layoutcards />} />
      </Routes>
    </div>
  );
};

export default App;
