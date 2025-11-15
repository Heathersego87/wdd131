import { recipes } from "./recipes.mjs";

const recipeList = document.querySelector("#recipes");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

displayRecipes(recipes);

function displayRecipes(recipeArray) {
  recipeList.innerHTML = "";

  recipeArray.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    const stars = buildStars(recipe.rating);

    card.innerHTML = `
      <img src="images/${recipe.image}" alt="${recipe.name}" />

      <div class="recipe-info">
        <h2>${recipe.name}</h2>

        <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
          ${stars}
        </span>

        <p class="recipe-description">${recipe.description}</p>
      </div>
    `;

    recipeList.appendChild(card);
  });
}

function buildStars(rating) {
  let starHTML = "";
  for (let i = 1; i <= 5; i++) {
    starHTML += i <= rating
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }
  return starHTML;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.toLowerCase().trim();

  const filtered = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query)
  );

  displayRecipes(filtered);
});
