import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [output, setOutput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = e.target.age.value;
    const activity = e.target.activity.value;
    const weight = e.target.weight.value;

    if (age === "2") {
      setOutput(`${Number(weight * 0.06)} lbs of raw meat per day`);
    } else if (age === "4") {
      setOutput(`${Number(weight * 0.05)} lbs of raw meat per day`);
    } else if (age === "7") {
      setOutput(`${Number(weight * 0.04)} lbs of raw meat per day`);
    } else if (age === "12" && activity === "moderate") {
      setOutput(`${Number(weight * 0.02)} lbs of raw meat per day`);
    } else {
      setOutput(`${Number(weight * 0.03)} lbs of raw meat per day`);
    }

    console.log(e.target.age.value);
    console.log(e.target.activity.value);
    console.log(e.target.weight.value);
  };

  const handleOutput = (value) => {
    return (
      <div>
        <p>this is the return</p>
      </div>
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Raw Meat Calculator</h1>
        <select name="age">
          <option value="2">2 - 4 months</option>
          <option value="4">4 - 7 months</option>
          <option value="7">7 - 12 months</option>
          <option value="12">12 +</option>
        </select>

        <select name="activity">
          <option value="moderate">Moderate Activity</option>
          <option value="high">High Activity</option>
        </select>

        <input type="number" name="weight" step="any" />
        <button type="submit">Calculate</button>
      </form>
      {output}
    </div>
  );
}

export default App;
