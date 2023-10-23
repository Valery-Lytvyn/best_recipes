import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Recipe, RequestParams } from "../types";
import InfoTile from "../components/InfoTile";
import IngredientList from "../components/IngredientList";
import HealthLabelsList from "../components/HealthLabelsList";

import useRecipesData from "../hooks/useRecipesData";
import { DEFAULT_LIMIT_NUMBER } from "../constants";
import { useParams } from "react-router-dom";
import { fetchSingleRecipe } from "../fetching/fetchSingleRecipe";
import RecipeCard from "../components/RecipeCard";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>({} as Recipe);
  const [requestParams, setRequestParams] = useState<RequestParams>({
    query: "",
    limit: DEFAULT_LIMIT_NUMBER,
  });
  const { recipesData } = useRecipesData(requestParams);

  useEffect(() => {
    if (id) {
      getRecipeData(id);
    }
  }, [id]);

  const getRecipeData = async (id: string) => {
    const data = await fetchSingleRecipe(id);

    setRecipe(data[0]);
  };
  const {
    image,
    label,
    calories,
    totalTime,
    yield: portion,
    ingredientLines,
    healthLabels,
    cuisineType,
  } = recipe;

  useEffect(() => {
    if (cuisineType) {
      setRequestParams({ ...requestParams, query: cuisineType[0] });
    }
  }, [cuisineType]);

  console.log(recipesData);

  return (
    <>
      {recipe && Object.keys(recipe).length !== 0 && (
        <>
          <Banner image={image} title={label} />
          <div className="flex justify-center items-center gap-4 py-4">
            <InfoTile value={calories} title="calories" />
            <InfoTile value={totalTime} title="total time" />
            <InfoTile value={portion} title="portion" />
          </div>
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Left side */}
            <div className="flex-1 flex flex-col gap-4 px-4 border-r border-gray-500">
              <IngredientList ingredientLines={ingredientLines} />
              <HealthLabelsList healthLabels={healthLabels} />
            </div>
            {/* Right side */}
            {recipesData && recipesData.length > 0 && (
              <div className="flex-1 flex flex-col gap-4 px-4 ">
                <p className="text-white text-2xl">Also Try This</p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {recipesData.map((item) => (
                    <div key={item.recipe.uri}>
                      <RecipeCard recipe={item.recipe} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default RecipePage;
