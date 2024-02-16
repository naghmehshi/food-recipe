import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RecipeDetail from "../pages/RecipeDetail";
import Search from "../pages/Search";

const RouteMap = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/search" element={<Search/>} />
    </Routes>
  );
};

export default RouteMap;
