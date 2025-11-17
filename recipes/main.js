// IMPORT RECIPES
import { recipes } from "./recipes.mjs";

function ratingTemplate(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }

  return `
    <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
      ${stars}
    </span>
  `;
}

// ⭐ SAFER TAG TEMPLATE — prevents undefined
function tagTemplate(tags = []) {
  if (!tags || tags.length === 0) return "";

  return `
    <div class="tags">
      ${tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}

function recipeTemplate(recipe) {
  return `
    <article class="recipe-card">
      <img src="images/${recipe.image}" alt="${recipe.name}" />

      <div class="recipe-info">
        <h2>${recipe.name}</h2>

        ${ratingTemplate(recipe.rating)}

        <!-- ⭐ Prevent undefined tags -->
        ${recipe.tags ? tagTemplate(recipe.tags) : ""}

        <p class="recipe-description">${recipe.description}</p>

        <h3>Ingredients</h3>
        <ul>
          ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h3>Instructions</h3>
        <ol>
          ${recipe.instructions.map(step => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    </article>
  `;
}

function renderRecipes(recipeArray) {
  const recipeList = document.querySelector("#recipes");
  recipeList.innerHTML = "";

  if (recipeArray.length === 0) {
    recipeList.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  recipeArray.forEach(recipe => {
    recipeList.innerHTML += recipeTemplate(recipe);
  });
}

function renderRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  const randomRecipe = recipes[randomIndex];
  renderRecipes([randomRecipe]);
}

function filterRecipes(query) {
  query = query.toLowerCase();

  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query))
  );
}

document.querySelector("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const searchInput = document.querySelector("#searchInput").value.trim().toLowerCase();
  const filtered = filterRecipes(searchInput);

  if (searchInput === "") {
    renderRandomRecipe();  // empty search → random recipe
  } else {
    renderRecipes(filtered);
  }
});

renderRandomRecipe();
