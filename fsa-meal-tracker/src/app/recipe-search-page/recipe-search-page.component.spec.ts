import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSearchPageComponent } from './recipe-search-page.component';

describe('RecipeSearchPageComponent', () => {
  let component: RecipeSearchPageComponent;
  let fixture: ComponentFixture<RecipeSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
