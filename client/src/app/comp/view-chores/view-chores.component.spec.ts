import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChoresComponent } from './view-chores.component';

describe('ViewChoresComponent', () => {
  let component: ViewChoresComponent;
  let fixture: ComponentFixture<ViewChoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
