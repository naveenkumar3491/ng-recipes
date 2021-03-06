import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "app/shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListRoutingModule } from "app/shopping-list/shopping-list-routing.module";


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
  ],
  imports:[
      CommonModule,
      FormsModule,
      ShoppingListRoutingModule
  ]
})
export class ShoppingListModule{

}