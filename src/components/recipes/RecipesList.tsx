import RecipeCard from "./RecipeCard";
import RecipesType from "../../types/RecipesType";
import React, { useState, useEffect } from "react";

interface RecipesListProps {
  recipes: RecipesType[];
  title: string;
}

const RecipesList: React.FC<RecipesListProps> = ({ recipes, title }) => {
  return (
    <div className="container">
      <h1 className="text-3xl my-8">{title}</h1>
      <div className="flex flex-wrap justify-center">
        {recipes.map((item) => (
          <RecipeCard
            key={item.id}
            image={item.image}
            title={item.title}
            summary={item.summary}
            pricePerServing={item.pricePerServing}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
