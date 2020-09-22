import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  const [output, setOutput] = useState(null);

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
    } else if (age === "12" && activity === "moderate") {
      setOutput(Number(weight * 0.02));
    } else {
      setOutput(Number(weight * 0.03).toFixed(2));
    }

    console.log(e.target.age.value);
    console.log(e.target.activity.value);
    console.log(e.target.weight.value);
  };

  const createTable = (string) => {
    const num = Number(string);
    const lbsPerDay = num;
    const lbsPerWeek = num * 7;
    const lbsPerMonth = num * 30;
    const boxPerMonth = ((lbsPerMonth / 40).toFixed(2));
    const costPerMonth = boxPerMonth * 75;
    const gramsPerDay = num * 454;
    const gramsPerMeal2 = ((gramsPerDay / 2).toFixed(2));
    const gramsPerMeal3 = ((gramsPerDay / 3).toFixed(2));

    return (
      <div>
        <p>{gramsPerDay} grams per day</p>
        <p>{gramsPerMeal2} grams per meal if they eat twice a day</p>
        <p>{gramsPerMeal3} grams per meal if they eat three times a day</p>
        <p>{lbsPerDay} lbs per day</p>
        <p>{lbsPerWeek} lbs per week</p>
        <p>{lbsPerMonth} lbs per month</p>
        <p>{boxPerMonth} box per month</p>
        <p>${costPerMonth} per month</p>
      </div>
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Raw Meat Calculator</h1>
        <div>
          <label htmlFor="age">Dogs age</label>
          <select name="age">
            <option value="2">2 - 4 months</option>
            <option value="4">4 - 7 months</option>
            <option value="7">7 - 12 months</option>
            <option value="12">12 +</option>
          </select>
        </div>
        <div>
          <label htmlFor="activity">Activity Level</label>
          <select name="activity">
            <option value="moderate">Moderate Activity</option>
            <option value="high">High Activity</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight">Your dog's weight in lbs</label>
          <input
            type="number"
            name="weight"
            step="any"
            placeholder="weight in lbs"
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <h3>{createTable(output)}</h3>
    </div>
  );
}

export default App;
