import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableRouteComponent } from './editable-route.component';

describe('EditableRouteComponent', () => {
  let component: EditableRouteComponent;
  let fixture: ComponentFixture<EditableRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
