import { Family } from "./Family.model"
import { Continent } from "./Continent.model"
export interface Animal{
    id:number,
    name:string,
    type:string,
    family:Family,
    gender:string,
    date:Date,
    imgUrl:string,
    continent:Continent
}