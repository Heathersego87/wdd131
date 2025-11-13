function getGrades() {
  const gradesInput = document.querySelector("#grades").value;
  const gradesArray = gradesInput.split(",").map(grade => grade.trim().toUpperCase());
  return gradesArray;
}

function lookupGrade(letter) {
  if (letter === "A") return 4;
  else if (letter === "B") return 3;
  else if (letter === "C") return 2;
  else if (letter === "D") return 1;
  else if (letter === "F") return 0;
  else return 0;
}

function calculateGpa(grades) {
  const points = grades.map(lookupGrade);
  const total = points.reduce((sum, p) => sum + p, 0);
  const gpa = total / points.length;
  return gpa.toFixed(2);
}

function displayGpa(gpa) {
  document.querySelector("#output").textContent = `Your GPA is ${gpa}`;
}

function clickHandler() {
  const grades = getGrades();
  const gpa = calculateGpa(grades);
  displayGpa(gpa);
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);
