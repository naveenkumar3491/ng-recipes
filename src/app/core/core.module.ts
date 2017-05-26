import { NgModule } from "@angular/core";
import { HomeComponent } from "app/core/home/home.component";
import { HeaderComponent } from "app/core/header/header.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";
import { CommonModule } from "@angular/common";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeService } from "app/recipes/recipe.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { ShoppingListDataService } from "app/shared/data-sl.service";
import { AuthService } from "app/shared/auth-service";
import { AuthGuard } from "app/auth/auth-guard.service";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ],
    providers: [ShoppingListService, RecipeService, DataStorageService, ShoppingListDataService, AuthService, AuthGuard],
    exports:[
        HeaderComponent,
        AppRoutingModule
    ]
})
export class CoreModule{

}