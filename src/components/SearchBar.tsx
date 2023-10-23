import { SearchBarProps } from "../types";
import LazyImage from "./LazyImage";
import searchIcon from "../assets/icons/icons8-search-32.png";
import useHover from "../hooks/useHover";

function SearchBar({
  searchInput,
  handleInputChange,
  handleSearchButtonClick,
}: SearchBarProps) {
  const { isHover, handleMouseEnter, handleMouseLeave } = useHover();

  const buttonStyle = {
    filter: isHover
      ? "invert(51%) sepia(42%) saturate(7086%) hue-rotate(9deg) brightness(99%) contrast(97%)"
      : "none",
  };

  return (
    <form
      onSubmit={(e) => handleSearchButtonClick(e)}
      className="flex items-center gap-1 border-2  border-gray-400 rounded-full px-4 py-2 m-4 
      w-[95%] sm:w-[60%] lg:w-[40%] 
      "
    >
      <input
        className="flex-1 bg-transparent outline-none text-lg"
        type="text"
        value={searchInput}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Type product names"
      />
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type="submit"
        aria-label="Search button"
        style={buttonStyle}
      >
        <LazyImage src={searchIcon} alt="Search icon" />
      </button>
    </form>
  );
}

export default SearchBar;
