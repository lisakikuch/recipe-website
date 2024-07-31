// Displays detailed information about a single recipe.

import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

// Fetches detailed information about a recipe based on the id parameter from the URL.
// Manages loading state to show a loading indicator while fetching data. 
function RecipeDetails() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [recipe, setRecipe] = useState(null)

    const fetchRecipes = async () => {
        setIsLoading(true)
        const url = apiUrl + id
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setRecipe(data.meals[0])
        setIsLoading(false)
    }

    useEffect(() => {
        fetchRecipes()
    }, [id])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!recipe) {
        return <div>No recipe found.</div>
    }

    // Displays the recipe's name, image, ingredients, and instructions.
    return (
        <div>
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2>Ingredients</h2>
            <h2>Instructions</h2>
            <p>{recipe.strInstructions}</p>
        </div>
    )
}

export default RecipeDetails;