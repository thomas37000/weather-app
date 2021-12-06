import React, { useState, useEffect } from "react";
import { IWeather } from "../interfaces/weather-interface";
import { ApiUrl } from "../api/api";
import CardWeather from "./Card/Card";
import "./Search.css";

const Search = () => {
  const [cities, setCities] = useState<IWeather | string>("");
  const [weather, setWeather] = useState({});

  const Api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(
      `${ApiUrl}weather?q=${cities}&units=metric&APPID=98b7465353d383f3d0f3bc4a284a48ae`
    )
      .then((res) => res.json())
      .then((data) => {
        setCities("");
        setWeather(data);
        console.log("météo", data);
      });
  }, []);

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
