import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArchieveNotesComponent } from './display-archieve-notes.component';

describe('DisplayArchieveNotesComponent', () => {
  let component: DisplayArchieveNotesComponent;
  let fixture: ComponentFixture<DisplayArchieveNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayArchieveNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayArchieveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
