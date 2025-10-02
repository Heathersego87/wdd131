// Select the menu button and nav
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

// Toggle nav when the menu button is clicked
menuButton.addEventListener("click", () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
