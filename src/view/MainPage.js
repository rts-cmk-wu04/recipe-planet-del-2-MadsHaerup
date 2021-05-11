import React from 'react';
import Navbar from '../components/nav/Navbar';
import RecipeItem from '../components/recipeItem/RecipeItem';
import './MainPage.scss';
export default function MainPage() {
  return (
    <div className="mainPage">
      <h1>Recipe Planet</h1>
      <Navbar/>
      <RecipeItem/>
    </div>
  )
}
