import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage.tsx"));
const FavoritesPage = lazy(() => import("./FavoritesPage.tsx"));
const RecipePage = lazy(() => import("./RecipePage.tsx"));
const ErrorPage = lazy(() => import("./ErrorPage.tsx"));
const Layout = lazy(() => import("./Layout.tsx"));

export { HomePage, FavoritesPage, RecipePage, ErrorPage, Layout };
