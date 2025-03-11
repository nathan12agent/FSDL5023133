import React from "react";

const HealthForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="age">Age (years):</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="bloodPressure">Blood Pressure (mmHg):</label>
        <input
          type="number"
          id="bloodPressure"
          name="bloodPressure"
          value={formData.bloodPressure}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="smoking">Do you smoke?</label>
        <input
          type="checkbox"
          id="smoking"
          name="smoking"
          checked={formData.smoking}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="activityLevel">Physical Activity Level:</label>
        <select
          id="activityLevel"
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleInputChange}
        >
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="active">Active</option>
        </select>
      </div>

      <button type="submit">Calculate Risk</button>
    </form>
  );
};

export default HealthForm;
