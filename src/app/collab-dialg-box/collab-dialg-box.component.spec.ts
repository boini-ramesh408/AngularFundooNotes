import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabDialgBoxComponent } from './collab-dialg-box.component';

describe('CollabDialgBoxComponent', () => {
  let component: CollabDialgBoxComponent;
  let fixture: ComponentFixture<CollabDialgBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabDialgBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabDialgBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
