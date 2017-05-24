import { Subject } from 'rxjs/Rx';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {
  ingredientsArrayChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];



  setIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
    this.ingredientsArrayChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsArrayChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsArrayChanged.next(this.ingredients.slice());
  }

  onIngredientAdd(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
    this.ingredientsArrayChanged.next(this.ingredients.slice());
  }

  ingredientsFromRecipeDetail(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsArrayChanged.next(this.ingredients.slice());
  }
}