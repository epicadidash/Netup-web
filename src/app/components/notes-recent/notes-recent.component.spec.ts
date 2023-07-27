import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesRecentComponent } from './notes-recent.component';

describe('NotesRecentComponent', () => {
  let component: NotesRecentComponent;
  let fixture: ComponentFixture<NotesRecentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesRecentComponent]
    });
    fixture = TestBed.createComponent(NotesRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
