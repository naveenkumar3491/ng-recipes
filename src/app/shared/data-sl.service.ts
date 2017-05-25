import { RecipeService } from '../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { AuthService } from "app/shared/auth-service";

@Injectable()
export class ShoppingListDataService{
    constructor(private http: Http, private slService: ShoppingListService, private authService: AuthService){}

   storeIngredients(){
       const token = this.authService.getToken();
    return this.http.put('https://ng-recipebook-1f4c6.firebaseio.com/ingredients.json?auth=' + token, this.slService.getIngredients());
   }

   fetchIngredients(){
       const token = this.authService.getToken();
       return this.http.get('https://ng-recipebook-1f4c6.firebaseio.com/ingredients.json?auth=' + token)
       .map(
            (response: Response) => {
                const ingredients: Ingredient[] = response.json();
                return ingredients;
            }
        )
       .subscribe(
            (ingredients :Ingredient[]) => {
               this.slService.setIngredients(ingredients);
            }
        );;
   }
}