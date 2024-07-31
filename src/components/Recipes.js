// Displaying a list of recipes and managing the search functionality

import React from 'react';
import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function Recipes() {
    // State Management: Manages the state for loading, search query, and recipes.
    const [isLoading, setIsLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])

    // Searching Recipes: Uses the searchRecipes function to fetch recipes from the API based on the search query.
    const searchRecipes = async () => {
        setIsLoading(true)
        const url = apiUrl + query
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setRecipes(data.meals || [])
        setIsLoading(false)
    }

    // Triggers an initial search when the component mounts.
    useEffect(() => {
        searchRecipes()
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        searchRecipes()
    }

    return (
        <div className='container'>
            <SearchBar
                handleSubmit={handleSubmit}
                value={query}
                onChange={event => setQuery(event.target.value)}
                isLoading={isLoading}
            />
            <h1>All Recipes</h1>
            <div className='recipes'>
                {recipes.length > 0 ? recipes.map(recipe => (
                    <RecipeCard
                        key={recipe.idMeal}
                        recipe={recipe}
                    />
                ))
                    : "No Recipes Found."}
            </div>
        </div>
    )
}

export default Recipes;