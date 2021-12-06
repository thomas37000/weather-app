import { IWeather } from "../../interfaces/weather-interface";
import "./Card.css";

const CardWeather = (props: { city: IWeather }) => {
  const { city } = props;

  return (
    <div>
      <div className="weather">
        <h2 className="city">{city.name}</h2>
      </div>
    </div>
  );
};

export default CardWeather;
