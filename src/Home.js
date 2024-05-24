import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
   
    document.body.classList.add('home-page');

    
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []); 

  return (
    <div>
      <h1>Welcome to My Recipes App</h1>
      <p>Please click the link below to see my recipes:</p>
      
      <Link to="/recipes">View Recipes</Link>

      <footer>This app is coded by Nicolette Steenkamp</footer>
    </div>
  );
}

export default Home;
