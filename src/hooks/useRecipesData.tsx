import { useEffect, useState } from "react";
import { RecipeProps, RequestParams } from "../types";
import { fetchRecipes } from "../fetching/fetchRecipes";

function useRecipesData(requestParams: RequestParams) {
  const [recipesData, setRecipesData] = useState<RecipeProps[]>(
    [] as RecipeProps[]
  );

  useEffect(() => {
    getRecipesData(requestParams);
  }, [requestParams]);

  const getRecipesData = async (requestParams: RequestParams) => {
    try {
      const data = await fetchRecipes(requestParams);
      setRecipesData(data);
    } catch (err) {
      console.log(err);
    }
  };
  return { recipesData };
}

export default useRecipesData;
