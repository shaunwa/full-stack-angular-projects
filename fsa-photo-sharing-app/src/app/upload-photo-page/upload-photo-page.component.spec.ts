import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPhotoPageComponent } from './upload-photo-page.component';

describe('UploadPhotoPageComponent', () => {
  let component: UploadPhotoPageComponent;
  let fixture: ComponentFixture<UploadPhotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPhotoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
