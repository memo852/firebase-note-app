import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNoteComponentComponent } from './delete-note-component.component';

describe('DeleteNoteComponentComponent', () => {
  let component: DeleteNoteComponentComponent;
  let fixture: ComponentFixture<DeleteNoteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteNoteComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteNoteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
