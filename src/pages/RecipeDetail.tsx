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
          setRecipe(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {recipe.id ? (
        <div className="flex">
          <div>
            <img className="w-full" src={recipe.image} alt="Detail" />
          </div>
          <div>
            <p className="text-gray-700 text-base">{recipe.summary}</p>
          </div>
        </div>
      ) : (
        <h1>Recipe Not Found</h1>
      )}
    </>
  );
};

export default RecipeDetail;
