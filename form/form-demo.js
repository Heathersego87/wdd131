// form-demo.js

function togglePaymentDetails(event) {
  const theForm = document.getElementById("checkoutForm");
  const creditCardContainer = document.getElementById("creditCardContainer");
  const paypalContainer = document.getElementById("paypalContainer");

  // Hide both and disable their required fields
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");
  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  // Show the selected option and re-enable its required field
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

// Show errors inside <section class="errors">
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// Validate the form before submit (Stretch Activity 3)
function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  // Only Bob can submit!
  if (theForm.fullName.value.trim() !== "Bob") {
    isValid = false;
    errors.push("Only people named Bob can submit this form!");
  }

  // Validate fake credit card number (only this number works)
  if (
    theForm.paymentMethod.value === "creditCard" &&
    theForm.creditCardNumber.value !== "1234123412341234"
  ) {
    isValid = false;
    errors.push("Invalid credit card number!");
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

// Event listeners
document
  .getElementById("paymentMethod")
  .addEventListener("change", togglePaymentDetails);

document
  .getElementById("checkoutForm")
  .addEventListener("submit", validateForm);
