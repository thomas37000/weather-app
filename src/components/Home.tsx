import React, { useState } from "react";
import { IWeather } from "../interfaces/weather-interface";
import "./Search.css";
import { fetchWeather } from "../api/api";
import Rain from "../icons/Rain";
import Sun from "../icons/Sun";

const Home: React.FC<IWeather> = () => {
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
              <div> {weather && weather.rain && <Rain />}</div>
              <div> {weather && weather.sys && <Sun />}</div>
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
    </>
  );
};

export default Home;
