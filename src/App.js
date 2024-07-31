import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Recipes from './components/Recipes';
import About from './components/About';
import RecipeDetails from './components/RecipeDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <p>test 2</p>
        <p>hello </p>

      </div>
    </BrowserRouter>
  );
}

export default App;
