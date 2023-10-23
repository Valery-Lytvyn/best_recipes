export const fetchSingleRecipe = async (id: string) => {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${
    import.meta.env.VITE_APP_EDAMAM_ID
  }&app_key=${import.meta.env.VITE_APP_EDAMAM_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0]);
    return data;
  } catch (error) {
    console.log(error);
  }
};
