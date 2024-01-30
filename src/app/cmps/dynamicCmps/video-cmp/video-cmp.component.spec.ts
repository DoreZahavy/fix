import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCmpComponent } from './video-cmp.component';

describe('VideoCmpComponent', () => {
  let component: VideoCmpComponent;
  let fixture: ComponentFixture<VideoCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
