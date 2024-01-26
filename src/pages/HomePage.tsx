import React from "react";
import MainLayout from "../components/layout/MainLayout";
import RecipesList from "../components/recipes/RecipesList";

const HomePage = () => {
  return (
    <MainLayout>
      <div>
        <RecipesList />
      </div>
    </MainLayout>
  );
};

export default HomePage;
