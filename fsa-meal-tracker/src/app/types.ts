export interface Ingredient {
	_id: string,
	name: string,
	amount: number,
	units: string,
}

export interface Recipe {
	id: string,
	name: string,
	ingredients: Ingredient[],
	originalRecipeLink: string,
}

export interface Meal {
	_id: string,
	recipe: Recipe,
	plannedDate: Date,
}

export interface MealRaw {
	_id: string,
	recipe: Recipe,
	plannedDate: string,
}