import React from "react";
import "../Customecss/Card.css";
const Card = ({ country, flag, office, address }) => {
  return (
    <div className="card">
      <img src={flag} alt={`${country} Flag`} className="flag" />
      <h2>{country}</h2>
      <p>{office}</p>
      <p className="address">{address}</p>

      
    </div>
  );
};

export default Card;
