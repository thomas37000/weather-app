export module Responses {
    interface Weather {
      id: number;
      main: string;
    }
  
    export interface Main {
      temp: number;
    }
  
    export interface DataResponse {
      weather: Weather[];
      main: Main;
      id: number;
      name: string;
    }
  }