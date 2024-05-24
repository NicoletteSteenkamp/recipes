// RecipesList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RecipesList.css'; 

const RecipesList = ({ recipes }) => {
  return (
    <div className="recipes-grid"> 
      <h1>Recipes List</h1>
      <div className="recipes-container"> 
        {recipes.map(recipe => (
          <div className="recipe-item" key={recipe.id}> 
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>Read More</Link>
          </div>
        ))}
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default RecipesList;

