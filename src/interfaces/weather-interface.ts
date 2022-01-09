export interface IWeather {
  main: Main;
  weather: Weather;
  id:   number;
  name: string;
  rain: IRain;
  sys: Sun;
  wind: Wind;
}

export interface Main {
  temp?: number;
  feels_like: number;
}

export interface Weather {
  description: string;
  icon: string;
}

export interface Data {
  id: number;
  name?: string;
}

export interface IRain {
  h: number;
}

export interface Sun {
  sunrise: number;
  sunset: number;
}

export interface Wind {
  deg: number;
  gust: number;
  speed: number;
}