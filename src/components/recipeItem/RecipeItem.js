import './RecipeItem.scss';
import React from 'react';

export default function RecipeItem({cookTime, image, title}) {

  return (
    <div className="recipeItem">
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{cookTime + " min cooktime"} </p>
    </div>
  )
}
