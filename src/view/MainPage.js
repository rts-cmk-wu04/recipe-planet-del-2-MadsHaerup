import React, { useState } from 'react';
import Navbar from '../components/nav/Navbar';
import RecipeList from '../components/RecipeList.js/RecipeList';
import RecipeContainer from '../components/recipeView/RecipeContainer';
import './MainPage.scss';

export default function MainPage() {

  const queryString = window.location.pathname.split('/');
  
  const [params, setParams] = useState(queryString[1]);

  
  return (
    <div className="mainPage">
      <h1>Recipe Planet</h1>
      <Navbar/>
      <RecipeContainer params={params} onClick={e => setParams(e.target)}/>
      <RecipeList/>
    </div>
  )
}
