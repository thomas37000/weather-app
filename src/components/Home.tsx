import React, { useState } from "react";
import { IWeather } from "../interfaces/weather-interface";
import "weather-icons/css/weather-icons.css";
import "./Search.css";
import { fetchWeather } from "../api/api";

const Home: React.FC<IWeather> = () => {
  const [cities, setCities] = useState<string>("");
  const [weather, setWeather] = useState<IWeather>();
  const [cold] = useState<string>("It's cold");
  const [warm] = useState<string>("It's warm");
  const [description, setDescription] = useState<string>("");
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
      console.log("desc",res.weather[0].description);
      
    }
  };

  function get_WeatherIcon(icons: any, rangeId: number) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        setIcon({ icon: icons.Thunderstorm });
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
        break;
      case rangeId >= 701 && rangeId <= 781:
        setIcon({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        setIcon({ icon: icons.Clear });
        console.log("clear");
        break;
      case rangeId >= 801 && rangeId <= 804:
        setIcon(icons.Clouds);
        console.log("icon Clouds", icons.Clouds);
        console.log("nuageux");
        break;
      default:
        setIcon({ icon: icons.Clouds });
        console.log("case by default clouds");
    }
  }

  const searchCities = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCities(e.target.value);
  };

  const regexCity = weather && weather.name.replace("Arrondissement de", "");
  const desc= weather && weather.weather.description;
  console.log(desc);
  
  // icons from https://openweathermap.org/weather-conditions
  const iconWeather = `http://openweathermap.org/img/w/${icon}.png`;

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
      </div>
    </>
  );
};

export default Home;
