import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";

interface RecipesType {
  image: string;
  title: string;
  summary: string;
  id: number;
  pricePerServing: number;
}

const RecipesList = () => {
  // https://api.spoonacular.com/recipes/complexSearch?sort=time&apiKey=d4bcf2900d3a418fa6c99754d1827835
  //https://api.spoonacular.com/recipes/random?number=5&apiKey=d4bcf2900d3a418fa6c99754d1827835
  const [recipes, setRecipes] = useState <RecipesType[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?number=5&apiKey=d4bcf2900d3a418fa6c99754d1827835"
      )
      .then((res) => setRecipes(res.data.recipes));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {recipes.map((item) => (
        <RecipeCard
          image={item.image}
          title={item.title}
          summary={item.summary}
          pricePerServing={item.pricePerServing}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default RecipesList;
