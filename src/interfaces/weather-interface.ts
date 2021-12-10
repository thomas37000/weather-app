export interface IWeather {
  main: Main;
  id:   number;
  name: string;
}

export interface Main {
  temp?: number;
  feels_like: number;
}

export interface Data {
  id: number;
  name?: string;
}