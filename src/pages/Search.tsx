import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import SearchByNutrients from "../components/search/SearchByNutrients";
import SearchByIngredients from "../components/search/SearchByIngredients";
import axios from "axios";
import RecipesList from "../components/recipes/RecipesList";
import RecipesType from "../types/RecipesType";

const Search = () => {
  const [searchResults, setSearchResults] = useState<RecipesType[] | null>(
    null
  );

  const searchHandler = async (ingredients: string, number: number) => {
    try {
      if (ingredients) {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${number}&apiKey=d4bcf2900d3a418fa6c99754d1827835`
        );
        const data = res.data;
        console.log(data);
        setSearchResults(data);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return (
    <MainLayout>
      <SearchByIngredients onSearch={searchHandler} />
      {searchResults && (
        <RecipesList title="Search By Ingredient" recipes={searchResults} />
      )}
    </MainLayout>
  );
};

export default Search;
