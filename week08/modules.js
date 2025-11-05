// modules.js
import aCourse from "./Course.mjs";

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});

// initialize on load
aCourse.init();
