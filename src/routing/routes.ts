export const ROUTES = {
  index: "/",
  recipe: (id: string | null) => (id ? `/recipe/${id}` : "/recipe/:id"),
  favorites: "/favorites",
};
