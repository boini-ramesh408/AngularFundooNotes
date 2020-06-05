import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdNotesComponent } from './searchd-notes.component';

describe('SearchdNotesComponent', () => {
  let component: SearchdNotesComponent;
  let fixture: ComponentFixture<SearchdNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
