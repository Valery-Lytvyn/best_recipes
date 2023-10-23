import { IngredientListProps } from "../types";

function IngredientList({ ingredientLines }: IngredientListProps): JSX.Element {
  return (
    <section className="p-4 flex flex-col">
      <p className="text-primary text-2xl underline pb-4">Ingredients</p>
      <ul className="flex flex-col gap-2">
        {ingredientLines.map((ingredient) => (
          <li className="flex items-center gap-3 " key={ingredient}>
            <div className="min-w-1 min-h-1 h-1 w-1 bg-primary rounded-full"></div>
            <p className="text-xl">{ingredient}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default IngredientList;
