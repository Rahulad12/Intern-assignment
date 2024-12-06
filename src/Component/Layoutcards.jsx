import React from "react";
import { Link } from "react-router-dom";
import "../Customecss/Layoutcard.css";
import Card from "./Card";

const Layoutcards = () => {
  return (
    <div className="layout-container">
      {/* Back Button */}
      <div className="back-button">
        <Link to="/">← Back</Link>
      </div>

      {/* Page Title */}
      <div className="layout-container-content">
        <h1 className="title">Layout Cards</h1>

        {/* Grid Layout */}
        <div className="cards">
          {/* First Card spans the full width */}
          <div className="cards-top">
            <Card
              country="Singapore"
              flag="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
              office="Head Office"
              address="XYZ Pvt. Ltd. Road to nowhere, 06-404, 500 Internal Error"
            />
          </div>

          {/* Other Cards */}
          <div className="cards-button">
            <Card
              country="Hong Kong"
              flag="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
              office="Branches"
              address="XYZ Pte. Ltd. The Infinite Loop Office, 404 Timeout Plaza"
            />
            <Card
              country="USA"
              flag="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              office="Branches"
              address="XYZ Inc. Nulltown, Buglandia, 500 0xDEADBEE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layoutcards;
