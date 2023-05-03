import { useEffect, useState } from "react";
import "./searchBar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  useEffect(() => {}, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a search term.");
      return;
    }
   history.push(`/search/${searchTerm}`);
   setSearchTerm("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="searchbarWrapper">
        <input
          type="text"
          value={searchTerm}
          placeholder="pizza,coffee,ramen"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        {searchTerm ? (
          <Link
            className="searchLink"
            to={`/search/${searchTerm}`}
            disabled={searchTerm.trim() === ""}
          >
            <button onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
        ) : (
          <span className="searchLink">
            <button onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </span>
        )}
      </div>
    </>
  );
};

export default SearchBar;
