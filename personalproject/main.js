// ======================================
// PRACTICE TRACKER SCRIPT
// ======================================

// User stats object (Required for assignment)
const userStats = {
  name: "Student",
  minutesToday: 0,
  totalMinutes: 0
};

// DOM Elements
const display = document.querySelector("#practice-display");
const addFiveBtn = document.querySelector("#add-5");
const resetBtn = document.querySelector("#reset");

// Update Display Function
function updateDisplay() {
  display.innerHTML = `
    You've practiced <strong>${userStats.minutesToday}</strong> minutes today!
  `;
}

// Add 5 Minutes Event
addFiveBtn.addEventListener("click", () => {
  userStats.minutesToday += 5;
  userStats.totalMinutes += 5;
  updateDisplay();
});

// Reset Event
resetBtn.addEventListener("click", () => {
  userStats.minutesToday = 0;
  updateDisplay();
});

// Initialize Display
updateDisplay();
