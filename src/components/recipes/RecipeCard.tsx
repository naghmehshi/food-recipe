import React from "react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  image: string;
  title: string;
  summary: string;
  id: number;
  pricePerServing: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  title,
  summary,
  id,
  pricePerServing,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-4 mb-4">
      <Link to={`/recipe/${id}`}>
        <img className="w-full" src={image} alt={title} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          {/* <p className="text-gray-700 text-base">{summary}</p> */}
        </div>
      </Link>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ${pricePerServing}
        </span>
      </div>
    </div>
  );
};

export default RecipeCard;
