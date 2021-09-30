import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedEmailsListComponent } from './shared-emails-list.component';

describe('SharedEmailsListComponent', () => {
  let component: SharedEmailsListComponent;
  let fixture: ComponentFixture<SharedEmailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedEmailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedEmailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
