import React, { useState } from "react";
import { Data } from "../interfaces/weather-interface";
import "./Search.css";
import Calendar from "./Calendar";
import { fetchWeather } from "../api/api";

const Search = () => {
  const [cities, setCities] = useState<string>("");
  console.log("villes", cities);

  const [weather, setWeather] = useState<Data[]>([]);
  console.log("temps", weather);

  const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const res = await fetchWeather(cities);
      setWeather(res);
      setCities("");
      console.log("api", res);
    }
  };

  const searchCities = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCities(e.target.value);
  };

  function makeDate(date: Date) {
    return new Date(date.getTime());
  }
  const newDate = new Date();
  console.log("date", makeDate(newDate));

  return (
    <>
      <div className="search">
        <input
          type="text"
          name="search"
          id="searchBar"
          className="search-bar"
          placeholder="Lyon"
          onChange={searchCities}
          onKeyPress={search}
        />
      </div>
    </>
  );
};

export default Search;
