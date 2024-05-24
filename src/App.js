import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesList from './RecipesList';
import RecipeDetail from './RecipeDetail';
import Home from './Home';
import recipes from './recipesData'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/recipes" element={<RecipesList recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
      </Routes>
    </Router>
  );
}

export default App;
