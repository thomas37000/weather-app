import React, { useState, useEffect } from "react";
import { IWeather } from "../interfaces/weather-interface";
import "./Search.css";
import { fetchWeather } from "../api/api";
import axios from "axios";
import { ICities } from "../interfaces/json-interface";

const Search: React.FC<IWeather> = () => {
  const [cities, setCities] = useState<string>("");
  const [weather, setWeather] = useState<IWeather>();
  const [cold] = useState<string>("It's cold");
  const [warm] = useState<string>("It's warm");
  const [warmCities, setWarmCities] = useState<ICities[]>([]);

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

  useEffect(() => {
    const loadJsonWarmList = async () => {
      setTimeout(async () => {
        const res = await axios.get(
          "https://raw.githubusercontent.com/thomas37000/openweathermap/main/src/components/WarmList.json"
        );
        setWarmCities(res.data);
      }, 500);
    };
    loadJsonWarmList();
  }, []);

  const fetchJsonWarmList =
    warmCities &&
    warmCities.map((list, i) => {
      return (
        <>
          <div className="warm-list">
            <div key={list.id}>
              {list.city} - {list.country}
            </div>
          </div>
        </>
      );
    });

  const regexCity = weather && weather.name.replace("Arrondissement de", "");

  return (
    <>
      <h3>Tapez le nom d'une ville pour avoir sa température</h3>
      <div className="search">
        <input
          type="text"
          name="search"
          id="searchBar"
          className="search-bar"
          placeholder="Rechercher une ville ..."
          onChange={searchCities}
          onKeyPress={search}
        />
      </div>
      <div className="card-container" key={weather && weather.id}>
        {weather && weather.main && (
          <>
            <div className={weather.main.temp! < 15 ? "cold-bg" : "warm-bg"}>
              <h2 className="city-name">
                <span>{regexCity}</span>
              </h2>
              <div className="city-temp">
                <h3>
                  {Math.round(weather.main.temp!)}
                  <sup>&deg;C</sup>
                </h3>
                <div>
                  felt real: {weather.main.feels_like}
                  <sup>&deg;C</sup>
                </div>
                <div className="desc">{weather.weather.description}</div>
              </div>
              <div className="temp">
                {weather.main.temp! < 15 ? cold : warm}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="vacation">
        Do you want to go in vacanation in a warm City in Winter, here some
        examples where the temperature is superior at 15°
        <div className="warm-cities">{fetchJsonWarmList}</div>
      </div>
    </>
  );
};

export default Search;
