import React from 'react'
import "../Customecss/Layoutcard.css"
import Card from './Card'
const Layoutcards = () => {
  return (
    <div className="layout-container">
      <a href="#" className="back-button">
        ← Back
      </a>
      <h1 className="title">Layout Cards</h1>
      <div className="cards">
        <Card
          country="Singapore"
          flag="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
          office="Head Office"
          address="XYZ Pvt. Ltd. Road to nowhere, 06-404, 500 Internal Error"
        />
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
  )
}

export default Layoutcards
