import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindBoxComponent } from './remind-box.component';

describe('RemindBoxComponent', () => {
  let component: RemindBoxComponent;
  let fixture: ComponentFixture<RemindBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
