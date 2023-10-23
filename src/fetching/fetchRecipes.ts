export const fetchRecipes = async (params: {
  query: string;
  limit: number;
}) => {
  const { query, limit } = params;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${
    import.meta.env.VITE_APP_EDAMAM_ID
  }&app_key=${import.meta.env.VITE_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data?.hits;
  } catch (error) {
    console.log(error);
  }
};
