import React from "react";
import MainLayout from "../components/layout/MainLayout";
import RecipesList from "../components/recipes/RecipesList";
import HeroHomePage from "../components/HeroHomePage";

const HomePage = () => {
  return (
    <MainLayout>
      <div>
        <HeroHomePage/>
        <RecipesList />
      </div>
    </MainLayout>
  );
};

export default HomePage;
