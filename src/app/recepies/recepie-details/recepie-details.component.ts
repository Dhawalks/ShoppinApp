import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {
  recepieDetails:Recepie;
  constructor(private recepieService:RecepieService, private shoppingListService:ShoppingListService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.recepieDetails = this.recepieService.getRecepie(params['id']);
      }
    );
  }
  toShoppingList(){
    for(let ingredient of this.recepieDetails.ingredients){
    this.shoppingListService.addIngredients(ingredient);
    }
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

}
