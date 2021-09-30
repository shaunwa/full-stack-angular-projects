import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.css']
})
export class ShoppingListPageComponent implements OnInit {
	isLoading = true;
	shoppingListItems: string[] = [];

	constructor(
		private shoppingListService: ShoppingListService,
	) { }

	ngOnInit(): void {
		this.shoppingListService.getShoppingListItems()
			.subscribe(items => {
				this.shoppingListItems = items;
				this.isLoading = false;
			});
	}

}
