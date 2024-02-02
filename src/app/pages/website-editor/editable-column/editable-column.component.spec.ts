import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableColumnComponent } from './editable-column.component';

describe('EditableColumnComponent', () => {
  let component: EditableColumnComponent;
  let fixture: ComponentFixture<EditableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
