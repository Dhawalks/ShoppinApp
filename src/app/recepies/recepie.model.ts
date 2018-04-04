import { Ingredient } from "../utilities/ingredient.model";

export class Recepie{
    public name:string;
    public description:string;
    public urlPath:string;
    ingredients:Ingredient[];

    constructor(name:string, description:string, urlPath:string, ingredients:Ingredient[]){
        this.name = name;
        this.description = description;
        this.urlPath = urlPath;
        this.ingredients=ingredients
        }
}