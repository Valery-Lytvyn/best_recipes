import { useState } from "react";
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import Recipes from "../components/Recipes";
import Loader from "../components/Loader";
import useRecipesData from "../hooks/useRecipesData";
import { HOME_BANNER_SUBTITLE, HOME_BANNER_TITLE } from "../data/homePageData";
import { DEFAULT_LIMIT_NUMBER, DEFAULT_QUERY_VALUE } from "../constants";
import { RequestParams } from "../types";

function Home(): JSX.Element {
  const [searchInput, setSearchInput] = useState("");
  const [requestParams, setRequestParams] = useState<RequestParams>({
    query: DEFAULT_QUERY_VALUE,
    limit: DEFAULT_LIMIT_NUMBER,
  });

  const { recipesData } = useRecipesData(requestParams);

  const handleInputChange = (value: string) => {
    setSearchInput(value);
  };

  const handleSearchButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRequestParams({ ...requestParams, query: searchInput });
  };

  const showMoreHandler = () => {
    setRequestParams((prev) => ({ ...requestParams, limit: prev.limit + 10 }));
  };

  return (
    <>
      <Banner title={HOME_BANNER_TITLE} subtitle={HOME_BANNER_SUBTITLE} />
      <SearchBar
        searchInput={searchInput}
        handleInputChange={handleInputChange}
        handleSearchButtonClick={handleSearchButtonClick}
      />
      {recipesData && recipesData.length ? (
        <>
          <Recipes recipesData={recipesData} />
          <button
            type="button"
            className="bg-primary px-6 py-2 rounded-full my-4 hover:border-2 hover:border-primary hover:bg-transparent"
            onClick={showMoreHandler}
          >
            Show more
          </button>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
