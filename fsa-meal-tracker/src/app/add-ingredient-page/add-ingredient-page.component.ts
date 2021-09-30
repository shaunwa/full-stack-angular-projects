import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-add-ingredient-page',
  templateUrl: './add-ingredient-page.component.html',
  styleUrls: ['./add-ingredient-page.component.css']
})
export class AddIngredientPageComponent implements OnInit {
	name: string = '';
	amount: string = '';
	units: string = '';
	unitOptions = [
		'pounds',
		'cups',
		'tablespoons',
		'teaspoons',
		'count',
	];

	constructor(
		private router: Router,
		private ingredientsService: IngredientsService,
	) { }

	ngOnInit(): void {
	}

	addToIngredients() {
		this.ingredientsService.addIngredient(this.name, Number(this.amount), this.units)
			.subscribe(() => {
				alert('Successfully added ingredient');
				this.router.navigateByUrl('/');
			});
	}

}
