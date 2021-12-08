import React, { useState } from "react";
import { IWeather } from "../interfaces/weather-interface";
import "./Search.css";
import { fetchWeather } from "../api/api";

const Search: React.FC<IWeather> = () => {
  const [cities, setCities] = useState<string>("");
  const [weather, setWeather] = useState<{}>({});

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

      {weather.main && (
        <>
          <div className="city">
            <h2 className="">
              <span>{weather.name}</span>
            </h2>
            <div className="city-temp">
              <h3>
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
              </h3>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Search;