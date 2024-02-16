import React, { useState } from 'react'
import Input from '../form/Input';
import MultiRangeInput from '../form/MultiRange';

// [
//   {
//     id: 640338,
//     title: "Cracked Wheat Salad with Dates & Tahini Yogurt",
//     image: "https://spoonacular.com/recipeImages/640338-312x231.jpg",
//     imageType: "jpg",
//     calories: 890,
//     protein: "32g",
//     fat: "48g",
//     carbs: "80g",
//     iron: "10mg",
//     sugar: "18g",
//   },
//   {
//     id: 649850,
//     title: "Lemon-Pepper Fettucine Alfredo",
//     image: "https://spoonacular.com/recipeImages/649850-312x231.jpg",
//     imageType: "jpg",
//     calories: 797,
//     protein: "23g",
//     fat: "55g",
//     carbs: "48g",
//     iron: "11mg",
//     sugar: "4g",
//   },
//   {
//     id: 795514,
//     title: "Spaghetti Squash & Tomato Basil Meat Sauce",
//     image: "https://spoonacular.com/recipeImages/795514-312x231.jpg",
//     imageType: "jpg",
//     calories: 669,
//     protein: "56g",
//     fat: "29g",
//     carbs: "41g",
//     iron: "10mg",
//     sugar: "23g",
//   },
// ];

interface SearchByNutrientsProps {
  // onSearch: (query: string, number: number) => void;
}

const SearchByNutrients: React.FC<SearchByNutrientsProps> = () => {
  const [formData, setFormData] = useState({
    query: "",
    number: 0,
  });

  const inputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSearch(formData.query, formData.number);
  };

  return (
    <div>
      <form
        className="bg-white opacity-85 p-5 w-50 rounded-md"
        onSubmit={formHandler}
      >
        <div className="mb-4">
          <MultiRangeInput/>
        </div>


        <div className="mb-4">
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="query"
            placeholder="Recipe Name Ex: pasta"
            onChange={inputHandler}
            type="text"
            value={formData.query}
          />
        </div>
        <div className="mb-6">
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="number"
            placeholder="Enter number"
            onChange={inputHandler}
            type="number"
            value={formData.number}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchByNutrients;