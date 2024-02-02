import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTxtComponent } from './editable-txt.component';

describe('EditableTxtComponent', () => {
  let component: EditableTxtComponent;
  let fixture: ComponentFixture<EditableTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableTxtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
