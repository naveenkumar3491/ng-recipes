import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingEditForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingEditForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm){
    const value = form.value;
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(value.name, value.amount));
    }else{
      this.shoppingListService.onIngredientAdd(new Ingredient(value.name, value.amount));
    }
    this.editMode = false;
    this.shoppingEditForm.reset();
  }

  onClear(){
    this.shoppingEditForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
