import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsListPageComponent } from './groups-list-page.component';

describe('GroupsListPageComponent', () => {
  let component: GroupsListPageComponent;
  let fixture: ComponentFixture<GroupsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
