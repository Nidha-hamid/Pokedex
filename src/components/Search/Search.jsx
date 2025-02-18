import useDebounce from "../../hooks/useDebounce";
import "./Search.css";

function Search({ updateSearchTerm }) {
  const debounceUpdateSearchTerm = useDebounce((e) => updateSearchTerm(e.target.value))
  return (
    <div className="searchWrapper">
      <input
        className="searchInput"
        type="text"
        placeholder="Which Pokémon are you looking for..."
        onChange={debounceUpdateSearchTerm}
      />
    </div>
  );
}

export default Search;
