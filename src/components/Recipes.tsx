import { RecipesProps } from "../types";
import RecipeCard from "./RecipeCard";

function Recipes({ recipesData }: RecipesProps): JSX.Element {
  return (
    <div className="w-[95%] md:w-[70%] my-10">
      {recipesData && (
        <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
          {recipesData &&
            recipesData.length > 0 &&
            recipesData.map((item) => (
              <div key={item.recipe.uri}>
                <RecipeCard recipe={item.recipe} />
              </div>
            ))}
        </section>
      )}
    </div>
  );
}

export default Recipes;
