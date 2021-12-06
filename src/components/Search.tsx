import React from "react";
import "./Search.css";

function Search() {

  const { Api_key } = process.env;

  return (
    <>
      <div className="search">
        <input
          type="text"
          name="search"
          id="searchBar"
          className="search-bar"
          placeholder="Lyon"
        />
      </div>
    </>
  );
}

export default Search;
