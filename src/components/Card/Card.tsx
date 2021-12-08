
import { Data } from "../../interfaces/weather-interface";
import "./Card.css";

const CardWeather = (props: { city: Data }) => {
  const { city } = props;

  return (
    <div>
      <div className="weather">
        <h2 className="city">{city.name}</h2>
        <div className="date"></div>
      </div>
    </div>
  );
};

export default CardWeather;