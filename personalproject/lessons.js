// =========================================
// RANDOM LESSON TIP GENERATOR
// =========================================

// Array of piano practice tips
const tips = [
  "Practice slowly first—speed comes later!",
  "Keep your wrists relaxed while you play.",
  "Use curved fingers like you're holding a bubble.",
  "Repeat small sections instead of the whole song.",
  "Say note names out loud as you play.",
  "Use a metronome to build strong rhythm.",
  "Take a short break every 10 minutes to stay fresh.",
  "Play hands separately before putting them together.",
  "Clap the rhythm before you play it.",
  "Smile—you learn faster when you're relaxed!"
];

// DOM references
const tipBtn = document.getElementById("tip-btn");
const tipDisplay = document.getElementById("tip-display");

// Button click event → show random tip
tipBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * tips.length);
  const randomTip = tips[randomIndex];

  tipDisplay.textContent = randomTip;

  // Change color based on length (example of conditional logic)
  if (randomTip.length > 45) {
    tipDisplay.style.color = "#FF6EC7"; // pink
  } else {
    tipDisplay.style.color = "#4A90E2"; // blue
  }
});

