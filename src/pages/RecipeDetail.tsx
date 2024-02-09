import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface RecipeDetailProps {
  id: number;
  image: string;
  summary: string;
}

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState<RecipeDetailProps>({
    id: 0,
    image: "",
    summary: "",
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=d4bcf2900d3a418fa6c99754d1827835`
      )
      .then((res) => {
        if (res.data) {
          setRecipe({
            ...res.data,
            summary: res.data.summary.replace(/<[^>]+>/g, ""),
          });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {recipe.id ? (
        <div className="flex items-center justify-center">
          <div className="w-1/2 pr-8">
            <img
              className="w-full rounded-lg"
              src={recipe.image}
              alt="Detail"
            />
          </div>
          <div className="w-1/2 pl-8">
            <p className="text-gray-700 text-lg">{recipe.summary}</p>
          </div>
        </div>
      ) : (
        <h1 className="text-center">Recipe Not Found</h1>
      )}
    </>
  );
};

export default RecipeDetail;
