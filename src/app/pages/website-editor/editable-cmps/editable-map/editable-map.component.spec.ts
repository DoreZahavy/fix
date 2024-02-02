import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableMapComponent } from './editable-map.component';

describe('EditableMapComponent', () => {
  let component: EditableMapComponent;
  let fixture: ComponentFixture<EditableMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
