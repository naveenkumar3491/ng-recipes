import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";

const slRoutes: Routes = [
    {path: '', component: ShoppingListComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(slRoutes)
    ],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule{}