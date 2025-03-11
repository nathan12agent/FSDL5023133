import React, { useState } from "react";
import HealthForm from "./HealthForm";
import Result from "./Result";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    bloodPressure: "",
    smoking: false,
    activityLevel: "sedentary",
  });

  const [result, setResult] = useState("");

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { age, weight, height, bloodPressure, smoking, activityLevel } = formData;

    // Basic validation
    if (!age || !weight || !height || !bloodPressure) {
      alert("Please fill in all fields.");
      return;
    }

    // BMI Calculation
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Health risk score calculation
    let riskScore = 0;

    // Age Risk
    if (age >= 45) riskScore += 2;

    // BMI Risk
    if (bmi >= 30) riskScore += 3;
    else if (bmi >= 25) riskScore += 2;
    else if (bmi >= 18.5) riskScore += 1;

    // Blood Pressure Risk
    if (bloodPressure >= 140) riskScore += 3;
    else if (bloodPressure >= 120) riskScore += 2;
    else if (bloodPressure >= 100) riskScore += 1;

    // Smoking Risk
    if (smoking) riskScore += 2;

    // Activity Level Risk
    if (activityLevel === "sedentary") riskScore += 2;
    else if (activityLevel === "light") riskScore += 1;

    // Determine health risk level
    let resultMessage = "";
    if (riskScore <= 3) {
      resultMessage = "Low Risk";
    } else if (riskScore <= 5) {
      resultMessage = "Moderate Risk";
    } else {
      resultMessage = "High Risk";
    }

    setResult(resultMessage);
  };

  return (
    <div className="container">
      <h1>Health Risk Assessment</h1>
      <HealthForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Result result={result} />
    </div>
  );
};

export default App;
