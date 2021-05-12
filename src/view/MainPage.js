import React from 'react';
import Navbar from '../components/nav/Navbar';
import RecipeList from '../components/RecipeList.js/RecipeList';
import RecipeContainer from '../components/recipeView/RecipeContainer';
import './MainPage.scss';
export default function MainPage() {
  return (
    <div className="mainPage">
      <h1>Recipe Planet</h1>
      <Navbar/>
      <RecipeContainer/>
      <RecipeList/>
    </div>
  )
}
