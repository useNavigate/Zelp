import { useEffect, useState } from "react";
import "./searchBar.css";


import { Link } from "react-router-dom";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {

  }, [searchTerm]);


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
        />




        <Link className="searchLink" to={`/search/${searchTerm}`}>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </Link>
      </div>

    </>
  );
};


export default SearchBar;
