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

// DOM references for tips
const tipBtn = document.getElementById("tip-btn");
const tipDisplay = document.getElementById("tip-display");

// Show a random tip on button click
tipBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * tips.length);
  const randomTip = tips[randomIndex];

  tipDisplay.textContent = randomTip;

  // Conditional styling based on tip length
  if (randomTip.length > 45) {
    tipDisplay.style.color = "#FF6EC7"; // pink
  } else {
    tipDisplay.style.color = "#4A90E2"; // blue
  }
});


// =========================================
// LESSON FILTER FEATURE (Easy Lessons Only)
// =========================================

// Array of lesson objects
const lessons = [
  { name: "Meet the Keyboard", level: "easy" },
  { name: "Finger Numbers", level: "easy" },
  { name: "Middle C", level: "easy" },
  { name: "First Melody", level: "medium" },
  { name: "Rhythm Basics", level: "medium" },
  { name: "Simple Song Challenge", level: "hard" }
];

// Filter button reference
const showEasyBtn = document.getElementById("show-easy");
const lessonOutput = document.getElementById("lesson-output");

// Show easy lessons when button is clicked
showEasyBtn.addEventListener("click", () => {
  const easyLessons = lessons.filter(l => l.level === "easy");

  // Clear previous results
  lessonOutput.innerHTML = "";

  // Add each easy lesson to list
  easyLessons.forEach(lesson => {
    const li = document.createElement("li");
    li.textContent = lesson.name;
    lessonOutput.appendChild(li);
  });
});
