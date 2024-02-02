import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableBtnComponent } from './editable-btn.component';

describe('EditableBtnComponent', () => {
  let component: EditableBtnComponent;
  let fixture: ComponentFixture<EditableBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
