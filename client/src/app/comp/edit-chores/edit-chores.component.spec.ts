import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChoresComponent } from './edit-chores.component';

describe('EditChoresComponent', () => {
  let component: EditChoresComponent;
  let fixture: ComponentFixture<EditChoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
