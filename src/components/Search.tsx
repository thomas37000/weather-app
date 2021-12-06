import React, { useState } from "react";
import { IWeather } from "../interfaces/weather-interface";
import "./Search.css";

const Search = (props: { city: IWeather }) => {
  const { city } = props;
  
  const [cities, setCities] = useState("");

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
            onChange={(e) => setCities(e.target.value)}
          />

          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </>
  );
};

export default Search;
