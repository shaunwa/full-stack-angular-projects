import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsListComponent } from './meals-list.component';

describe('MealsListComponent', () => {
  let component: MealsListComponent;
  let fixture: ComponentFixture<MealsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
