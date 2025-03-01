// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(res => {
        let {recipes} = res;
        for (const recipe of recipes){
            let div = document.createElement('div');
            div.classList.add('divMain');
            let h2 = document.createElement('h2');
            h2.innerText = `${recipe.name}`;
            div.appendChild(h2);
            let ul = document.createElement("ul");
            let ulP = document.createElement('p');
            ulP.innerText = 'Ingredients:';
            ulP.classList.add('ulp');
            ul.appendChild(ulP);
            for (const ingredient of recipe.ingredients){
                let liIngredient = document.createElement('li');
                liIngredient.innerText = `${ingredient}`;
                ul.appendChild(liIngredient);
            }
            div.appendChild(ul);
            let ol =  document.createElement("ol");
            for (const instruction of recipe.instructions){
                let liInstruction = document.createElement('li');
                liInstruction.innerText = `${instruction}`;
                ol.append(liInstruction);
            }
            div.appendChild(ol);
            let p = document.createElement('p');
            p.innerText = `
           Prep time minutes: ${recipe.prepTimeMinutes}  
           Cook time minutes: ${recipe.cookTimeMinutes}
           Servings: ${recipe.servings}
           Difficulty: ${recipe.difficulty}
           Cuisine: ${recipe.cuisine}
           Calories per serving: ${recipe.caloriesPerServing} 
`;
            div.appendChild(p);
            let span = document.createElement('span');
            span.innerText = 'tags:';
            for (const tag of recipe.tags){
                let pTags = document.createElement('p');
                pTags.innerText = `${tag}`;
                span.append(pTags);
            }
            div.appendChild(span);
            let p1 = document.createElement('p');
            p1.innerText = `userId: ${recipe.userId} `
                div.appendChild(p1);
            let image = document.createElement("img");
            image.src = recipe.image;
            image.classList.add('img');
            div.append(image);

            let p2 = document.createElement('p');
            p2.innerText = `
            rating: ${recipe.rating}  
            reviewCount: ${recipe.reviewCount}
            mealType: ${recipe.mealType} 
            `;
            div.appendChild(p2);
            let elementById = document.getElementById('recip');

            elementById.appendChild(div);
        }

    });

// // "prepTimeMinutes": 20,
// //   "cookTimeMinutes": 15,
// //   "servings": 4,
// //   "difficulty": "Easy",
// //   "cuisine": "Italian",
// //   "caloriesPerServing": 300,
// !

//   "tags": [
//     "Pizza",
//     "Italian"
//   ],
//   userId
//   "image "https://cdn.dummyjson.com/recipe-images/1.webp",
//   rating
//   reviewCount
//   "mealType": [
//     "Dinner"
//   ]