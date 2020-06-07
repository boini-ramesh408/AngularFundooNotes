import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReminderComponent } from './display-reminder.component';

describe('DisplayReminderComponent', () => {
  let component: DisplayReminderComponent;
  let fixture: ComponentFixture<DisplayReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
