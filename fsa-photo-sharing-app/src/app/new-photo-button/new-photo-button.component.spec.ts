import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhotoButtonComponent } from './new-photo-button.component';

describe('NewPhotoButtonComponent', () => {
  let component: NewPhotoButtonComponent;
  let fixture: ComponentFixture<NewPhotoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPhotoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPhotoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
