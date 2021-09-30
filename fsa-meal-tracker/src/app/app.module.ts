import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SmallXComponent } from './small-x/small-x.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddIngredientPageComponent } from './add-ingredient-page/add-ingredient-page.component';
import { RecipeSearchPageComponent } from './recipe-search-page/recipe-search-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { MealsListComponent } from './meals-list/meals-list.component';
import { RecipeSearchResultsListComponent } from './recipe-search-results-list/recipe-search-results-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    SmallXComponent,
    HomePageComponent,
    AddIngredientPageComponent,
    RecipeSearchPageComponent,
    ShoppingListPageComponent,
    IngredientsListComponent,
    MealsListComponent,
    RecipeSearchResultsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
