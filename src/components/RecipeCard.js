// Displays individual recipe details in a card format and links to the detailed view of the recipe.

import React from "react";
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
    const { idMeal, strMeal, strCategory, strMealThumb } = recipe

// Displays a recipe's image, name, and category.
// The Link navigates to the detailed view of the recipe when the card is clicked.
    return (
        <div className="card">
            <Link to={`/recipes/${idMeal}`}>
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h2>{strMeal}</h2>
            </div>
            </Link>
        </div>
    )
}

export default RecipeCard;