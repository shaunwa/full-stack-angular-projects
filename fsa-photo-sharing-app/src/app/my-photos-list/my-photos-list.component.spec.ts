import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhotosListComponent } from './my-photos-list.component';

describe('MyPhotosListComponent', () => {
  let component: MyPhotosListComponent;
  let fixture: ComponentFixture<MyPhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPhotosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
