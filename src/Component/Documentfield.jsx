import React from "react";
import Uploadfile from "./Uploadfile";
const Documentfield = () => {

  return (
    <div>
      {/* uploadcerification section  */}
      <div className="file-upload-section">
        <div className="upload-certification">
          <div className="gap-6 p-6">
            <Uploadfile />
          </div>
        </div>

        {/* company logo  */}

        <div className="company-logo">
          <div className="gap-6 p-6">
            <Uploadfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentfield;
