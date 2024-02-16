import React, { useState } from "react";
import Input from "../form/Input";


interface SearchQueryProps {
  onSearch: (query: string, number: number) => void;
}

const SearchQuery: React.FC<SearchQueryProps> = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    query: "",
    number: 0,
  });

  const inputHandler = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(formData.query, formData.number);
  };

  

  return (
    <div>
      <form
        className="bg-white opacity-85 p-5 w-50 rounded-md"
        onSubmit={formHandler}
      >
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

export default SearchQuery;
