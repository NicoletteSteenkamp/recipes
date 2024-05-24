// RecipeDetail.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './RecipeDetail.css'; 

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <div className="recipe-detail-container">Recipe not found</div>;
  }

  return (
    <div className="recipe-detail-container"> 
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Preparation Steps:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} />}
      <Link to="/recipes">Back to Recipes List</Link> 
    </div>
  );
}

export default RecipeDetail;
