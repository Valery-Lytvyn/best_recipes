import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import {
  ErrorPage,
  FavoritesPage,
  HomePage,
  Layout,
  RecipePage,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: ROUTES.index,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.recipe(null),
        element: <RecipePage />,
      },
      {
        path: ROUTES.favorites,
        element: <FavoritesPage />,
      },
    ],
  },
]);
