console.log("✔ lessons.js loaded");

// =========================================
// RANDOM PRACTICE TIP GENERATOR
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

// DOM elements
const tipBtn = document.getElementById("tip-btn");
const tipDisplay = document.getElementById("tip-display");

// Make sure elements exist
if (tipBtn && tipDisplay) {
  tipBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomTip = tips[randomIndex];

    tipDisplay.textContent = randomTip;

    // Conditional color styling
    tipDisplay.style.color =
      randomTip.length > 45 ? "#FF6EC7" : "#4A90E2";
  });
} else {
  console.warn("Tip generator elements missing from the page.");
}

// =========================================
// EASY LESSON FILTER FEATURE
// =========================================

// Lesson objects
const lessons = [
  { name: "Meet the Keyboard", level: "easy" },
  { name: "Finger Numbers", level: "easy" },
  { name: "Middle C", level: "easy" },
  { name: "First Melody", level: "medium" },
  { name: "Rhythm Basics", level: "medium" },
  { name: "Simple Song Challenge", level: "hard" }
];

// DOM elements
const showEasyBtn = document.getElementById("show-easy");
const lessonOutput = document.getElementById("lesson-output");

// Make sure elements exist
if (showEasyBtn && lessonOutput) {
  showEasyBtn.addEventListener("click", () => {

    // Filter only easy lessons
    const easyLessons = lessons.filter(lesson => lesson.level === "easy");

    // Clear previous output
    lessonOutput.innerHTML = "";

    // Add filtered lessons
    easyLessons.forEach(lesson => {
      const li = document.createElement("li");
      li.textContent = lesson.name;
      lessonOutput.appendChild(li);
    });

  });
} else {
  console.warn("Lesson filter elements missing from the page.");
}
