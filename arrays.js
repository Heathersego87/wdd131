 //activity 1
const steps = ["one", "two", "three"];

function listTemplate(step) {
  // return an HTML string for each step
  return `<li>${step}</li>`;
}

// use map to convert the steps into HTML list items
const stepsHtml = steps.map(listTemplate);

// join them into one big string and insert into the <ul>
document.querySelector("#myList").innerHTML = stepsHtml.join("");

//activity 2
const grades = ["A", "B", "A"];

function convertToPoints(grade) {
  if (grade === "A") return 4;
  else if (grade === "B") return 3;
  else if (grade === "C") return 2;
  else if (grade === "D") return 1;
  else return 0;
}

const gpaPoints = grades.map(convertToPoints);
console.log(gpaPoints); // [4, 3, 4]

//activity 3
const gpa = gpaPoints.reduce((total, num) => total + num, 0) / gpaPoints.length;
console.log(gpa);

//activity 4
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortFruits = fruits.filter(fruit => fruit.length < 6);
console.log(shortFruits);

//activity 5
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = numbers.indexOf(luckyNumber);
console.log(luckyIndex);
