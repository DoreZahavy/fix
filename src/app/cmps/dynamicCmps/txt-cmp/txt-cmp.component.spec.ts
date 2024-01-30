import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtCmpComponent } from './txt-cmp.component';

describe('TxtCmpComponent', () => {
  let component: TxtCmpComponent;
  let fixture: ComponentFixture<TxtCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxtCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TxtCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
