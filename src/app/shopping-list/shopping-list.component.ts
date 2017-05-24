import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListDataService } from '../shared/data-sl.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService, private slDataService: ShoppingListDataService) {

   }

  ngOnInit() {

    this.ingredients = this.shoppingListService.getIngredients();
    
    this.subscription = this.shoppingListService.ingredientsArrayChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    //to prevent memory leaks we have to unsubscribe
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

}
