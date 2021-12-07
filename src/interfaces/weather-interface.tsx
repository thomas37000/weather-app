export interface IWeather {
  data: Array<Data>;    
  main: Array<Main>;
}

export interface Data {
  id: number;
  name: string;
}

export interface Main {
  temp: number;
}