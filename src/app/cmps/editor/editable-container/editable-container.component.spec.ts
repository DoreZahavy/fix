import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableContainerComponent } from './editable-container.component';

describe('EditableContainerComponent', () => {
  let component: EditableContainerComponent;
  let fixture: ComponentFixture<EditableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
