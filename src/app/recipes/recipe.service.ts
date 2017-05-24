import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    	recipes: Recipe[] = [
		new Recipe(
            'Test', 
            'Test Description', 
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
             [
                 new Ingredient('Meat', 1),
                 new Ingredient('Bread', 2)
             ]),
        new Recipe(
            'Test2', 
            'Test Description2', 
            'http://sangeetakaur.in/wp-content/uploads/2014/11/Blog-Edited-27-of-33.jpg',
            [
                new Ingredient('Fries', 3),
                 new Ingredient('Cigar', 4)
            ])
	];

    constructor(private slService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
         this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.ingredientsFromRecipeDetail(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}