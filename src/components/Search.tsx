import React, { useState } from "react";
import { IWeather } from "../interfaces/weather-interface";
import "./Search.css";
import { fetchWeather } from "../api/api";

const Search: React.FC<IWeather> = () => {
  const [cities, setCities] = useState<string>("");
  const [weather, setWeather] = useState<IWeather>();
  const [cold] = useState<string>("It's cold");
  const [warm] = useState<string>("It's warm");


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

      {weather && weather.main && (
        <>
          <div className={weather.main.temp! < 15 ? "cold-bg" : "warm-bg"}>
            <h2 className="city-name">
              <span>{weather.name}</span>
            </h2>
            <div className="city-temp">
              <h3>
                {Math.round(weather.main.temp!)}
                <sup>&deg;C</sup>
              </h3>
            </div>
            <div className="temp">{weather.main.temp! < 15 ? cold : warm}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Search;