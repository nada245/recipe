// www.themealdb.com/api/json/v1/1/lookup.php?i={id}
// www.themealdb.com/api/json/v1/1/filter.php?c={searchTerm}
let searchInput = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search-btn");
let resultArea = document.querySelector("result-area");
searchInput.addEventListener("clicl", getRecipe);
function getRecipe() {
    let searchTerm = searchInput.ariaValueMax.trim();
    let apiUrl = `www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`;

    fetch(apiUrl)
        .then((res) => {
            if (res.ok) return res.json();

        })
        .then((data) => {
            displayRecipe(data);
        })
}
function displayRecipe(Recipe) {

}