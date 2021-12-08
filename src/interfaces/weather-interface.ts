// export interface IWeather {
//   data: Array<Data>;    
//   main: Array<Main>;
// }

// export interface IWeather {
//   name?: string;
//   main: {
//     temp?: number;
//   }[]
// }


export interface IWeather {
  name?: string;
  temp: number;
}

export interface Data {
  id: number;
  name?: string;
}

// export interface Main {
//   main: {
//     temp?: number;
//   }[]
// }


// export interface Weather {
//   id: number;
//   name: string | null;
//   temp: number | null;
// }


// export interface Weather {
//   [prop:string]:string;
// }
