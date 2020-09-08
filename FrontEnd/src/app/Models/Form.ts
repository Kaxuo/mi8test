export interface IForm {
    description:string;
    completed:boolean;
    properties: Properties
}

interface Properties {
    name:string;
    age:number;
}