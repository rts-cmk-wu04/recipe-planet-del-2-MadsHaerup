import './RecipeContainer.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeView from './RecipeView';

export default function RecipeContainer() {
const [items, setItems] = useState([]);
const [getvalue, setGetValue] = useState('');

const handleChange = (event) =>{
setGetValue(event.target)
}

useEffect(() => {
  axios.get(`http://localhost:1337/recipes?_where[categories.name]=${handleChange(getvalue)}`)
  .then((response)=>{
    console.log('RecipeContainer', response.data)
    setItems(response.data)
  })
}, [setItems])

  return (
    <div className="recipeContainer">

      {items.map((item)=>(
        <RecipeView 
        key={item.id}
        title={item.title}
        description = {item.description}
        ingredients = {item.ingredients}
        fat={item.fat}
        carbs={item.carbs}
        protein = {item.protein}
        kcal = {item.kcal}
        // img={"http://localhost:1337"+item.images[0].url}
        
        />
      ))}
    </div>
  )
}
