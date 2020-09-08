

export interface Info {
  num:string;
  data: Data
}
  export interface Data {
    id: string;
    description: string;
    completed: boolean;
    properties : Properties
  }

  interface Properties {
    age:number;
    name:string;
  }