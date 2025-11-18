// ======================================
// PRACTICE TRACKER SCRIPT
// ======================================

// State
let practiceMinutes = 0;

// DOM Elements
const display = document.querySelector("#practice-display");
const addFiveBtn = document.querySelector("#add-5");
const resetBtn = document.querySelector("#reset");

// Update function
function updateDisplay() {
  display.innerHTML = `You've practiced <strong>${practiceMinutes}</strong> minutes today!`;
}

// Add practice minutes
addFiveBtn.addEventListener("click", () => {
  practiceMinutes += 5;
  updateDisplay();
});

// Reset tracker
resetBtn.addEventListener("click", () => {
  practiceMinutes = 0;
  updateDisplay();
});

// Initial load
updateDisplay();
