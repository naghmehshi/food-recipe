import React, { useState, useEffect } from "react";
import RecipesList from "../components/recipes/RecipesList";
import HeroHomePage from "../components/HeroHomePage";
import axios from "axios";
import RecipesType from "../types/RecipesType";
import MainLayout from "../components/layout/MainLayout";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState<RecipesType[] | null>(
    null
  );
  const [title, setTitle] = useState("Recipes Search Results:");

  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?number=9&apiKey=d4bcf2900d3a418fa6c99754d1827835"
      )
      .then((res) => setRecipes(res.data.recipes))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  useEffect(() => {
    if (recipes.length === 0) {
      setTitle("No recipes found");
    } else {
      setTitle("Recipes Search Results:");
    }
  }, [recipes]);

  const searchHandler = async (query: string, number: number) => {
    try {
      if (query) {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${number}&apiKey=d4bcf2900d3a418fa6c99754d1827835`
        );
        const data = res.data.results;
        setSearchResults(data);
        setTitle(`Recipes Search Results for ${number} ${query}:`);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <MainLayout>
      <HeroHomePage onSearch={searchHandler} />
      {searchResults !== null ? (
        <RecipesList title={title} recipes={searchResults} />
      ) : (
        <RecipesList title={title} recipes={recipes} />
      )}
    </MainLayout>
  );
};

export default HomePage;
