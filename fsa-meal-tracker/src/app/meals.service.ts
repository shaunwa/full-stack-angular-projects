import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MealRaw, Meal } from './types';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

	constructor(
		private http: HttpClient,
	) { }

	formatMealDate(rawMeal: MealRaw): Meal {
		return {
			...rawMeal,
			plannedDate: new Date(rawMeal.plannedDate),
		};
	}

	getMeals(): Observable<Meal[]> {
		return this.http.get<MealRaw[]>('/api/meals')
			.pipe(map(rawMeals => rawMeals.map(rawMeal => this.formatMealDate(rawMeal))));
	}

	deleteMeal(id: string): Observable<Meal[]> {
		return this.http.delete<MealRaw[]>(`/api/meals/${id}`)
			.pipe(map(rawMeals => rawMeals.map(rawMeal => this.formatMealDate(rawMeal))));
	}

	addMeal(date: string, recipeId: string): Observable<Meal[]> {
		return this.http.post<MealRaw[]>('/api/meals', { date, recipeId })
			.pipe(map(rawMeals => rawMeals.map(rawMeal => this.formatMealDate(rawMeal))));	
	}
}
