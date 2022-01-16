import React, { useState } from "react";
import { IWeather } from "../interfaces/weather-interface";
import "weather-icons/css/weather-icons.css";
import { fetchWeather } from "../api/api";
import SearchIcon from "../icons/Search";
import "./Search.css";

const Home: React.FC<IWeather> = () => {
  const [cities, setCities] = useState<string>("");
  const [weather, setWeather] = useState<IWeather>();
  const [cold] = useState<string>("It's cold");
  const [warm] = useState<string>("It's warm");
  const [icon, setIcon] = useState<any | undefined>();
  const [weatherIcon] = useState({
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
  });

  const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const res = await fetchWeather(cities);
      setWeather(res);
      setCities("");
      console.log("api", res);
      get_WeatherIcon(weatherIcon, res.weather[0].id);
      console.log("id icon", res.weather[0].id);
      console.log("desc", res.weather[0].description);
    }
  };

  function get_WeatherIcon(icons: any, rangeId: number) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        setIcon({ icon: weatherIcon.Thunderstorm });

        break;
      case rangeId >= 300 && rangeId <= 321:
        setIcon({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        setIcon({ icon: icons.Rain });
        console.log("pluie");
        break;
      case rangeId >= 600 && rangeId <= 622:
        setIcon({ icon: icons.Snow });
        console.log("neige");
        console.log("icon Clouds", weatherIcon.Clouds);
        console.log("nuageux");
        console.log("clear");
        console.log("icon Clear", weatherIcon.Clear);
        break;
      case rangeId >= 801 && rangeId <= 804:
        setIcon({ weatherIcon: icons.Clouds });

        console.log("icon Clouds", weatherIcon, icons.Clouds);
        console.log("nuageux");
        break;
      default:
        setIcon({ weatherIcon: icons.Clouds });
        console.log("case by default clouds");
    }
  }

  const searchCities = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCities(e.target.value);
  };

  const regexCity = weather && weather.name.replace("Arrondissement de", "");

  // icons from https://openweathermap.org/weather-conditions
  const iconWeather = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <>
      <h3 className="instruction">
        Tapez le nom d'une ville pour avoir sa température
      </h3>
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
        <label
          htmlFor="searchBar
        "
          className="searchIcon"
        >
          <SearchIcon />
        </label>
      </div>

      <div>
        <p></p>
      </div>
      <div className="card-container" key={weather && weather.id}>
        {weather && weather.main && (
          <>
            <div>
              <img src={iconWeather} alt={weather.weather.description} />
              <i className={`wi ${weatherIcon}`} />

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

        {/* /* This condition will always return 'false' since the types have no overlap. */}
        {/* {weather && weather.cod ? <p>Ville inconnue !</p> : <></>} */}
      </div>
    </>
  );
};

export default Home;
