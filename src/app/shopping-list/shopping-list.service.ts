import { Ingredient } from "../utilities/ingredient.model";
import { Subject } from "rxjs/Subject";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
    private ingredients:Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];
    ingrdeintEmitter = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index:number){
        return this.ingredients[index];
    }
    addIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingrdeintEmitter.next(this.ingredients.slice());
    }
    addMultipleIngredients(ingredients:Ingredient[]){
        this.ingredients.concat(ingredients);
    }

    updateIngredient(index:number, ingredient:Ingredient){
        this.ingredients[index] = ingredient;
        this.ingrdeintEmitter.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index, 1);
        this.ingrdeintEmitter.next(this.ingredients.slice());
    }
}