export interface RouteError {
  status?: number;
  statusText?: string;
  message?: string;
}

export interface BannerProps {
  image?: string;
  title: JSX.Element | string;
  subtitle?: string;
}

export interface MenuNavListProps {
  clickHandler: () => void;
}

export interface SearchBarProps {
  searchInput: string;
  handleInputChange: (arg: string) => void;
  handleSearchButtonClick: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface RequestParams {
  query: string;
  limit: number;
}

export interface Recipe {
  uri: string;
  image: string;
  label: string;
  cuisineType: string[];
  mealType: string[];
  calories: number;
  totalTime: number;
  yield: number;
  ingredientLines: string[];
  healthLabels: string[];
}

export interface RecipesProps {
  recipesData: RecipeProps[];
}

export interface RecipeProps {
  recipe: Recipe;
}
export interface InfoTileProps {
  value: number;
  title: string;
}

export interface IngredientListProps {
  ingredientLines: string[];
}

export interface HealthLabelsListProps {
  healthLabels: string[];
}

export interface LazyImageProps {
  src: string;
  alt: string;
}
