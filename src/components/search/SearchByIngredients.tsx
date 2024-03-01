import React, { useState } from "react";
import Input from "../form/Input";

interface SearchByIngredientsProps {
  onSearch: (ingredients: string[], number: number) => void;
}

const SearchByIngredients: React.FC<SearchByIngredientsProps> = ({
  onSearch,
}) => {
  const [ingredientForm, setIngredientForm] = useState({
    ingredients: [""],
    number: 0,
  });

  const ingredientHandler = (value: string, index: number) => {
    const newIngredients = [...ingredientForm.ingredients];
    newIngredients[index] = value;
    setIngredientForm({
      ...ingredientForm,
      ingredients: newIngredients,
    });
  };

  const addIngredientField = () => {
    setIngredientForm({
      ...ingredientForm,
      ingredients: [...ingredientForm.ingredients, ""],
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ingredients = ingredientForm.ingredients.filter(
      (ing) => ing.trim() !== ""
    );
    if (ingredientForm.number) {
      onSearch(ingredients, ingredientForm.number);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="bg-white opacity-85 p-5 w-50 rounded-md"
        onSubmit={handleSubmit}
      >
        {ingredientForm.ingredients.map((ingredient, index) => (
          <div className="mb-4" key={index}>
            <Input
              className="shadow-md border-solid border border-black rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name={`ingredient${index + 1}`}
              placeholder={`Search by ingredient ${index + 1}`}
              onChange={(name, value) => ingredientHandler(value, index)}
              type="text"
              value={ingredient}
            />
          </div>
        ))}
        <div className="mb-6">
          <Input
            className="shadow-md border-solid border border-black rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="number"
            placeholder="Enter number"
            onChange={(name, value) =>
              setIngredientForm({
                ...ingredientForm,
                [name]: value,
              })
            }
            type="number"
            value={ingredientForm.number}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={addIngredientField}
          >
            Add Ingredient
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchByIngredients;
