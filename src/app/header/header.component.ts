import { ShoppingListDataService } from '../shared/data-sl.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from '../shared/auth-service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	routerFragment = '';
	constructor(private dataStorageService: DataStorageService, 
	private router: Router, 
	private location: Location, 
	private slDataService: ShoppingListDataService,
	private authService: AuthService) {
		this.router.events.subscribe(
			(val) => {
				this.routerFragment = location.path();
			}
		)

	}

	onSaveData() {
		if (this.routerFragment == '/shopping-list') {
			this.slDataService.storeIngredients()
			.subscribe(
				(response: Response) => {
					console.log(response);
				}
			)
		} else if (this.routerFragment == '/recipes') {
			this.dataStorageService.storeRecipes()
			.subscribe(
				(response: Response) => {
					console.log(response);
				}
			);
		}
	}

	onFetchData() {
		if (this.routerFragment == '/shopping-list') {
			this.slDataService.fetchIngredients();
		} else if (this.routerFragment == '/recipes') {
			this.dataStorageService.getRecipes();
		}
	}
}