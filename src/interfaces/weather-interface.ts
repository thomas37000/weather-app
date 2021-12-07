export interface IWeather {
  data: Array<Data>;    
  main: Array<Main>;
}

export interface Data {
  id: number;
  name: string | undefined;
}

export interface Main {
  temp: number | undefined;
}
