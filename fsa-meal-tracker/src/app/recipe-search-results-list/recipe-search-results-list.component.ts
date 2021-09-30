import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsService } from '../meals.service';
import { Ingredient, Recipe } from '../types';

@Component({
  selector: 'app-recipe-search-results-list',
  templateUrl: './recipe-search-results-list.component.html',
  styleUrls: ['./recipe-search-results-list.component.css']
})
export class RecipeSearchResultsListComponent implements OnInit {
	@Input() recipes: Recipe[] = [];
	@Input() ingredients: Ingredient[] = [];

	selectedDate: string = '';

	constructor(
		private mealsService: MealsService,
		private route: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.selectedDate = params.date;
		});
	}

	addMealWithRecipe(recipeId: string) {
		this.mealsService.addMeal(this.selectedDate, recipeId)
			.subscribe(() => {
				alert('Successfully added recipe!');
				this.router.navigateByUrl('/');
			})
	}

	getMissingIngredients(recipe: Recipe): Ingredient[] {
		return recipe.ingredients.filter(recipeIngredient => !this.ingredients.some(ingredient => ingredient.name === recipeIngredient.name));
	}

}
