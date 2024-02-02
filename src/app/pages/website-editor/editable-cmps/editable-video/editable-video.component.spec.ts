import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableVideoComponent } from './editable-video.component';

describe('EditableVideoComponent', () => {
  let component: EditableVideoComponent;
  let fixture: ComponentFixture<EditableVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
