```javascript
// EMI Calculator Logic
function updateEMI() {
  const loanAmount = parseFloat(document.getElementById("loan-amount").value);
  const interestRate = parseFloat(document.getElementById("interest-rate").value);
  const tenure = parseFloat(document.getElementById("tenure").value);

  // Update display values
  document.getElementById("loan-amount-display").textContent = `₹${loanAmount.toLocaleString("en-IN")}`;
  document.getElementById("interest-rate-display").textContent = `${interestRate}%`;
  document.getElementById("tenure-display").textContent = `${tenure} months`;

  // Calculate EMI
  const monthlyRate = interestRate / 12 / 100;
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - loanAmount;

  // Update results
  document.getElementById("emi-result").textContent = `₹${Math.round(emi).toLocaleString("en-IN")}`;
  document.getElementById("principal-display").textContent = `₹${loanAmount.toLocaleString("en-IN")}`;
  document.getElementById("interest-display").textContent = `₹${Math.round(totalInterest).toLocaleString("en-IN")}`;
  document.getElementById("total-amount-display").textContent = `₹${Math.round(totalAmount).toLocaleString("en-IN")}`;
}

function setPreset(amount, rate, tenure) {
  document.getElementById("loan-amount").value = amount;
  document.getElementById("interest-rate").value = rate;
  document.getElementById("tenure").value = tenure;
  updateEMI();
}

// Initialize EMI calculation on page load
document.addEventListener("DOMContentLoaded", () => {
  updateEMI();
});
```