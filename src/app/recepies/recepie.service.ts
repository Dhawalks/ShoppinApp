import { Recepie } from "./recepie.model";
import { Ingredient } from "../utilities/ingredient.model";

export class RecepieService{

    private recepies:Recepie[]=[new Recepie('Burger', 'The Jumbo burger', 'https://upload.wikimedia.org/wikipedia/commons/6/65/Jumbo_Burger_The_Home_Chef_India.jpg', [new Ingredient('Bread',2),new Ingredient('Onion', 2)]),
    new Recepie('Sandwich', 'Meat Sandwich', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsGlgezswiF3ZMRH09JqXmWV-dsehEns4Etkl_4DTvwEAqujP', [new Ingredient('bread', 2), new Ingredient('Meat',5)])];
    getRecepies(){
        return this.recepies.slice();
    }
    getRecepie(id:number){
        return this.recepies[id];
    }

    getId(recepie:Recepie){
        return this.recepies.indexOf(recepie);
    }
}