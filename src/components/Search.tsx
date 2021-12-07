import React, { useState, useEffect } from "react";
import { Data } from "../interfaces/weather-interface";
import CardWeather from "./Card/Card";
import "./Search.css";
import Calendar from "./Calendar";
import axios, { AxiosResponse } from "axios";

const Search = () => {
  const [cities, setCities] = useState<string>("");
  console.log("villes", cities);

  const [weather, setWeather] = useState<Data[]>([]);
  console.log("temps", weather);

  const Api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get<Data[]>(
        `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=98b7465353d383f3d0f3bc4a284a48ae`
      )
      .then((response: AxiosResponse) => {
        console.log("axios", response.data.city);
        setWeather(response.data);
      });
  }, []);


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
        />
      </div>
      <div>{cities}</div>

      <div>
        <Calendar />
      </div>
      {/* <div>{fetchApi}</div> */}
    </>
  );
};

export default Search;
