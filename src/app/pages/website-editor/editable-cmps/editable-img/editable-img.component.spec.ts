import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableImgComponent } from './editable-img.component';

describe('EditableImgComponent', () => {
  let component: EditableImgComponent;
  let fixture: ComponentFixture<EditableImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
