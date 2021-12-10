export interface IWeather {
  main: Main;
  weather: Weather;
  id:   number;
  name: string;
}

export interface Main {
  temp?: number;
  feels_like: number;
}

export interface Weather {
    description: string;
}

export interface Data {
  id: number;
  name?: string;
}