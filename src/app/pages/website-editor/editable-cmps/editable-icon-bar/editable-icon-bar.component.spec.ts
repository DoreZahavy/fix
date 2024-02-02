import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableIconBarComponent } from './editable-icon-bar.component';

describe('EditableIconBarComponent', () => {
  let component: EditableIconBarComponent;
  let fixture: ComponentFixture<EditableIconBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableIconBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableIconBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
