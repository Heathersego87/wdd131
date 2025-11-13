const aCourse = {
  code: "CSE121b",
  name: "JavaScript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" },
  ],

  updateEnrollment(sectionNum, action) {
    const index = this.sections.findIndex(sec => sec.sectionNum == sectionNum);
    if (index >= 0) {
      if (action === "enroll") {
        this.sections[index].enrolled++;
      } else if (action === "drop" && this.sections[index].enrolled > 0) {
        this.sections[index].enrolled--;
      }
      renderSections(this.sections);
    }
  }
};

function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
  const tbody = document.querySelector("#sections");
  tbody.innerHTML = "";
  sections.forEach(section => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    `;
    tbody.appendChild(row);
  });
}

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.updateEnrollment(sectionNum, "enroll");
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.updateEnrollment(sectionNum, "drop");
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);
