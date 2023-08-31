let result = document.getElementById("result");
let searchbtn = document.getElementById("searchbtn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchbtn.addEventListener("click", () => {
  let userInp = document.getElementById("userinput").value;
  if (userInp.length == 0) {
    result.innerHTML = `<h3>Input field cannot be empty</h3>`;
  } else {
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        let myMeal = data.meals[0];
        console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstructions);
        let count = 1;
        let ingredients = [];
        for (let i in myMeal) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myMeal[i]) {
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure` + count];
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
        console.log(ingredients);

        result.innerHTML = `
        <img src = ${myMeal.strMealThumb}>
        <div class= 'details'>
            <h2>${myMeal.strMeal}</h2>
            <h3>${myMeal.strArea}</h3>
        </div>
           <div id = 'ingredient-container'></div>
           <div id='recipe'>
           <button id='hide-recipe'>X</button>
           <pre id= 'instructions'>${myMeal.strInstructions}</pre>
           </div>
           <button id='show-recipe'>View your recipe!</button>
           `;

        let ingredientCon = document.getElementById("ingredient-container");
        let parent = document.createElement("ul");
        element.className = "ul-items";
        let recipe = document.getElementById("recipe");
        let hideRecipe = document.getElementById("hide-recipe");
        let showRecipe = document.getElementById("show-recipe");

        ingredients.forEach((i) => {
          let child = document.createElement("li");
          child.innerText = i;
          parent.appendChild(child);
          ingredientCon.appendChild(parent);
        });
        hideRecipe.addEventListener("click", () => {
          recipe.style.display = "none";
        });
        showRecipe.addEventListener("click", () => {
          recipe.style.display = "block";
        });
      })
      .catch(() => {
        result.innerHTML = `<h3>Input not valid</h3>`;
      });
  }
});
