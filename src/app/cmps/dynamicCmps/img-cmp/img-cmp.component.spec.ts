import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCmpComponent } from './img-cmp.component';

describe('ImgCmpComponent', () => {
  let component: ImgCmpComponent;
  let fixture: ComponentFixture<ImgCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
