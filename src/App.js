import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Recipes from './components/Recipes';
import About from './components/About';
import RecipeDetails from './components/RecipeDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [keptRecipes, setKeptRecipes] = useState([])

  const addKeptRecipe = (recipe) => {
    setKeptRecipes((prevKept) => [...prevKept, recipe])
  }

  const removeKeptRecipe = (idMeal) => {
    setKeptRecipes((prevKept) => prevKept.filter((recipe) => recipe.idMeal !== idMeal))
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes
            keptRecipes={keptRecipes}
            addKeptRecipe={addKeptRecipe}
            removeKeptRecipe={removeKeptRecipe} />} />
          <Route path="/recipes/:id" element={<RecipeDetails
            addKeptRecipe={addKeptRecipe}
            removeKeptRecipe={removeKeptRecipe} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
