import React from "react";
import "./Search.css";

function Search() {
  const { Api_key } = process.env;

  return (
    <>
      <div className="search">
        <form>
          <input
            type="text"
            name="search"
            id="searchBar"
            className="search-bar"
            placeholder="Lyon"
          />

          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </>
  );
}

export default Search;
