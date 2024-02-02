import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableNavBarComponent } from './editable-nav-bar.component';

describe('EditableNavBarComponent', () => {
  let component: EditableNavBarComponent;
  let fixture: ComponentFixture<EditableNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
