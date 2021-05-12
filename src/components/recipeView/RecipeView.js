import './RecipeView.scss';
import React from 'react';
import Nutritional from '../Nutritional/Nutritional';

export default function RecipeView({fat,carbs, protein, ingredients, kcal,title, description}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    <div>
      <h3>ingredients</h3>
        {ingredients?.map((ingredient)=>(
          <p>{ingredient}</p>
        ))}
    </div>

      <h3>Nutritional Values</h3>
      <div className="nutritional__values">
        <Nutritional 
        quantity={kcal}
        nutrients="Calories"
        value="Kcal"
        />
        <Nutritional 
        quantity={protein}
        nutrients="Protein"
        value="g"
        />
        <Nutritional 
        quantity={fat}
        nutrients="Fat"
        value="g"
        />
        <Nutritional 
        quantity={carbs}
        nutrients="Carbs"
        value="g"
        />
      </div>

    </div>
  )
}
