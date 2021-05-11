import React, { useEffect, useState } from 'react';
import RecipeItem from '../recipeItem/RecipeItem';

export default function RecipeList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/recipes')
    .then((response)=>{
      console.log(response.data);
      setItems(response.data);
    })
   }, [setItems])

  return (
    <div>
      {items.map((item) =>( 
        <RecipeItem
          title={item.title}
          cookTime={item.cook_time}
          image={item.images[0].url}
        />
       ))}
    </div>
  )
}
