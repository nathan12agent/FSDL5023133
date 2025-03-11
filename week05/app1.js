document.getElementById('healthForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get values from the form
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const bloodPressure = parseInt(document.getElementById('bloodPressure').value);
  
    // Basic validation
    if (isNaN(age) || isNaN(weight) || isNaN(height) || isNaN(bloodPressure)) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Calculate BMI (Body Mass Index)
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
  
    // Health risk score (simple logic for demonstration)
    let riskScore = 0;
  
    // Age Risk: Older age increases risk
    if (age >= 45) riskScore += 2;
  
    // BMI Risk: Higher BMI increases health risk
    if (bmi >= 30) riskScore += 3;
    else if (bmi >= 25) riskScore += 2;
    else if (bmi >= 18.5) riskScore += 1;
  
    // Blood Pressure Risk: High blood pressure increases health risk
    if (bloodPressure >= 140) riskScore += 3;
    else if (bloodPressure >= 120) riskScore += 2;
    else if (bloodPressure >= 100) riskScore += 1;
  
    // Display the result based on risk score
    let resultMessage = "";
    if (riskScore <= 3) {
      resultMessage = "Low Risk";
    } else if (riskScore <= 5) {
      resultMessage = "Moderate Risk";
    } else {
      resultMessage = "High Risk";
    }
  
    document.getElementById('result').innerHTML = `Your Health Risk: <strong>${resultMessage}</strong>`;
  });
  