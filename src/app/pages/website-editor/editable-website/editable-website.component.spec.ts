import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableWebsiteComponent } from './editable-website.component';

describe('EditableWebsiteComponent', () => {
  let component: EditableWebsiteComponent;
  let fixture: ComponentFixture<EditableWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableWebsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditableWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
