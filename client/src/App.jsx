import React, { useState } from "react";
import "./App.scss";

function App() {
  const [output, setOutput] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = e.target.age.value;
    const activity = e.target.activity.value;
    const weight = e.target.weight.value;

    if (age === "2") {
      setOutput(Number(weight * 0.06).toFixed(2));
    } else if (age === "4") {
      setOutput(Number(weight * 0.05).toFixed(2));
    } else if (age === "7") {
      setOutput(Number(weight * 0.04).toFixed(2));
    } else if (age === "12" && weight <= 5) {
      setOutput(Number(weight * 0.05).toFixed(2));
    } else if (age === "12" && weight <= 10) {
      setOutput(Number(weight * 0.04).toFixed(2));
    } else if (age === "12" && weight < 15) {
      setOutput(Number(weight * 0.03).toFixed(2));
    } else if (age === "12" && weight >= 15 && activity === "moderate") {
      setOutput(Number(weight * 0.02).toFixed(2));
    } else {
      setOutput(Number(weight * 0.03).toFixed(2));
    }
  };

  //add a bag price

  const createTable = (string) => {
    const num = Number(string);
    // const lbsPerDay = num.toFixed(2);
    // const lbsPerWeek = (num * 7).toFixed(2);
    const lbsPerMonth = (num * 30).toFixed(2);
    const boxPerMonth = (lbsPerMonth / 40).toFixed(2);
    const costPerMonth = (boxPerMonth * 75).toFixed(2);
    const gramsPerDay = (num * 454).toFixed(0);
    const gramsPerMeal2 = (gramsPerDay / 2).toFixed(0);
    const gramsPerMeal3 = (gramsPerDay / 3).toFixed(0);
    const cubePerDay = (gramsPerDay / 340).toFixed(2);
    const bagsPerMonth = (lbsPerMonth / 5).toFixed(2);
    const costPerMonthBag = (bagsPerMonth * 12).toFixed(2);

    return (
      <div>
        <div className="calc-stats">
          <h2>Daily</h2>
          <p>{gramsPerDay} grams per day</p>
          <p>{gramsPerMeal2} grams per meal (2 meals daily)</p>
          <p>{gramsPerMeal3} grams per meal (3 meals daily)</p>
          <p>{cubePerDay} blocks per day</p>
        </div>
        {/* <div className="calc-stats">
          <p>{lbsPerDay} lbs per day</p>
          <p>{lbsPerWeek} lbs per week</p>
        </div> */}
        <div className="calc-stats">
          <h2>Monthly</h2>
          <p>{lbsPerMonth} lbs per month</p>
          <p>{boxPerMonth} box per month (40lbs)</p>
          <p>{bagsPerMonth} bags per month (5lbs)</p>
          <p>${costPerMonth} per month (box)</p>
          <p>${costPerMonthBag} per month (bag)</p>
        </div>
      </div>
    );
  };

  const handleAge = (e) => {
    if (e.target.value === "12") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="raw-main">
      <form onSubmit={handleSubmit} className="raw-main__form">
        <div className="raw-main__input-container">
          <label htmlFor="age">Dog's Age</label>
          <select name="age" onChange={(e) => handleAge(e)}>
            <option value="2">2 - 4 months</option>
            <option value="4">4 - 7 months</option>
            <option value="7">7 - 12 months</option>
            <option value="12">12+ months</option>
          </select>
        </div>
        <div
          className="raw-main__input-container"
          style={!isActive ? { display: "none" } : { display: "" }}
        >
          <label htmlFor="activity">Dog's Activity Level</label>
          <select name="activity" disabled={!isActive}>
            <option value="moderate">Moderate Activity</option>
            <option value="high">High Activity</option>
          </select>
        </div>
        <div className="raw-main__input-container">
          <label htmlFor="weight">
            {!isActive ? "Dog's Weight (lbs)" : "Dog's Ideal Weight (lbs)"}
          </label>
          <input
            type="number"
            name="weight"
            step="any"
            placeholder={!isActive ? "weight in lbs" : "Ideal weight in lbs"}
          />
        </div>
        <div>
          <button type="submit" className="raw-main__btn">
            Calculate
          </button>
        </div>
      </form>

      {output && createTable(output)}
    </div>
  );
}

export default App;