// Course.mjs
const aCourse = {
  code: "CSE121b",
  name: "JavaScript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 25, days: "TTh", instructor: "Sis A" },
  ],

  changeEnrollment(sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(sec => sec.sectionNum == sectionNum);
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else if (this.sections[sectionIndex].enrolled > 0) {
        this.sections[sectionIndex].enrolled--;
      }
      this.renderSections(this.sections);
    }
  },

  // new init method required for Activity 2
  init() {
    this.setCourseInfo();
    this.renderSections(this.sections);
  },

  // move the display functions inside the object
  setCourseInfo() {
    document.querySelector("#courseName").textContent = this.name;
    document.querySelector("#courseCode").textContent = this.code;
  },

  renderSections(sections) {
    const tbody = document.querySelector("#sections");
    const html = sections.map(
      s => `<tr>
        <td>${s.sectionNum}</td>
        <td>${s.roomNum}</td>
        <td>${s.enrolled}</td>
        <td>${s.days}</td>
        <td>${s.instructor}</td>
      </tr>`
    );
    tbody.innerHTML = html.join("");
  },
};

// default export
export default aCourse;
