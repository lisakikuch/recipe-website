import React from 'react';

function SearchBar({ value, isLoading, handleSubmit, onChange }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={value}
                    disabled={isLoading}
                    onChange={onChange}
                    placeholder="Search Recipes"
                    className="form"
                />
                <input
                    disabled={isLoading || !value}
                    type="submit"
                    className="button"
                    value="Search" />
            </form>
        </div>
    )
}

export default SearchBar;