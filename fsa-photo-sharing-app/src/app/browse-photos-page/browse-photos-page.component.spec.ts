import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePhotosPageComponent } from './browse-photos-page.component';

describe('BrowsePhotosPageComponent', () => {
  let component: BrowsePhotosPageComponent;
  let fixture: ComponentFixture<BrowsePhotosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsePhotosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsePhotosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
