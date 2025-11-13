// register.js

// Start with 1 participant
let participantCount = 1;

// Select key elements
const addButton = document.getElementById("add");
const form = document.querySelector("form");
const summary = document.getElementById("summary");

// Add event listener for "Add Participant"
addButton.addEventListener("click", () => {
  participantCount++;
  addParticipant(participantCount);
});

// Add event listener for form submission
form.addEventListener("submit", submitForm);

// Function to add a new participant section
function addParticipant(count) {
  const template = `
    <section class="participant${count}">
      <p>Participant ${count}</p>

      <div class="item">
        <label for="fname${count}">First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>

      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>

      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>

      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>

      <div class="item">
        <p>Grade</p>
        <select id="grade${count}">
          <option selected value="" disabled></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;

  // Insert before the Add button
  addButton.insertAdjacentHTML("beforebegin", template);
}

// Function to total all fee inputs
function totalFees() {
  // Select all elements with id starting with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements]; // Convert NodeList to Array

  // Add up all fee values
  const total = feeElements.reduce((sum, el) => {
    return sum + Number(el.value || 0);
  }, 0);

  return total;
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Stop form from reloading the page

  const name = document.getElementById("adult_name").value;
  const total = totalFees();

  // Hide the form
  form.style.display = "none";

  // Show the success message
  summary.innerHTML = successTemplate({
    name: name,
    participants: participantCount,
    total: total,
  });
}

// Template for success message
function successTemplate(info) {
  return `
    <h2>Registration Successful!</h2>
    <p>Thank you <strong>${info.name}</strong> for registering.</p>
    <p>You have registered <strong>${info.participants}</strong> participant(s).</p>
    <p>Total Fees Owed: <strong>$${info.total}</strong></p>
  `;
}
