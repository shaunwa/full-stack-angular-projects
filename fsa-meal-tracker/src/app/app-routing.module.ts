import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientPageComponent } from './add-ingredient-page/add-ingredient-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';

const routes: Routes = [{
	path: '',
	component: HomePageComponent,
}, {
	path: 'recipes',
	component: RecipeSearchPageComponent,
}, {
	path: 'add-ingredient',
	component: AddIngredientPageComponent,
}, {
	path: 'shopping-list',
	component: ShoppingListPageComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
