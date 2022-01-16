import { IWeather } from "../../interfaces/weather-interface";
import "./Card.css";

const CardWeather = (props: { data: IWeather }) => {
  const { data } = props;

  return (
    <div>
      <div className="weather">
        <h2 className="city">{data.name}</h2>
        <div className="date"></div>
      </div>
      <img src={`http://openweathermap.org/img/w/${data.icon}.png`} alt={data.weather.description} />

      <h2 className="city-name">
        <span>{data.name}</span>
      </h2>
      <div className="city-temp">
        <h3>
          {Math.round(data.main.temp!)}
          <sup>&deg;C</sup>
        </h3>
        <div>
          felt real: {data.main.feels_like}
          <sup>&deg;C</sup>
        </div>
        <div className="desc">{data.weather.description}</div>
      </div>
    </div>
  );
};

export default CardWeather;
