import React, { useState, useEffect } from "react";
import RecipesList from "../components/recipes/RecipesList";
import HeroHomePage from "../components/HeroHomePage";
import RecipesType from "../types/RecipesType";
import MainLayout from "../components/layout/MainLayout";
import { searchByNameService } from "../services/search";
import { recipesRandomService } from "../services";
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState<RecipesType[] | null>(
    null
  );
  const [title, setTitle] = useState("Recipes Search Results:");

  useEffect(() => {
    // recipesRandomService()
    //   .then((data) => setRecipes(data.recipes))
    //   .catch((error) => console.error("Error fetching recipes:", error));
    
    const getRandomRecipes= async()=>{
       try {
        const data = await recipesRandomService();
        setRecipes(data.recipes);
       } catch (error) {
        console.error("Error fetching recipes:", error);
       }
    }
    getRandomRecipes()

    // const data = recipesRandomService();
    // setRecipes(res.data.recipes);
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
        const data = await searchByNameService(query, number);
        setSearchResults(data.results);
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
