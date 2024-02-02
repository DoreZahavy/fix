import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCmpComponent } from './form-cmp.component';

describe('FormCmpComponent', () => {
  let component: FormCmpComponent;
  let fixture: ComponentFixture<FormCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
