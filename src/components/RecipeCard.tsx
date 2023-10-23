import { useState, useEffect } from "react";
import LazyImage from "./LazyImage";

import { RecipeProps } from "../types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routing/routes";

const labelTypeStyle =
  "text-[12px] capitalize bg-gray-900 shadow-xl rounded-full py-2 px-3";

function RecipeCard({ recipe }: RecipeProps) {
  const navigate = useNavigate();
  const [recipeId, setRecipeId] = useState("");

  const { uri, image, label, cuisineType, mealType } = recipe;

  useEffect(() => {
    try {
      if (uri) {
        const id = uri.split("#")[1];
        setRecipeId(id);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, [uri]);

  const recipeImage = image || "";
  const recipeLabel = label || "";
  const recipeCuisineType = cuisineType[0] || [];
  const recipeMealType = mealType[0] || [];

  return (
    <div
      className="h-[350px] border-2 border-gray-400 rounded-xl flex flex-col overflow-hidden cursor-pointer"
      onClick={() => navigate(ROUTES.recipe(recipeId))}
    >
      <div className="flex-1 w-full max-h-[200px] overflow-hidden">
        {image && <LazyImage src={recipeImage} alt="" />}
      </div>
      <div className="flex flex-col justify-between bg-gradient-to-bottom from-transparent to-slate-900 p-4">
        <p className="font-semibold">{recipeLabel}</p>
        <div className="flex flex-wrap gap-4 text-primary pt-2">
          <span className={labelTypeStyle}>{recipeCuisineType}</span>
          <span className={labelTypeStyle}>{recipeMealType}</span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
