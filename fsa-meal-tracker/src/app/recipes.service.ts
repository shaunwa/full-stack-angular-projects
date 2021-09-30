import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './types';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

	constructor(
		private http: HttpClient,
	) { }

	getSearchResults(searchString: string): Observable<Recipe[]> {
		return this.http.get<Recipe[]>(`/api/recipes?search=${searchString}`);
	}
}
