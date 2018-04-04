import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../utilities/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingService.addIngredients(newIngredient);
    }
    this.editMode = false;
    this.slForm.resetForm();
  }

  onClear(){
    this.editMode = false;
    this.slForm.resetForm();
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
    this.slForm.resetForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
