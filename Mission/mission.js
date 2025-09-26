// Grab elements we need
const themeSelector = document.querySelector("#themeSelector");
const body = document.querySelector("body");
const logo = document.querySelector("#logo");

// Function to handle theme changes
function changeTheme() {
  if (themeSelector.value === "dark") {
    // Switch to dark mode
    body.classList.add("dark");
    logo.setAttribute("src", "byui-logo_white.webp"); // white logo
  } else {
    // Switch back to light mode
    body.classList.remove("dark");
    logo.setAttribute("src", "byui-logo_blue.webp"); // blue logo
  }
}

// Listen for changes to the dropdown
themeSelector.addEventListener("change", changeTheme);
