let result = document.getElementById('result');
let searchbtn = document.getElementById('searchbtn');
let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

searchbtn.addEventListener('click', ()=> {
    let userInp = document.getElementById('userinput').value;
    if (userInp.length === 0) {
        result.innerHTML = <h3>Input field cannot be empty</h3>;
    } else {
        fetch (url + userInp)
        .then ((response) => response.json())
        .then((data) => {
            let theMeal = data.meals[0];
            console.log(theMeal);
            console.log(theMeal.strMealThumb);
            console.log(theMeal.strMeal);
            console.log(theMeal.strArea);
            console.log(theMeal.strInstructions);
            let count = 1; 
            let ingredients = [];
            for (let i in theMeal) {
                let ingredient = '';
                let measure = '';
                if (i.startsWith('strIngredient') && theMeal[i]) {
                    ingredient = theMeal[i];
                    measure = theMeal['strMeasure' + count];
                    count += 1;
                    ingredients.push(`${measure} ${ingredient}`);
                }
           }
           console.log(ingredients);
           
           result.innerHTML =`
        <img src = ${theMeal.strMealThumb}>
        <div class= 'details'>
            <h2>${theMeal.strMeal}</h2>
            <h3>${theMeal.strArea}</h3>
        </div>
           <div id = 'ingredient-container'></div>
           <div id='recipe'>
           <button id='hide-recipe'>X</button>
           <pre id= 'instructions'>${theMeal.strInstructions}</pre>
           </div>
           <button id='show-recipe'>View your recipe!</button>
           `;
        
           let ingredientCon = document.getElementById('ingredient-container');
           let parent = document.createElement('ul');
           element.className = ('ul-items');
           let recipe = document.getElementById('recipe');
           let hideRecipe = document.getElementById('hide-recipe');
           let showRecipe = document.getElementById('show-recipe');

           ingredients.forEach((i) => {
            let child = document.createElement('li');
            child.innerText = i;
            parent.appendChild(child);
            ingredientCon.appendChild(parent);
           });
           hideRecipe.addEventListener('click', () => {
            recipe.style.display = 'none';
           });
           showRecipe.addEventListener('click', () => {
            recipe.style.display = 'block';
           });
        })
        .catch (() =>  {
            result.innerHTML = `<h3>Input not valid</h3>`;
        });
    }
}
);
